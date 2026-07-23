"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import { HERO_SLIDES_DATA } from "@/data/heroSlidesData";
import { Button } from "./Button";
import { Container } from "./Container";

export function HeroCarousel() {
  const [autoplay] = useState(() => Autoplay({ delay: 6000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[85vh] min-h-[580px] max-h-[850px] overflow-hidden bg-dark">
      {/* Engineering Technical Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#6CB6FF_1px,transparent_1px)] [background-size:24px_24px] opacity-15 z-10 pointer-events-none" />

      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_SLIDES_DATA.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-none w-full h-full flex items-center"
            >
              {/* Background Image using Next.js Image Component for Instant Speed */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.bgImage}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                  className="object-cover object-center transform scale-105 transition-transform duration-10000 ease-linear"
                />
              </div>

              {/* Tonal Blue Engineering Gradient Overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-dark/90 via-primary/75 to-dark/65" />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />

              {/* Dynamic Content Container */}
              <div className="relative z-20 h-full w-full flex items-center pt-20 pb-12 sm:py-0">
                <Container>
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-3xl text-left"
                      >
                        {/* Pill Badge */}
                        <motion.span
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-wider text-accent uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm"
                        >
                          <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                          <span>ONINFRA TECHNICAL SOLUTION</span>
                        </motion.span>

                        {/* Title */}
                        <motion.h1
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25, duration: 0.5 }}
                          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-[1.15] sm:leading-tight drop-shadow-md"
                        >
                          {slide.title}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35, duration: 0.5 }}
                          className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl"
                        >
                          {slide.subtitle}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.45, duration: 0.5 }}
                          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                        >
                          <Button
                            href={slide.ctaHref}
                            variant="primary"
                            size="lg"
                            icon={ArrowRight}
                            className="w-full sm:w-auto"
                          >
                            {slide.ctaText}
                          </Button>
                          <Button
                            href={slide.secondaryCtaHref}
                            variant="white"
                            size="lg"
                            className="w-full sm:w-auto"
                          >
                            {slide.secondaryCtaText}
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Container>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Navigation Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous Slide"
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md transition-all duration-300 border border-white/20 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next Slide"
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md transition-all duration-300 border border-white/20 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {HERO_SLIDES_DATA.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              selectedIndex === i ? "w-8 bg-accent" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
