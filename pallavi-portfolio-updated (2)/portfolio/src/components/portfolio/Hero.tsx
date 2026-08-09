import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import heroGlow from "@/assets/hero-glow.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const ROLES = [
  "Senior Full Stack Developer",
  "React & Next.js Specialist",
  "Node.js & Frappe Engineer",
  "Enterprise Product Builder",
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index] ?? "";
    const speed = deleting ? 35 : 70;
    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-primary align-middle" />
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <motion.img
        src={heroGlow}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        style={{ y }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_40%,#000,transparent_75%)]" />

      <motion.div style={{ opacity }} className="relative mx-auto w-full max-w-6xl px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for select opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.62, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl text-5xl leading-[1.02] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Pallavi Soldey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.75, duration: 0.7 }}
          className="mt-6 font-display text-xl font-medium sm:text-3xl"
        >
          <Typewriter />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.7 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          I build scalable enterprise applications with React, Next.js, Node.js and the Frappe
          Framework — from architecture and APIs to the last pixel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <Mail className="h-4 w-4" />
            Hire Me
          </a>
          <a
            href={resumeAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-secondary"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Raipur, India
          </span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
