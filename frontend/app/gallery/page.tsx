import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { CLIENTS_LIST, GALLERY_PROJECTS } from "@/data/galleryData";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Building2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work Gallery & Clients",
  description:
    "Explore ONINFRA's clients and completed civil engineering, CCTV surveillance, 3D modelling, and infrastructure projects across Maharashtra.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      {/* 1. OUR CLIENTS SECTION (Matches attached reference image) */}
      <section className="pb-20">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-poppins text-dark">
              Our Clients
            </h1>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Client Logo Grid matching screenshot styling */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
            {CLIENTS_LIST.map((client, index) => (
              <FadeUp key={client.id} delay={index * 0.05}>
                <div
                  className={`flex flex-col items-center justify-between p-5 bg-white rounded-xl border-2 transition-all duration-300 hover:scale-105 shadow-xs hover:shadow-md h-[150px] text-center ${
                    client.highlighted
                      ? "border-emerald-500 hover:border-emerald-600"
                      : "border-gray-800 hover:border-primary"
                  }`}
                >
                  {/* Top Logo Container */}
                  <div className="flex-grow flex items-center justify-center w-full py-2">
                    <div className="flex items-center justify-center gap-2">
                      <Building2
                        className={`w-6 h-6 ${
                          client.highlighted ? "text-emerald-600" : "text-primary"
                        }`}
                      />
                      <span className="font-poppins font-black text-sm tracking-wider text-dark uppercase">
                        {client.shortName}
                      </span>
                    </div>
                  </div>

                  {/* Company Name Label below logo */}
                  <span className="text-xs sm:text-sm font-semibold font-poppins text-dark line-clamp-2 mt-auto pt-2 border-t border-gray-100 w-full">
                    {client.name}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. WORK GALLERY SECTION (Completed Projects Showcase) */}
      <section className="py-20 bg-lightGray border-t border-gray-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-widest uppercase text-accent bg-blue-50 rounded-full border border-blue-100">
              OUR EXECUTED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-dark">
              Our Work Gallery
            </h2>
            <p className="mt-3 text-base text-dark-muted font-normal leading-relaxed">
              Explore our completed civil engineering, CCTV surveillance installations, 3D BIM modelling, and infrastructure execution projects.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Project Work Done Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_PROJECTS.map((project, index) => (
              <FadeUp key={project.id} delay={index * 0.08}>
                <Card className="h-full flex flex-col justify-between p-0 overflow-hidden border border-gray-200/90 hover:border-primary/40 shadow-soft hover:shadow-soft-lg group transition-all duration-300 rounded-[20px] bg-white">
                  {/* Work Done Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.companyName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-dark/80 backdrop-blur-md rounded-full shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title (company_name) & Short Description */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-dark group-hover:text-primary transition-colors mb-3">
                        {project.companyName}
                      </h3>
                      <p className="text-dark-muted text-sm leading-relaxed font-normal mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <Button
                        href="/contact"
                        variant="outline"
                        size="sm"
                        iconName="ArrowRight"
                        className="w-full"
                      >
                        Request Project Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
