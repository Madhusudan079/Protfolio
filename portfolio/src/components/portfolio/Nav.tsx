import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-60 h-[2px] w-full origin-left"
        style={{ scaleX: progress, background: "var(--gradient-brand)" }}
      />
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 ${
            scrolled ? "glass shadow-lg" : "border border-transparent"
          }`}
        >
          <a href="#home" className="px-4 font-display text-sm font-semibold">
            PS<span className="text-primary">.</span>
          </a>
          <div className="hidden items-center gap-0.5 sm:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="ml-1 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Let's talk
          </a>
        </nav>
      </motion.header>
    </>
  );
}
