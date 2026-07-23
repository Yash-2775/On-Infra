"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowUp, Linkedin, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { SERVICES_DATA } from "@/data/servicesData";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Column 1: Company Profile */}
          <div>
            <div className="mb-6">
              <div className="relative h-12 w-44 rounded-xl overflow-hidden shadow-md bg-white p-1">
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="ONINFRA TECHNICAL SOLUTION Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
              {SITE_CONFIG.description}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#25D366] text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-300"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.links.call}
                aria-label="Phone Call"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.links.email}
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-secondary text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-poppins text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {SITE_CONFIG.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-accent text-xs">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Engineering Services */}
          <div>
            <h3 className="text-lg font-bold font-poppins text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Engineering Services
            </h3>
            <ul className="space-y-3">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-accent text-xs">›</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-poppins text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Contact Details
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={SITE_CONFIG.links.call} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={SITE_CONFIG.links.email} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>{SITE_CONFIG.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ONINFRA TECHNICAL SOLUTION. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
