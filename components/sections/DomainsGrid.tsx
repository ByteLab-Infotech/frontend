'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { DomainCard } from '@/components/domain/DomainCard';
import { getDomainIcon, domainNameToSlug } from '@/lib/domainIcons';

interface Domain {
  id?: number;
  name: string;
  description?: string;
  durations: number[];
  certificatePrice?: number;
  slug?: string;
}

interface DomainsGridProps {
  domains: Domain[];
}

export const DomainsGrid: React.FC<DomainsGridProps> = ({ domains }) => {
  console.log('DomainsGrid received domains:', domains?.length || 0);
  console.log('First domain:', domains?.[0]);
  
  if (!domains || domains.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">No domains to display</p>
      </div>
    );
  }

  return (
    <div className="w-full" style={{ minHeight: '200px', position: 'relative', zIndex: 1 }}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ opacity: 1, visibility: 'visible' }}>
        {domains.map((domain, index) => {
          try {
            const iconConfig = getDomainIcon(domain.name);
            const Icon = iconConfig.icon;
            const slug = domain.slug || domainNameToSlug(domain.name);
            const description = domain.description || 'Explore this exciting domain and gain hands-on experience with real-world projects.';
            
            return (
              <div 
                key={domain.id || domain.name || index} 
                style={{ 
                  minHeight: '300px', 
                  opacity: 1, 
                  visibility: 'visible',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <DomainCard
                  name={domain.name}
                  description={description}
                  icon={<Icon className="w-full h-full" />}
                  slug={slug}
                  durations={domain.durations || [30, 45, 90]}
                  color={iconConfig.color}
                />
              </div>
            );
          } catch (error) {
            console.error('Error rendering domain card:', domain.name, error);
            return (
              <div key={domain.id || domain.name || index} className="p-4 border border-red-500" style={{ opacity: 1, visibility: 'visible' }}>
                <p>Error rendering: {domain.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

