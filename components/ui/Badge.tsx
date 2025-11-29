'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  status?: 'pending' | 'approved' | 'rejected' | 'running' | 'completed' | 'upcoming';
  level?: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'FINAL';
  children?: React.ReactNode;
  animated?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ status, level, children, animated = false }) => {
  const statusStyles = {
    pending: 'bg-gray-200 text-gray-800',
    approved: 'bg-electric-blue text-white',
    rejected: 'bg-red-500 text-white',
    running: 'bg-green-500 text-white',
    completed: 'bg-navy text-white',
    upcoming: 'bg-yellow-400 text-charcoal',
  };
  
  const levelStyles = {
    BEGINNER: 'bg-green-100 text-green-800',
    INTERMEDIATE: 'bg-blue-100 text-blue-800',
    ADVANCED: 'bg-purple-100 text-purple-800',
    FINAL: 'bg-orange-100 text-orange-800',
  };
  
  const statusText = {
    pending: 'Pending',
    approved: 'Approved',
    rejected: 'Rejected',
    running: 'Running',
    completed: 'Completed',
    upcoming: 'Upcoming',
  };
  
  const levelText = {
    BEGINNER: 'Beginner',
    INTERMEDIATE: 'Intermediate',
    ADVANCED: 'Advanced',
    FINAL: 'Final',
  };
  
  // Determine which style and text to use
  const badgeStyle = level ? levelStyles[level] : status ? statusStyles[status] : statusStyles.pending;
  const badgeText = level ? levelText[level] : status ? statusText[status] : children;
  
  const BadgeContent = (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${badgeStyle}`}>
      {children || badgeText}
    </span>
  );
  
  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {BadgeContent}
      </motion.div>
    );
  }
  
  return BadgeContent;
};

