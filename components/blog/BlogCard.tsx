'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: number;
  category?: string;
  image?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/blog/${slug}`}>
        <Card hover className="h-full">
          {image && (
            <div className="aspect-video bg-slate-grey rounded-lg mb-4 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          
          {category && (
            <span className="inline-block px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs font-medium rounded-full mb-3">
              {category}
            </span>
          )}
          
          <h3 className="text-h3 font-heading font-semibold text-navy mb-3 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-body text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
            </div>
            
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center text-electric-blue font-medium"
            >
              Read more
              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

