"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";

interface ServiceDetailCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceDetailCard({ service, index }: ServiceDetailCardProps) {
  const isEven = index % 2 === 0;

  return (
    <FadeUp delay={0.05}>
      <Card className="p-0 overflow-hidden border border-gray-200/80 hover:border-blue-200 shadow-soft mb-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
            isEven ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Image Container Column */}
          <div
            className={`relative min-h-[320px] sm:min-h-[380px] lg:col-span-5 ${
              isEven ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* REPLACE IMAGE PATH HERE: Pass custom image path from /public/images/ if desired */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Details Content Column */}
          <div
            className={`p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between ${
              isEven ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                Service #{index + 1}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-dark mb-4">
                {service.title}
              </h2>
              <p className="text-dark-muted leading-relaxed text-base mb-6 font-normal">
                {service.fullDescription}
              </p>

              {/* Features & Benefits Split Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-4 border-t border-gray-100">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-dark font-poppins text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feat, i) => (
                      <li key={i} className="text-xs sm:text-sm text-dark-muted flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="font-semibold text-dark font-poppins text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((ben, i) => (
                      <li key={i} className="text-xs sm:text-sm text-dark-muted flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Call To Action Button */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-dark-muted">
                Need tailored consultation for {service.title}?
              </span>
              <Button
                href={`/contact?service=${encodeURIComponent(service.slug)}`}
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </FadeUp>
  );
}
