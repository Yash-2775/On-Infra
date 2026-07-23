"use client";

import React from "react";
import { CLIENTS_DATA } from "@/data/clientsData";

export function ClientLogoSlider() {
  // Duplicate logos array to facilitate seamless looping
  const logos = [...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <div className="w-full overflow-hidden bg-lightGray py-10 border-y border-gray-200/60">
      <div className="animate-marquee gap-8 sm:gap-12 items-center">
        {logos.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex items-center justify-center px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[160px] h-[64px] transition-transform duration-300 hover:scale-105 shrink-0"
          >
            <span className="font-poppins font-bold text-sm tracking-wider text-primary/80 uppercase">
              {client.logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
