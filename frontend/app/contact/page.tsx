import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
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
    <div className="pt-28 pb-24 bg-lightGray min-h-screen">
      <Container>
        {/* Section Heading Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-widest uppercase text-accent bg-blue-50 rounded-full border border-blue-100">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-dark leading-tight">
            Feel Free To Contact Us
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Main Split Layout */}
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
    </div>
  );
}
