"use client";

import React from "react";
import { Users, Cpu, HeartHandshake, Coins, ShieldCheck, Clock } from "lucide-react";
import { FEATURES_DATA } from "@/data/featuresData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeUp } from "@/components/animations/FadeUp";

const featureIconMap: Record<string, React.ElementType> = {
  Users,
  Cpu,
  HeartHandshake,
  Coins,
  ShieldCheck,
  Clock,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Engineering Precision You Can Rely On"
          subtitle="We combine decade-tested engineering expertise with modern technical tools to ensure structural resilience and timely delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature, index) => {
            const IconComponent = featureIconMap[feature.iconName] || ShieldCheck;

            return (
              <FadeUp key={feature.id} delay={index * 0.08}>
                <Card className="h-full group border border-gray-100/90 hover:border-blue-200">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-dark-muted text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
