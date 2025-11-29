'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NewsletterCTA: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-display font-heading font-bold text-white mb-6">
        Stay Updated
      </h2>
      <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
        Get the latest articles, tips, and resources delivered to your inbox.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-6 py-4 rounded-lg text-navy outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
        >
          Subscribe
        </motion.button>
      </div>
    </div>
  );
};

