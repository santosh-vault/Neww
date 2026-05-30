import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const bio =
  "Creative UI & Graphic Designer crafting clean, intuitive interfaces and considered brand systems. Currently open to selected work.";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Very subtle parallax
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const labelY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full overflow-hidden border-b border-[var(--color-rule)] px-6 py-10 md:px-10 md:py-14"
    >
      <div className="relative grid grid-cols-12 gap-x-6 gap-y-8">
        <motion.div
          style={{ y: labelY }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="col-span-12 md:col-span-3"
        >
          <div className="eyebrow text-muted-foreground">(01) — Index</div>
          <div className="mt-3 font-mono text-xs text-muted-foreground">
            Portfolio / 2025
            <br />
            Based in Nepal
          </div>
        </motion.div>

        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="col-span-12 md:col-span-9"
        >
          <h1 className="font-display text-2xl leading-[1.15] text-foreground md:text-4xl">
            <span className="italic text-muted-foreground">Santosh Subedi</span> — a UI/UX
            &amp; graphic designer building intuitive interfaces, considered brand systems
            and quietly memorable visual work.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{bio}</p>
        </motion.div>
      </div>
    </section>
  );
}
