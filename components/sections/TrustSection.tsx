'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, fadeIn } from '@/lib/animations';
import { Shield, QrCode, Github, CreditCard, Award } from 'lucide-react';

const trustElements = [
  {
    icon: Shield,
    title: 'MSME Trusted',
    description: 'Verified and trusted by MSME',
    color: 'text-blue-500',
  },
  {
    icon: QrCode,
    title: 'QR Verification',
    description: 'QR-based certificate verification',
    color: 'text-green-500',
  },
  {
    icon: Github,
    title: 'GitHub Integration',
    description: 'Real GitHub task validation',
    color: 'text-gray-700',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Razorpay secure payment gateway',
    color: 'text-indigo-500',
  },
  {
    icon: Award,
    title: 'Industry Recognized',
    description: 'Certificates recognized by employers',
    color: 'text-orange-500',
  },
];

export const TrustSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <section className="py-section bg-white pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-display font-heading font-bold text-navy mb-4"
          >
            Why ByteLab
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-body-lg text-gray-600 max-w-2xl mx-auto"
          >
            Trusted by thousands of students and recognized by industry leaders
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {trustElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <motion.div
                key={element.title}
                initial="hidden"
                animate={controls}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
                    borderColor: '#2D92F3'
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-electric-blue transition-all duration-200"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`w-14 h-14 ${element.color} mb-6`}
                  >
                    <Icon className="w-full h-full" />
                  </motion.div>
                  
                  <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                    {element.title}
                  </h3>
                  <p className="text-body text-gray-600 leading-relaxed">
                    {element.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Trust Logos */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mt-16 pt-16 pb-20 border-t border-gray-200"
        >
          <p className="text-center text-sm text-gray-500 mb-8 font-medium">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
            {['MSME', 'Razorpay', 'GitHub', 'AWS'].map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={fadeIn}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-2xl font-bold text-gray-400"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

