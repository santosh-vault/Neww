import { motion } from "framer-motion";
import ats from "@/assets/clients/ats.png";
import technest from "@/assets/clients/technest.png";
import ilBriefing from "@/assets/clients/il-briefing.png";
import optimal from "@/assets/clients/optimal-dev-labs.png";
import goldon from "@/assets/clients/goldon.png";
import naimesi from "@/assets/clients/naimesi.png";
import tealeaves from "@/assets/clients/tealeaves.png";
import wilmok from "@/assets/clients/wilmok.png";

const brands: { name: string; src: string }[] = [
  { name: "ATS", src: ats },
  { name: "TechNest", src: technest },
  { name: "il Briefing", src: ilBriefing },
  { name: "Optimal Dev Labs", src: optimal },
  { name: "GoldOn", src: goldon },
  { name: "Naimesi", src: naimesi },
  { name: "Tealeaves Inc", src: tealeaves },
  { name: "Wilmok Rome", src: wilmok },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {brands.map((b, i) => (
        <span key={i} className="flex items-center">
          <span className="flex items-center px-10">
            <img
              src={b.src}
              alt={`${b.name} logo - Designed by Santosh Subedi`}
              loading="lazy"
              decoding="async"
              className="h-16 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-20"
            />
          </span>
          <span className="text-foreground/30 font-mono text-xs">●</span>
        </span>
      ))}
    </div>
  );
}

export function BrandTicker() {
  return (
    <section
      id="clients"
      aria-label="Brands worked with"
      className="relative overflow-hidden border-b border-[var(--color-rule)] py-12 md:py-16"
    >
      <div className="mb-8 flex items-baseline justify-between px-6 md:px-10">
        <div className="eyebrow text-muted-foreground">(04) — Clients</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-muted-foreground"
        >
          Trusted by — selected partners
        </motion.div>
      </div>

      <div className="marquee-pause group relative">
        <div
          className="marquee-track"
          style={{ animationDuration: "55s", animationDirection: "reverse" }}
        >
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
