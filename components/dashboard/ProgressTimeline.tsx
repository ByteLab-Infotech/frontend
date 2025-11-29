'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface Milestone {
  label: string;
  completed: boolean;
  current: boolean;
}

interface ProgressTimelineProps {
  milestones: Milestone[];
  progress: number;
}

export const ProgressTimeline: React.FC<ProgressTimelineProps> = ({ milestones, progress }) => {
  return (
    <div className="relative">
      {/* Progress line */}
      <div className="absolute top-6 left-0 right-0 h-1 bg-slate-grey rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="h-full bg-electric-blue rounded-full"
        />
      </div>
      
      {/* Milestones */}
      <div className="relative flex justify-between">
        {milestones.map((milestone, index) => {
          const Icon = milestone.completed 
            ? CheckCircle2 
            : milestone.current 
            ? Clock 
            : Circle;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  milestone.completed
                    ? 'bg-electric-blue text-white'
                    : milestone.current
                    ? 'bg-byte-orange text-white'
                    : 'bg-slate-grey text-gray-400'
                } relative z-10`}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
              <p className={`mt-3 text-sm font-medium text-center max-w-[100px] ${
                milestone.completed || milestone.current
                  ? 'text-navy'
                  : 'text-gray-400'
              }`}>
                {milestone.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

