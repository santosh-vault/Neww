import { motion } from "framer-motion";

export function TopBar() {
  return (
    <header className="relative z-10 w-full border-b border-[var(--color-rule)]">
      <div className="relative px-6 pt-6 pb-2 md:px-10 md:pt-8 md:pb-3">
        <div className="flex items-end justify-between gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            className="font-display leading-[0.78] tracking-[-0.05em] text-foreground"
            style={{ fontSize: "clamp(4.5rem, 18vw, 18rem)" }}
          >
            santosh<span className="text-foreground/30">.</span>
          </motion.h1>
        </div>
      </div>
    </header>
  );
}
