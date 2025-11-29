'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  href?: string;
  showText?: boolean;
  invert?: boolean; // For dark backgrounds
}

const sizeMap = {
  sm: { width: 120, height: 36 },
  md: { width: 160, height: 48 },
  lg: { width: 200, height: 60 },
  xl: { width: 240, height: 72 },
};

const iconSizeMap = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 48, height: 48 },
  xl: { width: 56, height: 56 },
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  href = '/',
  showText = false,
  invert = false,
}) => {
  const dimensions = variant === 'icon' ? iconSizeMap[size] : sizeMap[size];
  const logoPath = variant === 'icon' ? '/logo/logo-icon.svg' : '/logo/logo.svg';

  const logoElement = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center ${className}`}
    >
      <img
        src={logoPath}
        alt="ByteLab Infotech Logo"
        width={dimensions.width}
        height={dimensions.height}
        className={`object-contain ${invert ? 'brightness-0 invert' : ''}`}
      />
      {showText && (
        <span className={`ml-3 text-xl font-heading font-bold ${invert ? 'text-white' : 'text-navy'}`}>
          ByteLab Infotech
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="ByteLab Infotech Home" className="inline-block">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
};

