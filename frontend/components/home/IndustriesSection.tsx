"use client";

import React from "react";
import Image from "next/image";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";

export function IndustriesSection() {
  return (
    <section className="py-20 sm:py-24 bg-lightGray">
      <Container>
        <SectionHeading
          badge="Sectors We Serve"
          title="Engineering Solutions Across Key Industries"
          subtitle="We deliver specialized technical solutions tailored to unique domain requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((industry, index) => (
            <FadeUp key={industry.id} delay={index * 0.08}>
              <div className="group relative rounded-[20px] overflow-hidden h-80 shadow-soft cursor-pointer">
                {/* Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold font-poppins mb-2 group-hover:text-accent transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed font-normal opacity-95 group-hover:opacity-100 transition-opacity">
                    {industry.description}
                  </p>
                  <div className="mt-4 h-1 w-12 bg-primary group-hover:w-20 transition-all duration-300 rounded-full" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
