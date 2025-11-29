'use client';

import React from 'react';
import {
  Target,
  Rocket,
  Shield,
  Code,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Rocket,
  Shield,
  Code,
  Users,
  Award,
  Briefcase,
  TrendingUp,
};

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  const Icon = iconMap[icon] || Shield; // Fallback to Shield if icon not found

  return (
    <div className={`bg-white rounded-xl p-8 border border-gray-100 ${className}`}>
      <div className="w-14 h-14 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-electric-blue" />
      </div>
      <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
        {title}
      </h3>
      <p className="text-body text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

