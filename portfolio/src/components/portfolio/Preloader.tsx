import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.span
              className="font-display text-2xl font-semibold tracking-tight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pallavi<span className="text-primary">.</span>
            </motion.span>
            <div className="h-px w-48 overflow-hidden bg-border">
              <motion.div
                className="h-full w-full origin-left"
                style={{ background: "var(--gradient-brand)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Loading portfolio
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
