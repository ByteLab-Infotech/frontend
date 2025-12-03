'use client';

import React from 'react';
import { motion, Transition } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeIn' | 'slideUp';
  transition?: Transition;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  variant = 'fadeIn',
  transition,
}) => {
  const variants = variant === 'slideUp' ? slideUp : fadeIn;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

