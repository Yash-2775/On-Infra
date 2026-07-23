"use client";

import React from "react";
import { STATS_DATA } from "@/data/statsData";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Scale } from "@/components/animations/Scale";

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-secondary to-primary text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
          {STATS_DATA.map((stat, index) => (
            <Scale key={index} delay={index * 0.1} className="pt-6 md:pt-0 px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-accent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold font-poppins text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-blue-100 font-normal max-w-[200px] mx-auto">
                {stat.description}
              </p>
            </Scale>
          ))}
        </div>
      </Container>
    </section>
  );
}
