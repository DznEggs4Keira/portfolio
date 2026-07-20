"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollHint() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function checkScrollable() {
      const scrollable = document.documentElement.scrollHeight > window.innerHeight + 80;
      const atTop = window.scrollY < 40;
      setVisible(scrollable && atTop);
    }

    // Layout needs a tick to settle after route changes before measuring height.
    const timeout = setTimeout(checkScrollable, 150);

    window.addEventListener("scroll", checkScrollable, { passive: true });
    window.addEventListener("resize", checkScrollable);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", checkScrollable);
      window.removeEventListener("resize", checkScrollable);
    };
  }, [pathname]);

  function handleClick() {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll down"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.4 },
            y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 5.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
