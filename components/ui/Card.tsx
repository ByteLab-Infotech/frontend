'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' } : {}}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={`rounded-xl border border-[#E0E0E0] shadow-soft bg-white p-4 md:p-6 ${hover ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

