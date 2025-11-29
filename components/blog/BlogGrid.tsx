'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { BlogCard } from './BlogCard';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: number;
  category?: string;
  image?: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post, index) => (
        <motion.div key={post.slug} variants={fadeIn} transition={{ delay: index * 0.1 }}>
          <BlogCard
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
            readTime={post.readTime}
            category={post.category}
            image={post.image}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

