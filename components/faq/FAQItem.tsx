'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-white rounded-xl border border-gray-100 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-grey transition-colors"
      >
        <h3 className="text-h3 font-heading font-semibold text-navy pr-4">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-electric-blue flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-electric-blue flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <p className="text-body text-gray-700 leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

