import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { CompanyTimeline } from "@/components/about/CompanyTimeline";
import { TeamSection } from "@/components/about/TeamSection";
import { AchievementsSection } from "@/components/about/AchievementsSection";
import { ClientLogoSlider } from "@/components/ui/ClientLogoSlider";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ONINFRA TECHNICAL SOLUTION, founded in 2017. Our team, engineering mission, timeline, and civil infrastructure expertise.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVisionValues />
      <CompanyTimeline />
      <TeamSection />
      <AchievementsSection />
      <ClientLogoSlider />
      <CtaSection />
    </>
  );
}
