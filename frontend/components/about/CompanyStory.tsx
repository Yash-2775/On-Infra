"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Building } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeLeft } from "@/components/animations/FadeLeft";
import { FadeRight } from "@/components/animations/FadeRight";

export function CompanyStory() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeRight>
            <SectionHeading
              badge="Our Genesis"
              title="Built On Technical Rigor & Professional Integrity"
              subtitle="From local civil consultancy to comprehensive regional engineering leadership."
              centered={false}
              className="mb-6"
            />
            <div className="space-y-4 text-dark-muted leading-relaxed text-base">
              <p>
                Founded in 2017, ONINFRA TECHNICAL SOLUTION emerged from a core vision: providing reliable, code-compliant, and cost-effective engineering solutions to residential, industrial, and infrastructure project developers.
              </p>
              <p>
                Headquartered in Raigad, Maharashtra, our firm combines structural design precision, 3D BIM modelling, electrical distribution planning, and rigorous on-site supervision to guarantee structural resilience and execution quality.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-lightGray rounded-xl border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-dark text-sm font-poppins">100% Quality Checked</h4>
                  <p className="text-xs text-dark-muted">Strict compliance with IS codes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-lightGray rounded-xl border border-gray-100">
                <Building className="w-8 h-8 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-dark text-sm font-poppins">100+ Delivered Sites</h4>
                  <p className="text-xs text-dark-muted">Across Maharashtra state</p>
                </div>
              </div>
            </div>
          </FadeRight>

          <FadeLeft className="relative">
            <div className="relative rounded-[20px] overflow-hidden shadow-soft-lg border border-gray-100 h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
                alt="ONINFRA Engineering Blueprint Review"
                fill
                className="object-cover"
              />
            </div>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
