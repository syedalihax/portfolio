"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { ProjectScreenshot } from "@/lib/portfolio-data";

interface ProjectGalleryProps {
  projectTitle: string;
  screenshots: ProjectScreenshot[];
}

export default function ProjectGallery({
  projectTitle,
  screenshots,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = screenshots[activeIndex] ?? screenshots[0];

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % screenshots.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex(
          (prev) => (prev - 1 + screenshots.length) % screenshots.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, screenshots.length]);

  return (
    <div className="flex flex-col gap-3">
      <div className="group relative overflow-hidden rounded-xl border border-[#E2E5EB] bg-[#F5F6F8]">
        <Image
          src={active.src}
          alt={active.alt}
          width={active.width}
          height={active.height}
          sizes="(max-width: 1024px) 100vw, 560px"
          loading={active.loading ?? "lazy"}
          className="aspect-video w-full object-cover object-top"
        />

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Inspect ${projectTitle} screenshot in full view`}
          className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white bg-[#14171C]/90 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-[#2563EB] hover:bg-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
        >
          <Maximize2 className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#525B6C]">{active.caption}</p>

        <div
          role="tablist"
          aria-label={`${projectTitle} screenshots`}
          className="flex items-center gap-1.5 shrink-0"
        >
          {screenshots.map((shot, idx) => {
            const selected = idx === activeIndex;
            return (
              <button
                key={shot.src}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`View screenshot ${idx + 1} of ${screenshots.length}`}
                onClick={() => setActiveIndex(idx)}
                className={`inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border px-2.5 font-mono text-xs font-medium tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                  selected
                    ? "border-[#2563EB] bg-[#2563EB] text-white"
                    : "border-[#E2E5EB] bg-white text-[#525B6C] hover:text-[#14171C]"
                }`}
              >
                0{idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#14171C]/85 p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-[#2D333D] bg-[#14171C] p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-base font-semibold text-white">
                  {projectTitle}
                </p>
                <p className="text-xs text-[#CBD2DC]">{active.caption}</p>
              </div>

              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close screenshot viewer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-[#2563EB]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-hidden rounded-xl bg-black">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="95vw"
                className="max-h-[72vh] w-full object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#CBD2DC] tabular-nums">
                {activeIndex + 1} / {screenshots.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (prev) => (prev - 1 + screenshots.length) % screenshots.length
                    )
                  }
                  aria-label="Previous screenshot"
                  className="inline-flex min-h-[40px] items-center gap-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-[#2563EB]"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % screenshots.length)
                  }
                  aria-label="Next screenshot"
                  className="inline-flex min-h-[40px] items-center gap-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-[#2563EB]"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
