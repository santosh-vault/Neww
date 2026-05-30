import { motion } from "framer-motion";

type Skill = { name: string; tag: string };

const skills: Skill[] = [
  { name: "UI / UX Design", tag: "Interfaces" },
  { name: "Figma", tag: "Tool" },
  { name: "Adobe Photoshop", tag: "Tool" },
  { name: "Adobe Illustrator", tag: "Tool" },
  { name: "Framer", tag: "Prototype" },
  { name: "Canva", tag: "Tool" },
  { name: "AI Tools", tag: "Workflow" },
  { name: "Brand Identity", tag: "Craft" },
  { name: "Illustration", tag: "Craft" },
  { name: "Social Media Design", tag: "Craft" },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {skills.map((s, i) => (
        <span key={i} className="flex items-center">
          <span
            className="font-display px-8 leading-none text-foreground"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
          >
            {s.name}
          </span>
          <span className="text-foreground/40">✦</span>
        </span>
      ))}
    </div>
  );
}

export function SkillsTicker() {
  return (
    <section
      id="skills"
      aria-label="Skills & tools"
      className="relative overflow-hidden border-b border-[var(--color-rule)] py-8 md:py-10"
    >
      <div className="mb-6 flex items-baseline justify-between px-6 md:px-10">
        <div className="eyebrow text-muted-foreground">(02) — Skills</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-muted-foreground"
        >
          Tools · Craft · Workflow
        </motion.div>
      </div>

      <div className="marquee-pause group relative">
        <div className="marquee-track marquee-slow">
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
