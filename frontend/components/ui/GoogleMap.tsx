"use client";

import React from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { cn } from "@/lib/utils";

interface GoogleMapProps {
  className?: string;
  height?: string;
}

export function GoogleMap({ className, height = "h-[450px]" }: GoogleMapProps) {
  return (
    <div
      className={cn(
        "w-full rounded-[20px] overflow-hidden shadow-soft border border-gray-200/80 relative bg-gray-100",
        height,
        className
      )}
    >
      <iframe
        src={SITE_CONFIG.contact.googleMapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ONINFRA Technical Solution Location Map"
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}
