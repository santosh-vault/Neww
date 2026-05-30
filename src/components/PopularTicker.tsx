import { motion } from "framer-motion";

type Item = { title: string; href: string };

const items: Item[] = [
  {
    title: "Prime",
    href: "https://www.figma.com/design/l70rvOTz2uzr7p969ZcZgk/PRIME?node-id=0-1&t=M4i5QQPZhWBgb0c1-1",
  },
  {
    title: "TechNest Innovation",
    href: "https://www.figma.com/design/FzIsm8su4tvMrN8yQudTDL/TechNest?node-id=0-1&t=PJZCbFLG2UOVxXmU-1",
  },
  {
    title: "ATS Campaign",
    href: "https://www.behance.net/gallery/249993943/Brand-social-media-kit",
  },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <a href={t.href} target="_blank" rel="noreferrer noopener">
            <span
              className="font-display px-8 leading-none transition-colors duration-300 text-foreground hover:text-[var(--color-purple)] hover:italic"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              {t.title}
            </span>
          </a>
          <span className="text-foreground/40">✦</span>
        </span>
      ))}
    </div>
  );
}

export function PopularTicker() {
  return (
    <section
      aria-label="Popular work"
      className="relative overflow-hidden border-b border-[var(--color-rule)] py-8 md:py-10"
    >
      <div className="mb-6 flex items-baseline justify-between px-6 md:px-10">
        <div className="eyebrow text-muted-foreground">(02) — Popular</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-muted-foreground"
        >
          Most viewed · 2023 — 25
        </motion.div>
      </div>

      <div className="marquee-pause group relative">
        <div className="marquee-track">
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
