import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { FadeRight } from "@/components/animations/FadeRight";
import { FadeLeft } from "@/components/animations/FadeLeft";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ONINFRA TECHNICAL SOLUTION for civil engineering, 3D modelling, structural blueprints, and site supervision in Maharashtra.",
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero Banner */}
      <div className="relative py-28 sm:py-36 bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-primary-dark/85 to-dark" />

        <Container className="relative z-10 text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-white/10 rounded-full border border-white/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins tracking-tight text-white leading-tight">
            Contact Engineering Team
          </h1>
          <p className="mt-4 text-lg text-gray-300 font-normal leading-relaxed">
            Have a project in mind or need structural consultation? Fill out the form or reach us directly via call, email, or WhatsApp.
          </p>
        </Container>
      </div>

      {/* Main Split Layout */}
      <section className="py-20 sm:py-24 bg-lightGray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <FadeRight className="lg:col-span-7">
              <ContactForm />
            </FadeRight>

            {/* Right Column: Company Info & Action Buttons */}
            <FadeLeft className="lg:col-span-5">
              <ContactDetails />
            </FadeLeft>
          </div>
        </Container>
      </section>
    </>
  );
}
