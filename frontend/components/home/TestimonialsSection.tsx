"use client";

import React from "react";
import { TESTIMONIALS_DATA } from "@/data/testimonialsData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FadeUp } from "@/components/animations/FadeUp";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Feedback from project directors, estate developers, and infrastructure partners."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <FadeUp key={testimonial.id} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
