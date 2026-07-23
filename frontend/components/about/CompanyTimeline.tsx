"use client";

import React from "react";
import { TIMELINE_DATA } from "@/data/timelineData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";

export function CompanyTimeline() {
  return (
    <section className="py-20 sm:py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          badge="Company Journey"
          title="Our Evolution & Key Milestones"
          subtitle="A track record of growth, project scale, and engineering innovation since 2017."
        />

        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-100 hidden md:block" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <FadeUp key={item.year} delay={index * 0.1}>
                  <div
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full md:w-1/2">
                      <div className="bg-lightGray p-6 sm:p-8 rounded-[20px] border border-gray-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white bg-primary rounded-full">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold font-poppins text-dark mb-2">
                          {item.title}
                        </h3>
                        <p className="text-dark-muted text-sm leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10 hidden md:block shadow-md" />

                    {/* Empty opposite side spacer */}
                    <div className="w-full md:w-1/2 hidden md:block" />
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
