import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import footerBanner from "@/assets/footer-banner.jpg";

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on the banner image (image moves slower than scroll)
  const { scrollYProgress: bannerProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const bannerY = useTransform(bannerProgress, [0, 1], ["-12%", "12%"]);
  const bannerScale = useTransform(bannerProgress, [0, 1], [1.15, 1.15]);

  // Wordmark reveal as footer enters
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const wordY = useTransform(scrollYProgress, [0, 1], ["12%", "-2%"]);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.2, 0.8, 1]);

  return (
    <div ref={ref} className="relative">
      <div className="relative w-full overflow-hidden rounded-t-[2.5rem] bg-foreground text-background">
        {/* internal grid lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
          }}
          aria-hidden
        />

        <div className="relative flex flex-col px-6 pt-10 pb-8 md:px-10 md:pt-14 md:pb-10">
          {/* Top rail */}
          <div
            id="contact"
            className="flex items-start justify-between border-b border-background/15 pb-6"
          >
            <div className="eyebrow text-background/55">(05) — Contact</div>
            <div className="eyebrow text-background/55">
              {new Date().getFullYear()} · All rights reserved
            </div>
          </div>

          {/* Parallax banner */}
          <div
            ref={bannerRef}
            className="relative mt-10 h-[42vh] min-h-[280px] max-h-[520px] w-full overflow-hidden rounded-2xl border border-background/15"
          >
            <motion.img
              src={footerBanner}
              alt="Santosh Subedi — UI/UX, brand & graphic designer"
              loading="lazy"
              width={1920}
              height={1080}
              style={{ y: bannerY, scale: bannerScale }}
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
            />
            {/* soft top/bottom edge for blending */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-foreground/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/70 to-transparent" />

            {/* Banner caption */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 md:p-8">
              <div>
                <div className="eyebrow text-background/70">Designer</div>
                <p className="font-display mt-1 text-2xl leading-[1.05] tracking-[-0.02em] md:text-4xl">
                  Santosh Subedi
                </p>
              </div>
              <p className="hidden max-w-xs text-right font-mono text-xs leading-relaxed text-background/70 md:block">
                Crafting interfaces, brand systems and considered visual work
                from Nepal.
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="mt-12 md:mt-20">
            <div className="flex items-center gap-3">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
              <div className="eyebrow text-background/65">
                Available for work
              </div>
            </div>
            <a
              href="mailto:santoshsub.33@gmail.com"
              className="font-display mt-5 block leading-[0.9] tracking-[-0.04em] transition-colors hover:text-[var(--color-purple)]"
              style={{ fontSize: "clamp(2.5rem, 9.5vw, 9rem)" }}
            >
              Let’s make
              <br />
              <span className="italic">something —↗</span>
            </a>
          </div>

          {/* Links grid */}
          <div className="mt-14 grid grid-cols-12 gap-y-8 gap-x-6 border-t border-background/15 pt-10">
            <div className="col-span-12 md:col-span-3">
              <div className="eyebrow text-background/55">Email</div>
              <a
                href="mailto:santoshsub.33@gmail.com"
                className="story-link mt-3 block font-mono text-sm"
              >
                santoshsub.33@gmail.com
              </a>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="eyebrow text-background/55">Elsewhere</div>
              <ul className="mt-3 flex flex-col gap-1.5 font-mono text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/santoshsubedi75/"
                    target="_blank"
                    rel="noreferrer"
                    className="story-link w-fit"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/santoshsub"
                    target="_blank"
                    rel="noreferrer"
                    className="story-link w-fit"
                  >
                    Behance ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/santosh-vault"
                    target="_blank"
                    rel="noreferrer"
                    className="story-link w-fit"
                  >
                    GitHub ↗
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="eyebrow text-background/55">Index</div>
              <ul className="mt-3 flex flex-col gap-1.5 font-mono text-sm">
                <li>
                  <a href="#about" className="story-link w-fit">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="story-link w-fit">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#work" className="story-link w-fit">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#clients" className="story-link w-fit">
                    Clients
                  </a>
                </li>
                <li>
                  <a href="#contact" className="story-link w-fit">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right">
              <div className="eyebrow text-background/55">Based in</div>
              <p className="mt-3 font-mono text-sm text-background/80">
                Kathmandu, Nepal
                <br />
                <span className="text-background/55">UTC +5:45</span>
              </p>
            </div>
          </div>

          {/* Oversized footer wordmark with parallax */}
          <div className="mt-16 overflow-hidden pt-2">
            <motion.div
              style={{ y: wordY, opacity: wordOpacity }}
              className="font-display select-none leading-[0.82] tracking-[-0.06em] text-background"
              aria-hidden
            >
              <div style={{ fontSize: "clamp(4rem, 22vw, 22rem)" }}>
                santosh<span className="text-[var(--color-purple)]">.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
