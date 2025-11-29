'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideUp } from '@/lib/animations';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  onClick 
}) => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideUp}
      transition={{ delay, duration: 0.3 }}
      whileHover={hover ? { 
        y: -8, 
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
        transition: { duration: 0.2 }
      } : {}}
      className={`rounded-xl border border-[#E0E0E0] shadow-soft bg-white p-6 ${hover ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

