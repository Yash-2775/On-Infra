"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  border?: boolean;
  className?: string;
}

export function Card({
  children,
  hoverEffect = true,
  border = true,
  className,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-white rounded-[20px] p-6 sm:p-8 transition-all duration-300 shadow-soft",
        border && "border border-gray-100/80",
        hoverEffect && "hover:shadow-soft-lg hover:border-blue-100",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
