"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <div className="relative py-28 sm:py-36 bg-dark text-white overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-primary-dark/80 to-dark" />

      <Container className="relative z-10 text-center max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-white/10 rounded-full border border-white/20"
        >
          About ONINFRA Technical Solution
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins tracking-tight text-white leading-tight"
        >
          Pioneering Structural & Infrastructure Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          Established in 2017, we provide turnkey engineering, civil design, electrical planning, and site supervision services across Maharashtra.
        </motion.p>
      </Container>
    </div>
  );
}
