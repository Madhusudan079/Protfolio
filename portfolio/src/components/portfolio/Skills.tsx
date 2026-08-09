import { motion } from "motion/react";
import {
  Atom,
  Boxes,
  Braces,
  Cloud,
  Cpu,
  Database,
  FileCode2,
  Figma,
  GitBranch,
  Layers,
  Leaf,
  Layout,
  Paintbrush,
  Server,
  Sparkles,
  TestTube2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Section } from "./primitives";
import { skillGroups } from "@/data/portfolio";

const groupMeta: Record<
  string,
  { icon: LucideIcon; caption: string; hue: string }
> = {
  Frontend: { icon: Layout, caption: "Interfaces & experience", hue: "195" },
  Backend: { icon: Server, caption: "APIs & business logic", hue: "265" },
  Database: { icon: Database, caption: "Data & persistence", hue: "160" },
  Tools: { icon: Wrench, caption: "Build, ship & collaborate", hue: "220" },
};

const skillIcons: Record<string, LucideIcon> = {
  "React.js": Atom,
  "Next.js": Layers,
  TypeScript: FileCode2,
  "Redux / Toolkit": Boxes,
  "Tailwind CSS": Paintbrush,
  JavaScript: Braces,
  "Node.js": Leaf,
  "Express.js": Server,
  NestJS: Cpu,
  "Frappe / ERPNext": Sparkles,
  MongoDB: Database,
  MySQL: Database,
  PostgreSQL: Database,
  "Git / GitHub": GitBranch,
  AWS: Cloud,
  Figma: Figma,
  Jest: TestTube2,
};

const RADIUS = 22;
const CIRC = 2 * Math.PI * RADIUS;

function SkillOrb({
  name,
  level,
  index,
  hue,
}: {
  name: string;
  level: number;
  index: number;
  hue: string;
}) {
  const Icon = skillIcons[name] ?? Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group/orb flex flex-col items-center gap-2 text-center"
    >
      <div className="relative grid h-[60px] w-[60px] place-items-center">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r={RADIUS}
            fill="none"
            strokeWidth="3"
            className="stroke-secondary"
          />
          <motion.circle
            cx="30"
            cy="30"
            r={RADIUS}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            stroke={`oklch(0.78 0.075 ${hue})`}
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            whileInView={{ strokeDashoffset: CIRC - (CIRC * level) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.15 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <span
          className="absolute inset-1.5 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover/orb:opacity-60"
          style={{ background: `oklch(0.78 0.075 ${hue} / 0.5)` }}
        />
        <Icon
          className="relative h-6 w-6 transition-transform duration-500 group-hover/orb:scale-110"
          style={{ color: `oklch(0.84 0.07 ${hue})` }}
          strokeWidth={1.6}
        />
      </div>
      <span className="text-xs leading-tight text-foreground/85">{name}</span>
      <span className="font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover/orb:opacity-100">
        {level}%
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The stack I ship with.">
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, gi) => {
          const meta = groupMeta[group.title] ?? {
            icon: Sparkles,
            caption: "",
            hue: "195",
          };
          const GroupIcon = meta.icon;
          return (
            <Reveal
              key={group.title}
              delay={gi * 0.07}
              className="group gradient-border overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                style={{ background: `oklch(0.78 0.075 ${meta.hue})` }}
              />
              <div className="relative mb-8 flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border"
                  style={{
                    background: `linear-gradient(140deg, oklch(0.78 0.075 ${meta.hue} / 0.22), transparent)`,
                  }}
                >
                  <GroupIcon
                    className="h-7 w-7"
                    style={{ color: `oklch(0.84 0.07 ${meta.hue})` }}
                    strokeWidth={1.5}
                  />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <p className="text-xs text-muted-foreground">{meta.caption}</p>
                </div>
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative grid grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-4">
                {group.items.map((item, i) => (
                  <SkillOrb
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    index={i}
                    hue={meta.hue}
                  />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
