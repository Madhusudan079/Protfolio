import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Reveal, Section } from "./primitives";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="gradient-border group h-full overflow-hidden rounded-3xl"
            >
              <div
                className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute inset-0 bg-background/55 transition-colors duration-500 group-hover:bg-background/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {p.title}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 text-xs text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {p.tagline}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <ul className="mt-4 grid gap-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
