"use client";

import React from "react";
import { Target, Eye, ShieldAlert, Award, Compass, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeUp } from "@/components/animations/FadeUp";

export function MissionVisionValues() {
  const values = [
    {
      title: "Technical Excellence",
      description: "Sub-millimeter accuracy in 3D BIM models, blueprints, and physical site measurements.",
      icon: Target,
    },
    {
      title: "Uncompromising Safety",
      description: "Adherence to structural safety factors and environmental protection standard operating procedures.",
      icon: ShieldAlert,
    },
    {
      title: "Client-Centric Integrity",
      description: "Transparent cost estimations, open communication, and timely milestone delivery.",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-lightGray">
      <Container>
        <SectionHeading
          badge="Guiding Principles"
          title="Mission, Vision & Core Values"
          subtitle="The strategic principles that drive our engineering team forward every day."
        />

        {/* Mission & Vision Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FadeUp delay={0.1}>
            <Card className="h-full border-l-4 border-l-primary bg-white p-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-dark mb-4">Our Mission</h3>
              <p className="text-dark-muted leading-relaxed text-base">
                To deliver state-of-the-art civil engineering, structural design, 3D modelling, and electrical infrastructure solutions that empower developers to build safely, efficiently, and sustainably across Maharashtra.
              </p>
            </Card>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Card className="h-full border-l-4 border-l-secondary bg-white p-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-secondary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-dark mb-4">Our Vision</h3>
              <p className="text-dark-muted leading-relaxed text-base">
                To be recognized as the premier engineering technical consultancy in Maharashtra, setting benchmarks in structural durability, innovative BIM integration, and faultless on-site project execution.
              </p>
            </Card>
          </FadeUp>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, index) => {
            const IconComp = val.icon;
            return (
              <FadeUp key={index} delay={0.3 + index * 0.1}>
                <Card className="h-full bg-white text-center p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mx-auto mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-poppins text-dark mb-2">{val.title}</h4>
                  <p className="text-dark-muted text-sm leading-relaxed">{val.description}</p>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
