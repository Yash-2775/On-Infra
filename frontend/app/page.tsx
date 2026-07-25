import React from "react";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { SurveillanceSolutionsSlider } from "@/components/home/SurveillanceSolutionsSlider";
import { BrandsSlider } from "@/components/home/BrandsSlider";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsSection } from "@/components/home/StatsSection";
import { CtaSection } from "@/components/ui/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <SurveillanceSolutionsSlider />
      <BrandsSlider />
      <WhyChooseUs />
      <StatsSection />
      <CtaSection />
    </>
  );
}
