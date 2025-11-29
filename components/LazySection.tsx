'use client';

import React, { lazy, Suspense } from 'react';
import { SkeletonLoader } from '@/components/ui/SkeletonLoader';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <SkeletonLoader variant="rectangular" height="400px" />
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

