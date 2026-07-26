"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const BRAND_LOGOS = [
  { id: "dahua", name: "Dahua", image: "/images/brandslider/adhua.jpeg" },
  { id: "cpplus", name: "CP-PLUS", image: "/images/brandslider/cpplus.png" },
  { id: "essl", name: "eSSL", image: "/images/brandslider/essl.jpeg" },
  { id: "hikvision", name: "Hikvision", image: "/images/brandslider/hikvision.jpeg" },
  { id: "honeywell", name: "Honeywell", image: "/images/brandslider/honeywell.jpeg" },
  { id: "matrix", name: "Matrix", image: "/images/brandslider/matrix.jpeg" },
  { id: "zebronics", name: "Zebronics", image: "/images/brandslider/zebronics.png" },
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
            <div className="flex -ml-4 items-center">
              {BRAND_LOGOS.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-none pl-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                >
                  <div className="flex items-center justify-center p-4 bg-white rounded-2xl border border-gray-200/60 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 h-28 group cursor-pointer">
                    <div className="relative w-full h-20 flex items-center justify-center">
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        sizes="200px"
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
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
