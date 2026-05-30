import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { SkillsTicker } from "@/components/SkillsTicker";
import { ProjectGrid } from "@/components/ProjectGrid";
import { BrandTicker } from "@/components/BrandTicker";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santosh Subedi — UI/UX & Graphic Designer in Nepal" },
      {
        name: "description",
        content:
          "Portfolio of Santosh Subedi — a freelance UI/UX and graphic designer in Nepal crafting landing pages, brand identities, social media kits and illustrations.",
      },
      {
        name: "keywords",
        content:
          "Santosh Subedi, Santosh, best graphics designer in Nepal, graphic design Nepal, freelance designer Nepal, UI UX designer Nepal, brand designer Nepal, logo designer Nepal, Nepali graphic designer",
      },
      { property: "og:title", content: "Santosh Subedi — UI/UX & Graphic Designer in Nepal" },
      {
        property: "og:description",
        content:
          "Selected design work by Santosh Subedi — interfaces, branding, posters, social media and editorial graphics from Nepal.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Santosh Subedi",
          alternateName: ["Santosh", "Santosh Sub"],
          jobTitle: "UI/UX & Graphic Designer",
          description:
            "Freelance UI/UX and graphic designer based in Nepal, specialising in brand identity, interface design and visual systems.",
          url: "/",
          email: "mailto:santoshsub.33@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "NP",
          },
          knowsAbout: [
            "UI design",
            "UX design",
            "Graphic design",
            "Brand identity",
            "Logo design",
            "Illustration",
            "Social media design",
          ],
          sameAs: [
            "https://www.behance.net/santoshsub",
            "https://www.linkedin.com/in/santoshsubedi75/",
            "https://github.com/santosh-vault",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="paper-texture bg-background text-foreground">
      <TopBar />
      <Hero />
      <SkillsTicker />
      <ProjectGrid />
      <BrandTicker />
      <Footer />
    </main>
  );
}
