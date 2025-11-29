'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedProgressBarProps {
  progress: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  color?: 'blue' | 'orange' | 'green';
}

export const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({ 
  progress, 
  label, 
  showPercentage = true,
  color = 'blue'
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  const colorClasses = {
    blue: 'bg-electric-blue',
    orange: 'bg-byte-orange',
    green: 'bg-green-500',
  };
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-medium text-charcoal">{label}</p>
          {showPercentage && (
            <p className="text-sm font-semibold text-charcoal">{Math.round(clampedProgress)}%</p>
          )}
        </div>
      )}
      <div className="w-full bg-slate-grey rounded-full h-3 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className={`${colorClasses[color]} h-3 rounded-full relative overflow-hidden`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: 'linear' 
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

