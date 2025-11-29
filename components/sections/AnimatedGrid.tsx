'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  children,
  className = '',
  delay = 0.1,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className={className}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div
              variants={fadeIn}
              transition={{ delay: index * delay }}
            >
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
};

