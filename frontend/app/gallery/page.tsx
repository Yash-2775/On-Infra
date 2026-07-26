import React from "react";
import type { Metadata } from "next";
import { GalleryCatalog } from "@/components/gallery/GalleryCatalog";

export const metadata: Metadata = {
  title: "Work Gallery & Clients",
  description:
    "Explore ONINFRA's clients and completed civil engineering, CCTV surveillance, 3D modelling, and infrastructure projects across Maharashtra.",
};

export default function GalleryPage() {
  return <GalleryCatalog />;
}
