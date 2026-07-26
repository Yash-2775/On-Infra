"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const SURVEILLANCE_ITEMS = [
  {
    id: "apartment-solution",
    title: "Apartment Solution",
    image: "/images/surveillance_item/Apartment Solution.png",
  },
  {
    id: "home-automation",
    title: "Home Automation",
    image: "/images/surveillance_item/Home Automation.png",
  },
  {
    id: "hd-cctv-camera",
    title: "HD CCTV Camera",
    image: "/images/surveillance_item/HD CCTV Camera.png",
  },
  {
    id: "hd-dvr",
    title: "HD DVR",
    image: "/images/surveillance_item/HD DVR & NVR.png",
  },
  {
    id: "speed-dome",
    title: "Speed Dome",
    image: "/images/surveillance_item/Speed Dome PTZ.png",
  },
  {
    id: "time-attendance",
    title: "Time & Attendance",
    image: "/images/surveillance_item/Time & Attendance.png",
  },
  {
    id: "speed-door",
    title: "Speed Door",
    image: "/images/surveillance_item/Speed Barrier Gate.png",
  },
  {
    id: "intrusion-alarm",
    title: "Intrusion Alarm",
    image: "/images/surveillance_item/Intrusion Alarm.png",
    customClass: "translate-y-3 scale-[2.2]", // Shifted down so top is not cut off while staying large!
  },
  {
    id: "smart-security",
    title: "Smart Security",
    image: "/images/surveillance_item/Smart Security.png",
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
            <div className="flex -ml-4 items-center">
              {SURVEILLANCE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex-none pl-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                >
                  <div className="flex flex-col items-center justify-between text-center p-4 bg-white hover:bg-gray-50/80 rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer h-[240px] sm:h-[270px]">
                    {/* Large High-Visibility Product Image Area */}
                    <div className="relative w-full h-36 sm:h-44 overflow-hidden flex items-center justify-center rounded-2xl bg-gray-50/30">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="300px"
                        className={`object-contain transform scale-[2.5] sm:scale-[2.9] transition-transform duration-300 group-hover:scale-[3.1] ${
                          item.customClass || ""
                        }`}
                      />
                    </div>
                    {/* Clear Label below image */}
                    <h3 className="text-sm sm:text-base font-bold font-poppins text-dark group-hover:text-primary transition-colors leading-snug mt-2 text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
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
