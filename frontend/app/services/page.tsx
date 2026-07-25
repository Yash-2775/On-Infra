import React from "react";
import type { Metadata } from "next";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";

export const metadata: Metadata = {
  title: "Services & Sub-Categories",
  description:
    "Explore ONINFRA's full product sub-categories: CCTV Cameras (Dome, Bullet, PTZ, Box), Biometric Terminals, EPABX, Video Door Phones, Video Conferencing, and Boom Barriers.",
};

export default function ServicesPage() {
  return <ServicesCatalog />;
}
