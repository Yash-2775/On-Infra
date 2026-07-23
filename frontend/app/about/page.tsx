import React from "react";
import type { Metadata } from "next";
import { CompanyTimeline } from "@/components/about/CompanyTimeline";
import { TeamSection } from "@/components/about/TeamSection";
import { AchievementsSection } from "@/components/about/AchievementsSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ONINFRA TECHNICAL SOLUTION, founded in 2017. Our evolution, leadership core team, and engineering achievements.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* 1. Our Evolution & Key Milestones */}
      <CompanyTimeline />

      {/* 2. Leadership & Expertise - Meet Our Core Team */}
      <TeamSection />

      {/* 3. Engineering Standards & Achievements */}
      <AchievementsSection />
    </div>
  );
}
