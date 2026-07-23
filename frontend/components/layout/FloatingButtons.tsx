"use client";

import React from "react";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { FloatingCall } from "@/components/ui/FloatingCall";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <FloatingWhatsApp />
      <FloatingCall />
      <ScrollToTop />
    </div>
  );
}
