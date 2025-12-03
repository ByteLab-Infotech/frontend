'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button, ButtonProps } from './Button';

interface AnimatedButtonProps extends Omit<ButtonProps, 'className'> {
  className?: string;
  href?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  children,
  href,
  className = '',
  ...props
}) => {
  const button = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button variant={variant} className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href}>
        {button}
      </a>
    );
  }

  return button;
};

