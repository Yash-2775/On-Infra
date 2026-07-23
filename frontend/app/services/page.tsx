import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetailCard } from "@/components/services/ServiceDetailCard";
import { SERVICES_DATA } from "@/data/servicesData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientLogoSlider } from "@/components/ui/ClientLogoSlider";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = {
  title: "Engineering & Infrastructure Services",
  description:
    "Explore ONINFRA's full technical capabilities: Civil Engineering, Electrical Design, 3D BIM Modelling, Structural Blueprints, Site Supervision & Survey.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="py-20 bg-lightGray">
        <Container>
          <SectionHeading
            badge="Full Service Catalog"
            title="Our Technical & Execution Capabilities"
            subtitle="Merging engineering products into holistic, end-to-end technical solutions."
          />

          <div className="mt-12">
            {SERVICES_DATA.map((service, index) => (
              <ServiceDetailCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <ClientLogoSlider />
      <CtaSection />
    </>
  );
}
