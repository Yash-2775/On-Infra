"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const BRANDS = [
  { id: "trueview", name: "Trueview", tag: "True Security Systems" },
  { id: "honeywell", name: "Honeywell", tag: "Automation & Security" },
  { id: "zebronics", name: "Zebronics", tag: "Electronics" },
  { id: "dahua", name: "Dahua", tag: "Technology" },
  { id: "hikvision", name: "Hikvision", tag: "Digital Surveillance" },
  { id: "cpplus", name: "CP-PLUS", tag: "Security Solutions" },
  { id: "essl", name: "eSSL", tag: "Security Beyond" },
  { id: "matrix", name: "Matrix", tag: "Telecom & Security" },
  { id: "wd", name: "Western Digital", tag: "Storage" },
  { id: "seagate", name: "Seagate", tag: "Storage" },
];

export function BrandsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
      <Container>
        {/* Title Matching Reference Image */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-[#B8860B]">
            Brands and Alliances
          </h2>
        </div>

        {/* Slider Wrapper with Navigation Arrows */}
        <div className="relative px-8 sm:px-12">
          {/* Left Arrow Button */}
          <button
            onClick={scrollPrev}
            aria-label="Previous Brands"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-dark hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {BRANDS.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-none pl-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                >
                  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-200/70 shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-300 h-28 group cursor-pointer">
                    <span className="text-lg sm:text-xl font-extrabold font-poppins tracking-wider text-dark group-hover:text-primary transition-colors uppercase text-center">
                      {brand.name}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mt-1">
                      {brand.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollNext}
            aria-label="Next Brands"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-dark hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      </Container>
    </section>
  );
}
