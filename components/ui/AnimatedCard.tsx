'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <div
      style={{
        borderRadius: '12px',
        border: '1px solid #E0E0E0',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        backgroundColor: 'white',
        padding: '24px',
        cursor: hover ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
      }}
      className={className}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
      }}
    >
      {children}
    </div>
  );
};

