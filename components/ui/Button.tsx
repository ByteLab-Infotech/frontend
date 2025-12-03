'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'cta';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  disabled,
  ...props 
}) => {
  const baseStyles = 'rounded-lg px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 gpu-accelerated min-h-[44px] min-w-[44px]';
  
  const variants = {
    primary: 'bg-electric-blue text-white hover:bg-[#1D72C0] hover:shadow-elevated focus:ring-electric-blue active:scale-95',
    secondary: 'bg-slate-grey text-charcoal hover:bg-[#E8ECF0] focus:ring-slate-grey active:scale-95',
    outline: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white focus:ring-electric-blue active:scale-95',
    cta: 'bg-byte-orange text-white hover:bg-[#E5822A] hover:shadow-glow focus:ring-byte-orange active:scale-95 font-semibold',
  };
  
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

