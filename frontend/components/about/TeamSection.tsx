"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, Linkedin } from "lucide-react";
import { TEAM_DATA } from "@/data/teamData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeUp } from "@/components/animations/FadeUp";

export function TeamSection() {
  return (
    <section className="py-20 sm:py-24 bg-lightGray">
      <Container>
        <SectionHeading
          badge="Leadership & Expertise"
          title="Meet Our Core Team"
          subtitle="Experienced professionals guiding strategic execution, site supervision, and technical design."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_DATA.map((member, index) => (
            <FadeUp key={member.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col items-center text-center p-6 group hover:border-blue-200 transition-all duration-300">
                {/* Round Profile Image */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Member Details */}
                <h3 className="text-xl font-bold font-poppins text-dark group-hover:text-primary transition-colors mb-1">
                  {member.name}
                </h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary px-3 py-1 bg-blue-50 rounded-full mb-4">
                  {member.designation}
                </span>
                <p className="text-dark-muted text-xs leading-relaxed mb-6 font-normal">
                  {member.description}
                </p>

                {/* Social & Contact Icons */}
                <div className="mt-auto flex items-center justify-center gap-3 pt-4 border-t border-gray-100 w-full">
                  {member.socials?.phone && (
                    <a
                      href={`tel:${member.socials.phone}`}
                      aria-label={`Call ${member.name}`}
                      className="w-8 h-8 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials?.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      aria-label={`Email ${member.name}`}
                      className="w-8 h-8 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href="#"
                    aria-label={`LinkedIn ${member.name}`}
                    className="w-8 h-8 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
