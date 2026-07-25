"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Camera, Shield, Cpu, HardDrive, Eye, Fingerprint, DoorOpen, Bell, Monitor } from "lucide-react";
import { Container } from "@/components/ui/Container";

const SURVEILLANCE_ITEMS = [
  {
    id: "apartment-solution",
    title: "Apartment Solution",
    icon: Monitor,
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: "home-automation",
    title: "Home Automation",
    icon: Cpu,
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    id: "hd-cctv-camera",
    title: "HD CCTV Camera",
    icon: Camera,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    id: "hd-dvr",
    title: "HD DVR & NVR",
    icon: HardDrive,
    color: "text-purple-600 bg-purple-50",
  },
  {
    id: "speed-dome",
    title: "Speed Dome PTZ",
    icon: Eye,
    color: "text-sky-600 bg-sky-50",
  },
  {
    id: "time-attendance",
    title: "Time & Attendance",
    icon: Fingerprint,
    color: "text-amber-600 bg-amber-50",
  },
  {
    id: "speed-door",
    title: "Speed Barrier Gate",
    icon: DoorOpen,
    color: "text-rose-600 bg-rose-50",
  },
  {
    id: "intrusion-alarm",
    title: "Intrusion Alarm",
    icon: Bell,
    color: "text-red-600 bg-red-50",
  },
  {
    id: "smart-security",
    title: "Smart Security",
    icon: Shield,
    color: "text-teal-600 bg-teal-50",
  },
];

export function SurveillanceSolutionsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        {/* Header Section Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-dark-muted mb-2">
            ONE STOP SOLUTION SURVEILLANCE SYSTEM
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-[#B8860B] leading-tight">
            Stay Safe With Our Smart Surveillance Solutions
          </h2>
        </div>

        {/* Carousel Wrapper with Left & Right Arrows */}
        <div className="relative px-8 sm:px-12">
          {/* Left Arrow Button */}
          <button
            onClick={scrollPrev}
            aria-label="Previous Solutions"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-dark hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {SURVEILLANCE_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex-none pl-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
                  >
                    <div className="flex flex-col items-center text-center p-4 bg-white hover:bg-gray-50/80 rounded-2xl border border-gray-100/80 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer h-full justify-center">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                      >
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-semibold font-poppins text-dark group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollNext}
            aria-label="Next Solutions"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-dark hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      </Container>
    </section>
  );
}
