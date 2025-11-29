'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

interface PageHeroProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    <section className={`pt-32 pb-16 bg-gradient-to-b from-slate-grey to-white ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto"
        >
          {icon && (
            <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              {icon}
            </div>
          )}
          <h1 className="text-hero font-heading font-bold text-navy mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-body-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

