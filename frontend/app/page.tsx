import React from "react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsSection } from "@/components/home/StatsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ClientLogoSlider } from "@/components/ui/ClientLogoSlider";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/ui/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsSection />
      <IndustriesSection />
      <ClientLogoSlider />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
