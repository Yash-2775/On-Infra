"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function ServicesHero() {
  return (
    <div className="relative py-28 sm:py-36 bg-dark text-white overflow-hidden">
      {/* Background Image Reference */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-primary-dark/85 to-dark" />

      <Container className="relative z-10 text-center max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-white/10 rounded-full border border-white/20"
        >
          Comprehensive Engineering Portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins tracking-tight text-white leading-tight"
        >
          Engineering, Civil & Infrastructure Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          Explore our complete lineup of civil engineering, electrical design, 3D modelling, structural blueprints, site supervision, and turnkey project execution.
        </motion.p>
      </Container>
    </div>
  );
}
