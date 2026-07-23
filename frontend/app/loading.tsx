import React from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-sm font-medium text-dark-muted font-poppins animate-pulse">
        Loading ONINFRA Solutions...
      </p>
    </div>
  );
}
