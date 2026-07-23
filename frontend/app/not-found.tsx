"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, HardHat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 bg-lightGray">
      <Container size="small" className="text-center">
        <div className="w-20 h-20 rounded-2xl bg-blue-100 text-primary flex items-center justify-center mx-auto mb-6 shadow-md">
          <HardHat className="w-10 h-10" />
        </div>
        <h1 className="text-6xl font-extrabold font-poppins text-primary mb-2">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-dark-muted mb-8 max-w-md mx-auto">
          The requested page does not exist or may have been moved. Let us help you get back on track.
        </p>
        <Button href="/" variant="primary" size="lg" icon={ArrowLeft} iconPosition="left">
          Back To Home
        </Button>
      </Container>
    </div>
  );
}
