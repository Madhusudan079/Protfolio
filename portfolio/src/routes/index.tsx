import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/portfolio/Preloader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const title = "Pallavi Soldey — Senior Full Stack Developer";
const description =
  "Portfolio of Pallavi Soldey, Senior Full Stack Developer in Raipur, India, building scalable enterprise applications with React, Next.js, Node.js and Frappe.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pallavi Soldey",
          jobTitle: "Senior Full Stack Developer",
          address: { "@type": "PostalAddress", addressLocality: "Raipur", addressCountry: "IN" },
          knowsAbout: ["React.js", "Next.js", "TypeScript", "Node.js", "NestJS", "Frappe Framework"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Preloader />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
