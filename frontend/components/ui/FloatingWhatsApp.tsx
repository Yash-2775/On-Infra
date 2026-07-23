"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={SITE_CONFIG.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
    </motion.a>
  );
}
