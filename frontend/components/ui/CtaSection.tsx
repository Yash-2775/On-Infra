"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { SITE_CONFIG } from "@/constants/siteConfig";

export function CtaSection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-primary-dark/40 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-white/10 rounded-full border border-white/20">
              Transform Your Project Vision
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins leading-tight">
              Need Engineering & Civil Solutions?
            </h2>
            <p className="mt-4 text-lg text-blue-100 font-normal">
              Connect with our senior engineering team today for professional consultations, structural blueprints, and turnkey site supervision.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 shrink-0">
            <Button href="/contact" variant="white" size="lg" icon={ArrowRight}>
              Get In Touch Today
            </Button>
            <Button
              href={SITE_CONFIG.links.call}
              variant="outline"
              size="lg"
              icon={PhoneCall}
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Call {SITE_CONFIG.contact.phone}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
