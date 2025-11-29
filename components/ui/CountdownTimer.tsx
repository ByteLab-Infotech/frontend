'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date | string;
  onComplete?: () => void;
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  onComplete,
  className = '' 
}) => {
  const { timeLeft, isComplete } = useCountdown({ targetDate, onComplete });
  
  if (isComplete) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-lg font-semibold text-charcoal">Countdown Complete!</p>
      </div>
    );
  }
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];
  
  return (
    <div className={`flex gap-4 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-navy text-white rounded-lg px-4 py-3 min-w-[70px]"
            >
              <div className="text-2xl font-bold">{String(unit.value).padStart(2, '0')}</div>
            </motion.div>
          </AnimatePresence>
          <p className="text-xs text-gray-600 mt-2 font-medium">{unit.label}</p>
        </div>
      ))}
    </div>
  );
};

