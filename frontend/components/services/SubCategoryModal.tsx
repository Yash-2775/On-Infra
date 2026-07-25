"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Layers } from "lucide-react";
import { ServiceItem } from "@/types";
import { Button } from "@/components/ui/Button";

interface SubCategoryModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function SubCategoryModal({ service, onClose }: SubCategoryModalProps) {
  if (!service) return null;

  const hasSubCategories = service.subCategories && service.subCategories.length > 0;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark/70 backdrop-blur-md transition-opacity cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Header Bar */}
          <div className="sticky top-0 z-20 px-6 sm:px-8 py-5 bg-white/95 backdrop-blur-md border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 text-primary rounded-xl">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-poppins text-dark leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-dark-muted font-medium">
                  {hasSubCategories
                    ? `${service.subCategories?.length} Available Sub-Categories`
                    : "Service Overview & Specifications"}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-dark transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
            {hasSubCategories ? (
              <div>
                <div className="mb-6">
                  <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent bg-blue-50 rounded-full border border-blue-100 mb-2">
                    PRODUCT RANGE & SUB-CATEGORIES
                  </span>
                  <p className="text-dark-muted text-sm leading-relaxed">
                    Select a sub-category model below to view product image specifications or enquire directly.
                  </p>
                </div>

                {/* Sub-Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.subCategories?.map((subCat) => (
                    <div
                      key={subCat.id}
                      className="flex flex-col justify-between bg-lightGray/60 rounded-2xl border border-gray-200/80 p-5 hover:border-primary/40 hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                      {/* Image Preview */}
                      <div className="relative h-44 w-full rounded-xl overflow-hidden bg-white mb-4 border border-gray-100 flex items-center justify-center p-2">
                        <Image
                          src={subCat.image}
                          alt={subCat.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Title & Description */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="text-base font-bold font-poppins text-dark group-hover:text-primary transition-colors mb-2 leading-snug">
                            {subCat.name}
                          </h4>
                          {subCat.description && (
                            <p className="text-dark-muted text-xs leading-relaxed mb-4">
                              {subCat.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-gray-200/60 w-full">
                          <Button
                            href={`/contact?service=${encodeURIComponent(
                              service.slug
                            )}&model=${encodeURIComponent(subCat.name)}`}
                            variant="primary"
                            size="sm"
                            iconName="ArrowRight"
                            className="w-full text-xs"
                          >
                            Enquire About Model
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Fallback Overview for Services without sub-categories */
              <div className="space-y-6">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-dark/30" />
                </div>

                <div>
                  <h4 className="text-lg font-bold font-poppins text-dark mb-2">
                    Service Details
                  </h4>
                  <p className="text-dark-muted text-sm leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <h4 className="text-sm font-bold font-poppins text-dark mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-dark">
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={`/contact?service=${encodeURIComponent(service.slug)}`}
                    variant="primary"
                    size="md"
                    iconName="ArrowRight"
                  >
                    Request Free Consultation
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
