"use client";

import { useEffect, useRef } from "react";
import { useMode } from "@/components/ModeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  birthTime: number;
  life: number;
  phase: number;
}

const MAX_PARTICLES = 70;
const SPAWN_INTERVAL_MS = 40;

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.trim().replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return { r, g, b };
}

export default function InkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mode } = useMode();
  const colorRef = useRef({ r: 187, g: 90, b: 46 });
  const particlesRef = useRef<Particle[]>([]);
  const lastSpawnRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  // Keep the resolved --accent color up to date whenever mode changes,
  // without forcing the draw loop to re-read computed styles every frame.
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
    reducedMotionRef.current = reduced;
    if (reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

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
    }
    resize();
    window.addEventListener("resize", resize);

    function spawn(x: number, y: number) {
      const now = performance.now();
      if (now - lastSpawnRef.current < SPAWN_INTERVAL_MS) return;
      lastSpawnRef.current = now;

      if (particlesRef.current.length >= MAX_PARTICLES) {
        particlesRef.current.shift();
      }

      const maxRadius = 40 + Math.random() * 60;
      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 4,
        maxRadius,
        birthTime: now,
        life: 4000 + Math.random() * 3000,
        phase: Math.random() * Math.PI * 2,
      });
    }

    function handlePointerMove(e: PointerEvent) {
      spawn(e.clientX, e.clientY);
    }
    window.addEventListener("pointermove", handlePointerMove);

    function handleVisibility() {
      if (document.hidden) {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else {
        rafRef.current = requestAnimationFrame(draw);
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);
      const { r, g, b } = colorRef.current;

      particlesRef.current = particlesRef.current.filter((p) => {
        const age = now - p.birthTime;
        if (age > p.life) return false;

        const t = age / p.life;
        const alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        p.radius += (p.maxRadius - p.radius) * 0.015;
        p.x += p.vx + Math.sin(now / 1400 + p.phase) * 0.15;
        p.y += p.vy + Math.cos(now / 1600 + p.phase) * 0.15;

        const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.1 * alpha})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fill();

        return true;
      });

      rafRef.current = requestAnimationFrame(draw);
    }
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
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
