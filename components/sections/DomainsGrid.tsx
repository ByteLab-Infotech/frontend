'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { DomainCard } from '@/components/domain/DomainCard';
import {
  Globe,
  Database,
  Smartphone,
  Cloud,
  Shield,
  Code2,
  Brain,
  Server,
  type LucideIcon,
} from 'lucide-react';

interface Domain {
  name: string;
  slug: string;
  description: string;
  icon: string; // Icon name as string
  color: string;
  durations: number[];
}

interface DomainsGridProps {
  domains: Domain[];
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Database,
  Smartphone,
  Cloud,
  Shield,
  Code2,
  Brain,
  Server,
};

export const DomainsGrid: React.FC<DomainsGridProps> = ({ domains }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {domains.map((domain, index) => {
        const Icon = iconMap[domain.icon] || Globe; // Fallback to Globe if icon not found
        return (
          <motion.div key={domain.slug} variants={fadeIn} transition={{ delay: index * 0.1 }}>
            <DomainCard
              name={domain.name}
              description={domain.description}
              icon={<Icon className="w-full h-full" />}
              slug={domain.slug}
              durations={domain.durations}
              color={domain.color}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

