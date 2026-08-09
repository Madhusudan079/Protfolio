import { motion, useScroll, useTransform } from "motion/react";
import {
  Briefcase,
  Code2,
  Rocket,
  Sparkles,
  Terminal,
  Flag,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import { Section } from "./primitives";
import { experience } from "@/data/portfolio";

type Job = (typeof experience)[number];

const roleMeta: { icon: LucideIcon; hue: string }[] = [
  { icon: Terminal, hue: "220" },
  { icon: Code2, hue: "160" },
  { icon: Briefcase, hue: "265" },
  { icon: Rocket, hue: "195" },
];

function RoadNode({
  index,
  total,
  hue,
  active,
}: {
  index: number;
  total: number;
  hue: string;
  active: boolean;
}) {
  const Icon = index === total - 1 ? Sparkles : roleMeta[index]?.icon ?? Briefcase;
  return (
    <div className="relative grid place-items-center">
      {/* glow */}
      <span
        className="absolute h-14 w-14 rounded-full opacity-40 blur-xl"
        style={{ background: `oklch(0.78 0.075 ${hue} / 0.6)` }}
      />
      {/* pulse ring for current role */}
      {index === total - 1 && (
        <motion.span
          className="absolute h-12 w-12 rounded-full"
          style={{ border: `2px solid oklch(0.78 0.075 ${hue} / 0.5)` }}
          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <div
        className="relative grid h-12 w-12 place-items-center rounded-2xl border border-border"
        style={{
          background: `linear-gradient(140deg, oklch(0.78 0.075 ${hue} / 0.25), var(--surface))`,
          boxShadow: active
            ? `0 0 24px -4px oklch(0.78 0.075 ${hue} / 0.6)`
            : "none",
        }}
      >
        <Icon
          className="h-5 w-5"
          style={{ color: `oklch(0.86 0.06 ${hue})` }}
          strokeWidth={1.7}
        />
      </div>
    </div>

  );
}

function JobCard({ job, index, side }: { job: Job; index: number; side: "left" | "right" }) {
  const hue = roleMeta[index]?.hue ?? "195";
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -40 : 40, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group gradient-border relative overflow-hidden rounded-3xl p-6 sm:p-7"
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-45"
        style={{ background: `oklch(0.78 0.075 ${hue})` }}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[11px] uppercase tracking-[0.25em]"
            style={{ color: `oklch(0.83 0.06 ${hue})` }}
          >
            Milestone {String(index + 1).padStart(2, "0")}
          </span>
          {job.period && (
            <span className="ml-auto rounded-full border border-border px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
              {job.period}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-xl font-semibold">
          {job.role}
          <span className="text-primary"> · </span>
          <span className="text-primary">{job.company}</span>
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{job.summary}</p>
        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {job.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                style={{ background: `oklch(0.78 0.075 ${hue})` }}
              />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {job.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const journey = [...experience].reverse();
  const total = journey.length;

  return (
    <Section id="experience" eyebrow="Experience" title="The road so far.">
      <div ref={trackRef} className="relative">
        {/* ---------- Desktop: alternating roadmap ---------- */}
        <div className="relative hidden md:block">
          {/* center winding path */}
          <svg
            className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2"
            preserveAspectRatio="none"
            viewBox="0 0 100 1000"
            fill="none"
          >
            {/* base path */}
            <path
              d="M50 0 C 30 125, 70 195, 50 320 C 30 445, 70 515, 50 640 C 30 765, 70 835, 50 1000"
              stroke="var(--border)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            {/* animated progress path */}
            <motion.path
              d="M50 0 C 30 125, 70 195, 50 320 C 30 445, 70 515, 50 640 C 30 765, 70 835, 50 1000"
              stroke="url(#roadGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.075 195)" />
                <stop offset="50%" stopColor="oklch(0.70 0.075 265)" />
                <stop offset="100%" stopColor="oklch(0.80 0.06 160)" />
              </linearGradient>
            </defs>
          </svg>

          {/* start marker */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
              <Flag className="h-4 w-4 text-primary" strokeWidth={1.8} />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Start
              </span>
            </div>
          </div>

          <div className="space-y-24 pb-10 pt-20">
            {journey.map((job, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              const hue = roleMeta[i]?.hue ?? "195";
              return (
                <div key={job.company} className="relative grid grid-cols-2 items-center gap-0">
                  {/* node centered on path */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <RoadNode index={i} total={total} hue={hue} active />
                  </div>
                  {/* connector line from node to card */}
                  <div
                    className={`absolute top-1/2 h-px w-12 -translate-y-1/2 ${
                      side === "left"
                        ? "left-[calc(50%-3rem)]"
                        : "left-[calc(50%+1.5rem)]"
                    }`}
                    style={{ background: `linear-gradient(${side === "left" ? "270deg" : "90deg"}, oklch(0.78 0.075 ${hue} / 0.5), transparent)` }}
                  />
                  <div className={side === "left" ? "pr-16" : "col-start-2 pl-16"}>
                    <JobCard job={job} index={i} side={side} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* end marker */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
            <div className="flex items-center gap-2 rounded-full border border-primary/40 bg-surface px-4 py-1.5">
              <MapPin className="h-4 w-4 text-primary" strokeWidth={1.8} />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                Now
              </span>
            </div>
          </div>
        </div>

        {/* ---------- Mobile: left rail roadmap ---------- */}
        <div className="relative md:hidden">
          <svg
            className="absolute left-[20px] top-0 h-full w-2"
            preserveAspectRatio="none"
            viewBox="0 0 8 1000"
            fill="none"
          >
            <path d="M4 0 L4 1000" stroke="var(--border)" strokeWidth="2" strokeDasharray="6 8" />
            <motion.path
              d="M4 0 L4 1000"
              stroke="url(#roadGradM)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="roadGradM" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.075 195)" />
                <stop offset="50%" stopColor="oklch(0.70 0.075 265)" />
                <stop offset="100%" stopColor="oklch(0.80 0.06 160)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-8 pl-[68px]">
            {journey.map((job, i) => {
              const hue = roleMeta[i]?.hue ?? "195";
              return (
                <div key={job.company} className="relative">
                  <div className="absolute -left-[68px] top-4 z-10">
                    <RoadNode index={i} total={total} hue={hue} active />
                  </div>
                  <JobCard job={job} index={i} side="left" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
