"use client";

import { useEffect, useRef } from "react";
import { useMode } from "@/components/ModeContext";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  bright: boolean;
  twinklePhase: number;
  twinkleSpeed: number;
}

interface FogBlob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

const MESH_COUNT = 100;
const LINK_DISTANCE = 150;
const MESH_BRIGHT_CHANCE = 0.16;

const DISTANT_COUNT = 180;
const FOG_COUNT = 4;

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.trim().replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return { r, g, b };
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mode } = useMode();
  const colorRef = useRef({ r: 187, g: 90, b: 46 });
  const meshRef = useRef<Star[]>([]);
  const distantRef = useRef<Star[]>([]);
  const fogRef = useRef<FogBlob[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const resolved = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    if (resolved) {
      colorRef.current = hexToRgb(resolved);
    }
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    function makeMeshStar(): Star {
      const bright = Math.random() < MESH_BRIGHT_CHANCE;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: bright ? 2.2 + Math.random() * 1.4 : 0.6 + Math.random() * 1.2,
        baseAlpha: bright ? 0.7 + Math.random() * 0.3 : 0.2 + Math.random() * 0.35,
        bright,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.0006 + Math.random() * 0.0012,
      };
    }

    function makeDistantStar(): Star {
      const bright = Math.random() < 0.06;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        // Far slower drift than the mesh layer — reads as "further away" (parallax).
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        radius: bright ? 1.4 + Math.random() * 0.8 : 0.4 + Math.random() * 0.7,
        baseAlpha: bright ? 0.5 + Math.random() * 0.25 : 0.08 + Math.random() * 0.2,
        bright,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.0004 + Math.random() * 0.0008,
      };
    }

    function makeFogBlob(): FogBlob {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.03,
        vy: (Math.random() - 0.5) * 0.03,
        radius: 260 + Math.random() * 260,
        alpha: 0.035 + Math.random() * 0.04,
      };
    }

    function seed() {
      meshRef.current = Array.from({ length: MESH_COUNT }, makeMeshStar);
      distantRef.current = Array.from({ length: DISTANT_COUNT }, makeDistantStar);
      fogRef.current = Array.from({ length: FOG_COUNT }, makeFogBlob);
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
      if (meshRef.current.length === 0) seed();
    }
    resize();
    window.addEventListener("resize", resize);

    function handleVisibility() {
      if (document.hidden) {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else {
        rafRef.current = requestAnimationFrame(draw);
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);

    function wrap(p: { x: number; y: number; vx: number; vy: number }) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));
    }

    function drawFog() {
      const { r, g, b } = colorRef.current;
      for (const f of fogRef.current) {
        wrap(f);
        const gradient = ctx!.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${f.alpha})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function drawStars(stars: Star[], now: number, withGlow: boolean) {
      const { r, g, b } = colorRef.current;
      for (const s of stars) {
        wrap(s);
        const twinkle = 0.7 + 0.3 * Math.sin(now * s.twinkleSpeed + s.twinklePhase);
        const alpha = s.baseAlpha * twinkle;

        if (withGlow && s.bright) {
          ctx!.shadowBlur = s.radius * 3.5;
          ctx!.shadowColor = `rgba(${r}, ${g}, ${b}, ${0.6 * twinkle})`;
        }

        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx!.fill();

        if (withGlow && s.bright) {
          ctx!.shadowBlur = 0;
        }
      }
    }

    function drawMeshLinks() {
      const { r, g, b } = colorRef.current;
      const stars = meshRef.current;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = 0.3 * (1 - dist / LINK_DISTANCE);
            ctx!.beginPath();
            ctx!.moveTo(stars[i].x, stars[i].y);
            ctx!.lineTo(stars[j].x, stars[j].y);
            ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);
      drawFog();
      drawStars(distantRef.current, now, false);
      drawMeshLinks();
      drawStars(meshRef.current, now, true);
      rafRef.current = requestAnimationFrame(draw);
    }
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
