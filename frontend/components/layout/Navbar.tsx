"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function Navbar() {
  const { scrolled } = useScrollPosition(40);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100 py-3"
          : "bg-gradient-to-b from-dark/70 via-dark/40 to-transparent text-white py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Company Branding Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-11 sm:h-12 w-36 sm:w-44 rounded-xl overflow-hidden shadow-sm transition-transform group-hover:scale-105 bg-white/95 p-1 border border-white/20">
              <Image
                src="/images/logo/logo.jpeg"
                alt="ONINFRA TECHNICAL SOLUTION"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {SITE_CONFIG.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    scrolled
                      ? isActive
                        ? "text-primary font-semibold"
                        : "text-dark-muted hover:text-primary"
                      : isActive
                      ? "text-accent font-semibold"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Callouts */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" variant={scrolled ? "primary" : "white"} size="sm" icon={ArrowRight}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className={`md:hidden p-2 rounded-xl transition-colors cursor-pointer ${
              scrolled
                ? "text-dark hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
          >
            <Container className="py-6 flex flex-col gap-4">
              {SITE_CONFIG.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-2 px-4 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-primary"
                        : "text-dark-muted hover:bg-gray-50 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-gray-100">
                <Button href="/contact" variant="primary" size="md" icon={ArrowRight} className="w-full">
                  Contact Us
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
