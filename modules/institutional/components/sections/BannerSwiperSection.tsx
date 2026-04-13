"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BANNER_SLIDES } from "../../data/content";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const frameMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const slideMotion = {
  initial: { opacity: 0, scale: 1.015 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, scale: 0.985, transition: { duration: 0.28, ease: EASE } },
};

export function BannerSwiperSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = BANNER_SLIDES.length;
  const activeSlide = BANNER_SLIDES[activeIndex];
  const canNavigate = totalSlides > 1;

  function goToPrevious() {
    if (!canNavigate) return;
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  }

  function goToNext() {
    if (!canNavigate) return;
    setActiveIndex((current) => (current + 1) % totalSlides);
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={frameMotion}
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-brand-50"
    >
      <div className="relative h-84 w-full bg-brand-50 sm:h-110 lg:h-150 xl:h-189">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.imageSrc}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideMotion}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.imageSrc}
              alt={activeSlide.imageAlt}
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-contain object-center"
            />
          </motion.div>
        </AnimatePresence>

        {canNavigate ? (
          <>
            <button
              type="button"
              aria-label="Banner anterior"
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-brand-900 shadow-[0_12px_24px_-18px_rgba(0,0,0,0.45)] backdrop-blur-sm transition hover:bg-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Banner siguiente"
              onClick={goToNext}
              className="absolute top-1/2 right-4 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-brand-900 shadow-[0_12px_24px_-18px_rgba(0,0,0,0.45)] backdrop-blur-sm transition hover:bg-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        ) : null}
      </div>
    </motion.div>
  );
}