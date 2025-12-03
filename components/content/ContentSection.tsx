'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeIn } from '@/lib/animations';

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  fullWidth = false,
}) => {
  const { ref, controls } = useScrollAnimation(0.1);

  return (
    <section className={`py-section ${className}`}>
      <div className={`container mx-auto px-6 ${fullWidth ? 'max-w-full' : 'max-w-7xl'}`}>
        {(title || subtitle) && (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-display font-heading font-bold text-navy mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

