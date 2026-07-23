"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("ONINFRA App Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-lightGray">
      <Container size="small" className="text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold font-poppins text-dark mb-4">
          Something went wrong
        </h2>
        <p className="text-dark-muted mb-8 max-w-md mx-auto">
          We encountered an unexpected issue while loading this page. Please try refreshing or contact our technical team.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => reset()} variant="primary" icon={RefreshCw}>
            Try Again
          </Button>
          <Button href="/" variant="outline">
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
