"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card } from "./Card";
import { TestimonialItem } from "@/types";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between relative overflow-hidden group border border-gray-100">
      <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100 transition-colors group-hover:text-blue-200" />
      <div>
        {/* Star Rating */}
        <div className="flex gap-1 mb-4 text-amber-400">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 italic leading-relaxed mb-6 font-normal">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-dark font-poppins text-base">
            {testimonial.name}
          </h4>
          <p className="text-xs text-dark-muted">
            {testimonial.role}, <span className="text-primary font-medium">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
