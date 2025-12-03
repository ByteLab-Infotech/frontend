'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/Button';
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
    <AnimatedCard hover className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
          className={`w-14 h-14 ${color} mb-4 flex items-center justify-center`}
        >
          {icon}
        </motion.div>
        
        <Link href={`/internships/${slug}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="text-electric-blue cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </Link>
      </div>
      
      <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
        {name}
      </h3>
      
      <p className="text-body text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-3">
        {description.length > 150 ? `${description.substring(0, 150)}...` : description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {durations.map((duration) => (
          <span
            key={duration}
            className="px-3 py-1 bg-slate-grey text-sm font-medium text-gray-700 rounded-full"
          >
            {duration} days
          </span>
        ))}
      </div>
      
      <Link href={`/register?domain=${encodeURIComponent(name)}`} className="mt-auto">
        <Button variant="primary" className="w-full">
          Apply Now
        </Button>
      </Link>
    </AnimatedCard>
  );
};

