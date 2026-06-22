import { motion } from "framer-motion";
import { ProjectCard, type Project } from "./ProjectCard";
import imgLanding from "@/assets/card-landing.png";
import imgGraphic from "@/assets/card-graphic.png";
import imgLogos from "@/assets/card-logos.png";
import imgCarousel from "@/assets/card-carousel.png";
import imgUI from "@/assets/card-ui.png";
import imgEmail from "@/assets/email.png";

const projects: Project[] = [
  {
    title: "Landing Pages",
    category: "Web · Marketing",
    image: imgLanding,
    year: "2025",
    href: "https://www.behance.net/gallery/249996359/Website-Landing-Pages",
  },
  {
    title: "Graphic Design",
    category: "Print · Editorial",
    image: imgGraphic,
    year: "2025",
    href: "https://www.behance.net/gallery/223860145/Creative-Social-Media-Post-Designs-for-Brand",
  },
  {
    title: "Brand Logos",
    category: "Identity Systems",
    image: imgLogos,
    year: "2024",
    href: "https://www.behance.net/gallery/249991753/Moodboard",
  },
  {
    title: "Carousel Posts",
    category: "Social · Content",
    image: imgCarousel,
    year: "2024",
    href: "https://www.behance.net/gallery/249994129/Instagram-carousel-template-set",
  },
  {
    title: "UI/UX Design",
    category: "Product · Interface",
    image: imgUI,
    year: "2024",
    href: "https://www.figma.com/design/h9wtxvUcm8RRJMNqg6KXzX/ccrm?node-id=0-1&t=JsVqLKw62M1xOa3q-1",
  },
  {
    title: "Email Designs",
    category: "Visual · Concept",
    image: imgEmail,
    year: "2023",
    href: "https://www.behance.net/gallery/251491237/Email-Designs",
  },
];

export function ProjectGrid() {
  return (
    <section
      id="work"
      className="relative border-b border-[var(--color-rule)] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="grid-lines" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative mb-12 flex items-end justify-between md:mb-16"
      >
        <div>
          <div className="eyebrow text-muted-foreground">(03) — Selected work</div>
          <h2 className="font-display mt-3 text-4xl text-foreground md:text-6xl">
            Index, <span className="italic text-muted-foreground">2023 — 25</span>
          </h2>
        </div>
        <div className="eyebrow hidden text-muted-foreground md:block">
          {projects.length.toString().padStart(2, "0")} Projects
        </div>
      </motion.div>

      <div className="relative grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-8 md:gap-y-24">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={i % 3 === 1 ? "md:translate-y-16" : i % 3 === 2 ? "md:translate-y-8" : ""}
          >
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-24 flex items-center justify-between border-t border-[var(--color-rule)] pt-6 md:mt-32"
      >
        <span className="eyebrow text-muted-foreground">End of index</span>
        <span className="font-mono text-xs text-muted-foreground">↓ Available for new work</span>
      </motion.div>
    </section>
  );
}
