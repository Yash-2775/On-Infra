"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, Building2, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeLeft } from "@/components/animations/FadeLeft";
import { FadeRight } from "@/components/animations/FadeRight";

export function AboutPreview() {
  const highlights = [
    "Civil & Structural Engineering",
    "Electrical Power Distribution",
    "Infrastructure & Regional Planning",
    "Industrial Project Consultancy",
    "Precise 3D BIM & CAD Drawings",
    "Turnkey Site Supervision & Execution",
  ];

  return (
    <section className="py-20 sm:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <FadeRight className="relative">
            <div className="relative rounded-[20px] overflow-hidden shadow-soft-lg border border-gray-100">
              <div className="relative h-[400px] sm:h-[480px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
                  alt="ONINFRA Engineering Site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-[20px] shadow-xl border border-white/20 flex items-center gap-4 max-w-[260px]">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div>
                <span className="block text-2xl font-bold font-poppins">Since 2017</span>
                <span className="text-xs text-blue-100 font-medium">Over 8+ Years of Engineering Excellence</span>
              </div>
            </div>
          </FadeRight>

          {/* Right Column: Text & Features */}
          <FadeLeft>
            <SectionHeading
              badge="About Our Firm"
              title="Innovative Civil, Electrical & Infrastructure Solutions"
              subtitle="Founded in 2017, ONINFRA TECHNICAL SOLUTION delivers end-to-end engineering excellence across commercial, industrial, and infrastructure sectors in Maharashtra."
              centered={false}
              className="mb-8"
            />

            <p className="text-dark-muted leading-relaxed text-base mb-8">
              We bring together qualified structural engineers, site managers, and CAD specialists to deliver precise engineering blueprints, 3D BIM modeling, and physical site execution with unyielding quality control.
            </p>

            {/* Highlighted Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-dark">{item}</span>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary" size="lg" icon={ArrowRight}>
              Read More About Us
            </Button>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
