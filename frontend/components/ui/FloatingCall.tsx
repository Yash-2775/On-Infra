"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export function FloatingCall() {
  return (
    <motion.a
      href={SITE_CONFIG.links.call}
      aria-label="Call ONINFRA Solution"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <PhoneCall className="w-5 h-5" />
    </motion.a>
  );
}
