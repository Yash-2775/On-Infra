"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight, ArrowLeft, PhoneCall, Send, ShieldCheck, RefreshCw } from "lucide-react";

const buttonIconMap: Record<string, LucideIcon> = {
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  Send,
  ShieldCheck,
  RefreshCw,
};

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  iconName?: string;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon: IconProp,
  iconName,
  iconPosition = "right",
  isLoading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Icon = IconProp || (iconName ? buttonIconMap[iconName] : undefined);

  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-95 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-blue-900/20 hover:from-primary-dark hover:to-primary hover:shadow-xl hover:shadow-blue-900/30 border border-transparent",
    secondary:
      "bg-secondary text-white hover:bg-primary-dark shadow-md border border-transparent",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm",
    ghost:
      "bg-transparent text-dark hover:bg-lightGray hover:text-primary border border-transparent",
    white:
      "bg-white text-primary hover:bg-blue-50 shadow-lg hover:shadow-xl border border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const content = (
    <>
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : (
        Icon && iconPosition === "left" && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], "group", className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}
