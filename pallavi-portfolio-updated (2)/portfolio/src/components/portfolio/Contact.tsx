import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Reveal, Section } from "./primitives";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "pallavisolday12@gmail.com",
    href: "mailto:pallavisolday12@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/pallavi-soldey-1b3888211",
    href: "https://www.linkedin.com/in/pallavi-soldey-1b3888211/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@pallavi0112",
    href: "https://github.com/pallavi0112",
  },
  { icon: Download, label: "Resume", value: "Download PDF", href: resumeAsset.url },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something exceptional.">
      <Reveal className="glass rounded-3xl p-6 sm:p-10 lg:p-14">
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Open to senior full stack roles, enterprise product work and long-term collaborations.
          The fastest way to reach me is email.
        </p>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-surface-2/40 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 sm:gap-5 sm:px-6 sm:py-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <l.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                  {l.label}
                </span>
                <span className="mt-1 block truncate text-sm">{l.value}</span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-center text-sm text-muted-foreground sm:mt-20 sm:flex-row sm:gap-4 sm:pt-10 sm:text-left">
        <span>© {new Date().getFullYear()} Pallavi Soldey</span>
        <span className="font-mono text-xs">Raipur, India — Senior Full Stack Developer</span>
      </footer>
    </Section>
  );
}
