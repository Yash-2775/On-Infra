"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScaleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function Scale({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: ScaleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
