"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_DATA } from "@/data/servicesData";
import { ServiceItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ClientLogoSlider } from "@/components/ui/ClientLogoSlider";
import { FadeUp } from "@/components/animations/FadeUp";
import { SubCategoryModal } from "@/components/services/SubCategoryModal";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";

export function ServicesCatalog() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* 1. Header Title Section */}
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-widest uppercase text-accent bg-blue-50 rounded-full border border-blue-100">
            OUR TECHNICAL SOLUTIONS & SUB-CATEGORIES
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins text-dark uppercase tracking-wide leading-tight">
            PREMIUM QUALITY TECHNICAL & SECURITY SOLUTIONS FOR ALL AROUND INFRASTRUCTURE
          </h1>
          <p className="mt-4 text-dark-muted text-sm sm:text-base max-w-2xl mx-auto">
            Click on any service card below to explore full product models, sub-categories, specifications, and instant quote requests.
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* 2. Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES_DATA.map((service, index) => {
            const subCount = service.subCategories?.length || 0;
            return (
              <FadeUp key={service.id} delay={index * 0.05}>
                <Card
                  onClick={() => setSelectedService(service)}
                  className="h-full flex flex-col justify-between p-0 overflow-hidden border border-gray-200/80 hover:border-primary/50 shadow-soft hover:shadow-soft-lg group transition-all duration-300 cursor-pointer bg-white"
                >
                  {/* Top Image Container with Badge */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-lightGray">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors" />

                    {/* Sub-Category Count Pill */}
                    {subCount > 0 && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200/80 text-[11px] font-bold text-primary shadow-xs flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-accent" />
                        <span>{subCount} Sub-Categories</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col items-center text-center">
                    <h2 className="text-lg sm:text-xl font-bold font-poppins text-dark group-hover:text-primary transition-colors duration-200 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-dark-muted text-sm leading-relaxed font-normal mb-6">
                      {service.shortDescription}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 w-full flex justify-center gap-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service);
                        }}
                        variant="primary"
                        size="sm"
                        iconName="ArrowRight"
                        className="w-full"
                      >
                        {subCount > 0 ? "Explore Sub-Categories" : "View Details"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>

      {/* 3. Brands & Alliances Section */}
      <section className="mt-24 py-12 bg-lightGray border-y border-gray-200/80">
        <Container>
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold font-poppins text-accent uppercase tracking-wider">
              Brands and Alliances
            </h3>
          </div>
          <ClientLogoSlider />
        </Container>
      </section>

      {/* 4. High-Impact Callout Banner */}
      <section className="relative py-20 bg-gradient-to-r from-dark via-primary to-dark text-white overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1920&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-dark/60" />

        <Container className="relative z-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white leading-tight mb-6">
            Best CCTV Camera & Technical Installation in Mumbai & Maharashtra
          </h2>
          <p className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed mb-8">
            CCTV repair, biometrics, intercoms, fire safety, and turnkey engineering solutions delivered by qualified specialists.
          </p>
          <Button href="/contact" variant="white" size="lg" iconName="ArrowRight">
            Find Out More
          </Button>
        </Container>
      </section>

      {/* Interactive Sub-Category Modal */}
      <SubCategoryModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
