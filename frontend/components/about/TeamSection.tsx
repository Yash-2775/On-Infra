"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, Award, ShieldCheck } from "lucide-react";
import { TEAM_DATA } from "@/data/teamData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeUp } from "@/components/animations/FadeUp";

export function TeamSection() {
  const leader = TEAM_DATA.find((m) => m.id === "sanket-hadap") || TEAM_DATA[0];
  const otherMembers = TEAM_DATA.filter((m) => m.id !== "sanket-hadap");

  return (
    <section className="py-20 sm:py-24 bg-lightGray">
      <Container>
        <SectionHeading
          badge="Leadership & Expertise"
          title="Meet Our Core Team"
          subtitle="Experienced professionals guiding strategic execution, site supervision, and technical design."
        />

        {/* 1. Featured Leader Card: Sanket Hadap (Overall Head / GM) */}
        {leader && (
          <FadeUp className="mb-14">
            <Card className="p-8 sm:p-10 bg-white border border-gray-200/90 shadow-soft-lg hover:shadow-xl transition-all duration-300 rounded-[24px]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Large Profile Image */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-4 border-blue-50 shadow-md">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right Side: Description & Details */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-blue-50 rounded-full w-max border border-blue-100">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>{leader.designation}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-dark mb-4">
                    {leader.name}
                  </h2>

                  <p className="text-dark-muted text-base sm:text-lg leading-relaxed mb-6 font-normal">
                    {leader.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                    {leader.socials?.phone && (
                      <a
                        href={`tel:${leader.socials.phone}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call {leader.socials.phone}</span>
                      </a>
                    )}
                    {leader.socials?.email && (
                      <a
                        href={`mailto:${leader.socials.email}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 text-primary text-sm font-semibold hover:bg-blue-100 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email Leader</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </FadeUp>
        )}

        {/* 2. Secondary Core Team Grid (Satyam, Tushar, Suyog, Ketan) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherMembers.map((member, index) => (
            <FadeUp key={member.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col items-center text-center p-6 bg-white border border-gray-200/80 hover:border-primary/40 shadow-soft hover:shadow-md transition-all duration-300 rounded-[20px] group">
                {/* Profile Image */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-blue-50 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <h3 className="text-lg font-bold font-poppins text-dark group-hover:text-primary transition-colors mb-1">
                  {member.name}
                </h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary px-3 py-1 bg-blue-50 rounded-full mb-3">
                  {member.designation}
                </span>
                <p className="text-dark-muted text-xs leading-relaxed mb-6 font-normal">
                  {member.description}
                </p>

                {/* Action Icons */}
                <div className="mt-auto flex items-center justify-center gap-3 pt-3 border-t border-gray-100 w-full">
                  {member.socials?.phone && (
                    <a
                      href={`tel:${member.socials.phone}`}
                      aria-label={`Call ${member.name}`}
                      className="w-8 h-8 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials?.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      aria-label={`Email ${member.name}`}
                      className="w-8 h-8 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
