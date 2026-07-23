"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeUp } from "@/components/animations/FadeUp";

export function AchievementsSection() {
  const achievements = [
    {
      title: "IS Code Compliance",
      desc: "All structural designs strictly adhere to Indian Standard (IS) codes for concrete, steel, and seismic stability.",
      icon: ShieldCheck,
    },
    {
      title: "100+ On-Time Projects",
      desc: "Proven track record of zero milestone delays across residential, commercial, and industrial executions.",
      icon: Award,
    },
    {
      title: "Zero-Defect Supervision",
      desc: "Rigorous daily physical inspections on-site eliminating rework and material wastage.",
      icon: CheckCircle,
    },
    {
      title: "Full Approval Blueprints",
      desc: "100% success rate in obtaining municipal and statutory authority clearances.",
      icon: FileCheck2,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Credentials"
          title="Engineering Standards & Achievements"
          subtitle="Built on continuous adherence to international safety codes and local regulatory compliance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => {
            const IconComp = item.icon;
            return (
              <FadeUp key={index} delay={index * 0.1}>
                <Card className="h-full border border-gray-100/90 text-center p-6 hover:border-blue-200">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mx-auto mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-poppins text-dark mb-2">{item.title}</h3>
                  <p className="text-dark-muted text-xs leading-relaxed font-normal">{item.desc}</p>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
