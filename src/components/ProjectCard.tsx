import { motion } from "framer-motion";

export type Project = {
  title: string;
  category: string;
  image: string;
  year: string;
  href?: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.a
      href={project.href ?? "#"}
      target={project.href ? "_blank" : undefined}
      rel={project.href ? "noreferrer noopener" : undefined}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.08,
        ease: [0.65, 0, 0.35, 1],
      }}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-card p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 z-10 border border-foreground/10" aria-hidden />

        <img
          src={project.image}
          alt={`Santosh Subedi - ${project.title} - Graphic Design Nepal`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain transition-transform duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.04]"
        />

        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundColor: "var(--color-purple)", mixBlendMode: "multiply" }}
          aria-hidden
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-muted-foreground">{num}</span>
          <div>
            <h3 className="font-display text-xl text-foreground md:text-2xl">
              {project.title}
            </h3>
            <div className="eyebrow mt-1 text-muted-foreground">{project.category}</div>
          </div>
        </div>
        <span className="eyebrow text-muted-foreground">{project.year}</span>
      </div>
    </motion.a>
  );
}
