import { motion } from "motion/react";
import { Briefcase, Code2, Users } from "lucide-react";
import { Counter, Reveal, Section } from "./primitives";
import { stats } from "@/data/portfolio";

const highlights = [
  { icon: Code2, title: "Architecture", copy: "Modern frontend architecture and clean, typed backend APIs." },
  { icon: Briefcase, title: "Ownership", copy: "End-to-end delivery from requirements to production release." },
  { icon: Users, title: "Communication", copy: "Direct client communication, requirement gathering, team leadership." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Enterprise software, crafted end to end.">
      <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
        <Reveal className="glass rounded-3xl p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-foreground/90">
            Full Stack Developer experienced in building scalable enterprise applications using
            React.js, Next.js, Node.js and the Frappe Framework.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I work across the whole product surface — client communication, requirement gathering,
            project ownership, API integration, backend development and modern frontend
            architecture. Based in Raipur, India, working with teams everywhere.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-border bg-surface-2/50 p-4 transition-colors hover:border-primary/40"
              >
                <h.icon className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm font-medium">{h.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{h.copy}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="gradient-border flex flex-col justify-center gap-2 rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <Counter to={s.value} suffix={s.suffix} />
              <span className="text-xs tracking-wide text-muted-foreground uppercase">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
