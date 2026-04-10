"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeInUp}
      className={`scroll-mt-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}
