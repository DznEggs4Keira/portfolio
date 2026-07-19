"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Mode = "gamedev" | "backend";

interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextValue | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("gamedev");

  useEffect(() => {
    const stored = localStorage.getItem("mode");
    if (stored === "gamedev" || stored === "backend") {
      setModeState(stored);
    }
  }, []);

  const setMode = (next: Mode) => {
    setModeState(next);
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem("mode", next);
    } catch {
      // localStorage unavailable (private browsing, etc.) - mode just won't persist
    }
  };

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return ctx;
}
