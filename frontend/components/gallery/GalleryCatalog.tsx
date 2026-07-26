"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CLIENTS_LIST, GALLERY_PROJECTS } from "@/data/galleryData";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Building2, Filter, X } from "lucide-react";

export function GalleryCatalog() {
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  // Filter projects if a client is selected
  const filteredProjects = selectedClientId
    ? GALLERY_PROJECTS.filter((proj) => proj.clientId === selectedClientId)
    : GALLERY_PROJECTS;

  const selectedClient = CLIENTS_LIST.find((c) => c.id === selectedClientId);

  return (
    <div className="pt-28 pb-24 bg-white">
      {/* 1. OUR CLIENTS SECTION */}
      <section className="pb-16">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-widest uppercase text-accent bg-blue-50 rounded-full border border-blue-100">
              TRUSTED PARTNERS
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-poppins text-dark">
              Our Clients
            </h1>
            <p className="mt-2 text-dark-muted text-sm sm:text-base max-w-xl mx-auto">
              Click on any client below to filter and view executed project work images & details.
            </p>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Client Logo Grid with Interactive Click Filter */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {CLIENTS_LIST.map((client, index) => {
              const isSelected = selectedClientId === client.id;
              return (
                <FadeUp key={client.id} delay={index * 0.03}>
                  <div
                    onClick={() => {
                      if (isSelected) {
                        setSelectedClientId(null);
                      } else {
                        setSelectedClientId(client.id);
                        // Smooth scroll to gallery section
                        const el = document.getElementById("work-gallery-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`flex flex-col items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer h-[160px] text-center group ${
                      isSelected
                        ? "bg-blue-50/70 border-primary ring-4 ring-primary/20 shadow-lg scale-105"
                        : "bg-white border-gray-200/90 hover:border-primary/50 hover:scale-105 shadow-xs hover:shadow-md"
                    }`}
                  >
                    {/* Top Logo Container */}
                    <div className="flex-grow flex items-center justify-center w-full py-2 relative">
                      {client.logoImage ? (
                        <div className="relative w-full h-16 flex items-center justify-center">
                          <Image
                            src={client.logoImage}
                            alt={client.name}
                            fill
                            sizes="200px"
                            className="object-contain p-1 group-hover:scale-105 transition-transform"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Building2 className="w-6 h-6 text-primary" />
                          <span className="font-poppins font-extrabold text-xs sm:text-sm tracking-wider text-dark uppercase">
                            {client.shortName}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Company Name Label below logo */}
                    <span
                      className={`text-xs sm:text-sm font-bold font-poppins line-clamp-1 mt-auto pt-2 border-t w-full ${
                        isSelected
                          ? "text-primary border-primary/30"
                          : "text-dark group-hover:text-primary border-gray-100 transition-colors"
                      }`}
                    >
                      {client.name}
                    </span>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 2. WORK GALLERY SECTION (Executed Projects) */}
      <section id="work-gallery-section" className="py-20 bg-lightGray border-t border-gray-200/80 scroll-mt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-widest uppercase text-accent bg-blue-50 rounded-full border border-blue-100">
              OUR EXECUTED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-dark">
              Our Work Gallery
            </h2>
            <p className="mt-3 text-base text-dark-muted font-normal leading-relaxed">
              {selectedClient
                ? `Displaying executed project work for ${selectedClient.name}`
                : "Explore our completed civil engineering, CCTV surveillance installations, 3D BIM modelling, and turnkey execution projects."}
            </p>

            {/* Active Client Filter Pill */}
            {selectedClientId && (
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-xs sm:text-sm font-semibold shadow-sm">
                  <Filter className="w-4 h-4" />
                  <span>Client: {selectedClient?.name}</span>
                  <button
                    onClick={() => setSelectedClientId(null)}
                    className="ml-1 p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                    aria-label="Clear client filter"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
                <button
                  onClick={() => setSelectedClientId(null)}
                  className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                >
                  Show All Projects
                </button>
              </div>
            )}

            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Project Work Done Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <FadeUp key={project.id} delay={index * 0.08}>
                  <Card className="h-full flex flex-col justify-between p-0 overflow-hidden border border-gray-200/90 hover:border-primary/40 shadow-soft hover:shadow-soft-lg group transition-all duration-300 rounded-[20px] bg-white">
                    {/* Work Done Image */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-dark/85 backdrop-blur-md rounded-full shadow-xs">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                          {project.companyName}
                        </div>
                        <h3 className="text-xl font-bold font-poppins text-dark group-hover:text-primary transition-colors mb-3">
                          {project.title}
                        </h3>
                        <p className="text-dark-muted text-sm leading-relaxed font-normal mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <Button
                          href={`/contact?client=${encodeURIComponent(
                            project.companyName
                          )}&project=${encodeURIComponent(project.title)}`}
                          variant="outline"
                          size="sm"
                          iconName="ArrowRight"
                          className="w-full"
                        >
                          Request Project Quote
                        </Button>
                      </div>
                    </div>
                  </Card>
                </FadeUp>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 max-w-xl mx-auto">
              <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold font-poppins text-dark mb-2">
                No Projects Listed Yet for {selectedClient?.name}
              </h3>
              <p className="text-sm text-dark-muted mb-6">
                We are actively updating work done images for this client. Please contact our team for full project documentation.
              </p>
              <Button onClick={() => setSelectedClientId(null)} variant="primary" size="sm">
                View All Executed Projects
              </Button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
