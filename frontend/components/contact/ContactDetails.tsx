"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { Card } from "@/components/ui/Card";
import { GoogleMap } from "@/components/ui/GoogleMap";

export function ContactDetails() {
  return (
    <div className="space-y-8">
      {/* Company Office Details Card */}
      <Card className="p-8 border border-gray-200/80 shadow-soft">
        <h3 className="text-2xl font-bold font-poppins text-dark mb-1">
          {SITE_CONFIG.name}
        </h3>
        <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-6">
          Head Office & Engineering Operations
        </p>

        <div className="space-y-5 text-sm">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-dark font-poppins text-xs uppercase tracking-wider text-dark-muted">
                Registered Address
              </h4>
              <p className="text-dark font-medium leading-relaxed mt-0.5">
                {SITE_CONFIG.contact.address.full}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-dark font-poppins text-xs uppercase tracking-wider text-dark-muted">
                Direct Phone
              </h4>
              <a
                href={SITE_CONFIG.links.call}
                className="text-primary font-bold text-base hover:underline transition-all block mt-0.5"
              >
                {SITE_CONFIG.contact.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-dark font-poppins text-xs uppercase tracking-wider text-dark-muted">
                Email Address
              </h4>
              <a
                href={SITE_CONFIG.links.email}
                className="text-primary font-semibold hover:underline transition-all block mt-0.5"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-dark font-poppins text-xs uppercase tracking-wider text-dark-muted">
                Working Hours
              </h4>
              <p className="text-dark font-medium mt-0.5">
                {SITE_CONFIG.contact.workingHours}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* 3 Large Instant Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Call Button */}
        <a
          href={SITE_CONFIG.links.call}
          className="flex flex-col items-center justify-center p-5 rounded-[20px] bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg group text-center"
        >
          <PhoneCall className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold font-poppins text-sm">Call Now</span>
          <span className="text-[10px] text-blue-200 mt-0.5">+91 89561 64141</span>
        </a>

        {/* Email Button */}
        <a
          href={SITE_CONFIG.links.email}
          className="flex flex-col items-center justify-center p-5 rounded-[20px] bg-secondary text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg group text-center"
        >
          <Mail className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold font-poppins text-sm">Send Email</span>
          <span className="text-[10px] text-blue-100 mt-0.5">oninfrasolution@...</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={SITE_CONFIG.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-5 rounded-[20px] bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all duration-300 shadow-md hover:shadow-lg group text-center"
        >
          <MessageSquare className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-bold font-poppins text-sm">WhatsApp</span>
          <span className="text-[10px] text-emerald-100 mt-0.5">Instant Chat</span>
        </a>
      </div>

      {/* Embedded Google Map */}
      <GoogleMap height="h-[320px]" />
    </div>
  );
}
