import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "santosh@example.com";
const LINKEDIN = "https://www.linkedin.com/in/santoshsubedi75/";
const BEHANCE = "https://www.behance.net/santosh";

export function ContactStrip() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section className="border-t border-border px-6 py-20 md:px-12 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        className="grid gap-12 md:grid-cols-2 md:gap-20"
      >
        <div>
          <div className="eyebrow text-muted-foreground">Email</div>
          <button
            onClick={copy}
            className="font-display mt-4 block text-left text-3xl text-foreground transition-opacity hover:opacity-70 md:text-5xl"
          >
            {EMAIL}
          </button>
          <button
            onClick={copy}
            className="eyebrow mt-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="story-link">
              {copied ? "Copied!" : "Copy email"}
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="eyebrow text-muted-foreground">Elsewhere</div>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="font-display text-3xl text-foreground md:text-5xl"
          >
            <span className="story-link">LinkedIn</span>
          </a>
          <a
            href={BEHANCE}
            target="_blank"
            rel="noreferrer"
            className="font-display text-3xl text-foreground md:text-5xl"
          >
            <span className="story-link">Behance</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
