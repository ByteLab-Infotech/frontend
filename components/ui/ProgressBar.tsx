'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  label, 
  showPercentage = true,
  animated = true 
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className="w-full">
      {label && (
        <p className="text-sm font-medium text-charcoal mb-3">{label}</p>
      )}
      <div className="w-full bg-slate-grey rounded-full h-2 overflow-hidden">
        {animated ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${clampedProgress}%` }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="bg-electric-blue h-2 rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: 'linear' 
              }}
            />
          </motion.div>
        ) : (
          <div
            className="bg-electric-blue h-2 rounded-full transition-all duration-300"
            style={{ width: `${clampedProgress}%` }}
          />
        )}
      </div>
      {showPercentage && (
        <p className="text-xs text-gray-600 mt-2 font-medium">{Math.round(clampedProgress)}%</p>
      )}
    </div>
  );
};

