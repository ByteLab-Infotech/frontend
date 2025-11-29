'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { ArrowRight } from 'lucide-react';

interface DomainCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  durations: number[];
  color: string;
}

export const DomainCard: React.FC<DomainCardProps> = ({
  name,
  description,
  icon,
  slug,
  durations,
  color,
}) => {
  return (
    <Link href={`/internships/${slug}`}>
      <AnimatedCard hover className="h-full">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className={`w-14 h-14 ${color} mb-4`}
          >
            {icon}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="text-electric-blue"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
        
        <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
          {name}
        </h3>
        
        <p className="text-body text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {durations.map((duration) => (
            <span
              key={duration}
              className="px-3 py-1 bg-slate-grey text-sm font-medium text-gray-700 rounded-full"
            >
              {duration} days
            </span>
          ))}
        </div>
      </AnimatedCard>
    </Link>
  );
};

