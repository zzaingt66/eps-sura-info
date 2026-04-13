"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
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

const SWIPE_THRESHOLD = 70;

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

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (!canNavigate) return;

    if (info.offset.x <= -SWIPE_THRESHOLD || info.velocity.x < -450) {
      goToNext();
      return;
    }

    if (info.offset.x >= SWIPE_THRESHOLD || info.velocity.x > 450) {
      goToPrevious();
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={frameMotion}
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/30 bg-[linear-gradient(145deg,rgba(255,248,249,0.62),rgba(255,240,242,0.34))] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,34,58,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(181,0,28,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.08))]" />

      <div className="relative h-84 w-full sm:h-110 lg:h-150 xl:h-189">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.imageSrc}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideMotion}
            className="absolute inset-0"
            drag={canNavigate ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={activeSlide.imageSrc}
              alt={activeSlide.imageAlt}
              fill
              priority
              quality={100}
              sizes="100vw"
              draggable={false}
              className={`select-none object-contain object-center ${canNavigate ? "cursor-grab active:cursor-grabbing" : ""}`}
            />
          </motion.div>
        </AnimatePresence>

        {canNavigate ? (
          <>
            <button
              type="button"
              aria-label="Banner anterior"
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-white/28 text-brand-950 shadow-[0_12px_24px_-18px_rgba(0,0,0,0.32)] backdrop-blur-md transition hover:bg-white/42"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Banner siguiente"
              onClick={goToNext}
              className="absolute top-1/2 right-4 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-white/28 text-brand-950 shadow-[0_12px_24px_-18px_rgba(0,0,0,0.32)] backdrop-blur-md transition hover:bg-white/42"
            >
              <ChevronRight className="size-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/35 bg-white/18 px-3 py-2 backdrop-blur-md">
              {BANNER_SLIDES.map((slide, index) => (
                <button
                  key={slide.imageSrc}
                  type="button"
                  aria-label={`Ir al banner ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition ${index === activeIndex ? "h-2.5 w-7 bg-brand-700" : "size-2.5 bg-white/75 hover:bg-brand-300"}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </motion.div>
  );
}