"use client";

import { useMode } from "@/components/ModeContext";

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="relative flex items-center bg-paper-raised border border-rule rounded-full p-1">
      <div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-accent transition-transform duration-500 ease-in-out"
        style={{
          transform: mode === "gamedev" ? "translateX(100%)" : "translateX(0%)",
        }}
      />
      <button
        type="button"
        onClick={() => setMode("backend")}
        aria-pressed={mode === "backend"}
        className={`relative z-10 min-w-[88px] px-4 py-1.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wide transition-colors ${
          mode === "backend" ? "text-paper-raised" : "text-ink-soft"
        }`}
      >
        Backend
      </button>
      <button
        type="button"
        onClick={() => setMode("gamedev")}
        aria-pressed={mode === "gamedev"}
        className={`relative z-10 min-w-[88px] px-4 py-1.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wide transition-colors ${
          mode === "gamedev" ? "text-paper-raised" : "text-ink-soft"
        }`}
      >
        Game Dev
      </button>
    </div>
  );
}
