# Santosh — Portfolio Landing Page

A single-route landing page modeled on mastak.framer.website: pitch-black background, oversized display type, image-led project grid, smooth scroll-driven reveal animations.

## Aesthetic

- **Background:** near-black (`oklch(0.08 0 0)`), warm off-white text
- **Type pairing:** Instrument Serif (display, oversized name "Santosh") + Inter (body/labels, tight tracking, uppercase eyebrows)
- **Layout:** generous whitespace, asymmetric, no nav bar — top corners hold small role labels ("Santosh" / "UI & Graphic Designer") exactly like Mastak
- **Accent:** subtle only — hover states use a soft cream underline; no bright colors

## Page Sections (single scroll)

1. **Hero**
   - Top-left tag: `Santosh` · top-right tag: `UI/UX & Graphic Designer`
   - Massive serif name "santosh" filling the viewport
   - Short bio paragraph (the one you provided) under it
2. **Contact strip**
   - Email with copy-to-clipboard ("Copy Email" → "Copied!") like Mastak
   - LinkedIn · Behance · Email links in a row, large type, underline-on-hover
3. **Selected work grid**
   - 5–6 placeholder project cards in an asymmetric grid (varied aspect ratios, à la Mastak)
   - Each card: large image + project title + "Show project" affordance
   - Image placeholders generated for: UI dashboard concept, mobile app, brand identity / logo system, poster series, social media campaign, web design case study
4. **Footer**
   - Minimal: name, year, repeat contact links

## Smooth Scroll & Animations

- **Lenis** for smooth/inertial page scroll
- **Framer Motion** for: hero fade+rise on load, project cards reveal on scroll (`whileInView`, staggered y-translate + opacity), subtle image scale on hover
- Project titles use the existing `.story-link` underline animation
- Respects `prefers-reduced-motion`

## Technical Details

- New route: `src/routes/index.tsx` (replace placeholder)
- New components: `src/components/Hero.tsx`, `ContactStrip.tsx`, `ProjectGrid.tsx`, `ProjectCard.tsx`, `Footer.tsx`
- Lenis wrapper hook: `src/hooks/use-lenis.ts`
- Add deps: `lenis`, `framer-motion`
- Design tokens in `src/styles.css`: dark background, cream foreground, serif/sans font variables; load Instrument Serif + Inter from Google Fonts via `<link>` in `__root.tsx` head
- 6 project images generated to `src/assets/` and imported as ES modules
- Update `__root.tsx` head: title "Santosh — UI & Graphic Designer", matching meta description, og tags

## Things I'm assuming (tell me to change)

- Contact links use `mailto:santosh@example.com`, `linkedin.com/in/santoshsubedi75`, `behance.net/santosh` as placeholders — share real URLs and I'll swap them in
- Project cards are placeholders with generated imagery + invented titles since you haven't shared real work yet; easy to replace with real screenshots later
