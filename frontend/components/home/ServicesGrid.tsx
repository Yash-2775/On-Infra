"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HardHat,
  Zap,
  Box,
  Compass,
  Layers,
  Factory,
  ClipboardCheck,
  MapPin,
  FileText,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeUp } from "@/components/animations/FadeUp";

// Icon resolver map for dynamic rendering
const iconMap: Record<string, React.ElementType> = {
  HardHat,
  Zap,
  Box,
  Compass,
  Layers,
  Factory,
  ClipboardCheck,
  MapPin,
  FileText,
  TrendingUp,
};

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-24 bg-lightGray relative">
      <Container>
        <SectionHeading
          badge="Our Core Services"
          title="Comprehensive Engineering Capabilities"
          subtitle="From structural design and 3D BIM modelling to site supervision and industrial consultancy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || HardHat;

            return (
              <FadeUp key={service.id} delay={index * 0.05}>
                <Card className="h-full flex flex-col justify-between group overflow-hidden p-0">
                  {/* Card Header Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                    
                    {/* Icon Badge Overlay */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:bg-secondary transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-dark group-hover:text-primary transition-colors duration-200 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-dark-muted text-sm leading-relaxed mb-6 font-normal">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Card Footer Link */}
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors mt-auto pt-4 border-t border-gray-100"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
