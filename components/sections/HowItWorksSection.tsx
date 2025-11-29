'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, fadeIn } from '@/lib/animations';
import { FileText, Code, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Register → Get Offer Letter',
    description: 'Sign up and receive your official offer letter instantly',
  },
  {
    number: 2,
    icon: Code,
    title: 'Complete Tasks on GitHub',
    description: 'Work on real projects and submit via GitHub',
  },
  {
    number: 3,
    icon: Award,
    title: 'Verify & Download Certificate',
    description: 'Get your QR-verifiable certificate upon completion',
  },
];

export const HowItWorksSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <section className="py-section bg-white">
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
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-body-lg text-gray-600 max-w-2xl mx-auto"
          >
            Three simple steps to get your verified internship certificate
          </motion.p>
        </motion.div>
        
        <div className="relative">
          {/* Horizontal line connector */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue/20 via-electric-blue to-electric-blue/20 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <React.Fragment key={step.number}>
                  <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-xl p-8 border border-gray-100 shadow-soft text-center relative z-10"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 relative"
                      >
                        <Icon className="w-8 h-8 text-white" />
                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step.number}
                        </span>
                      </motion.div>
                      
                      <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                        {step.title}
                      </h3>
                      <p className="text-body text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                  
                  {/* Arrow connector */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={controls}
                      variants={fadeIn}
                      transition={{ delay: index * 0.15 + 0.1 }}
                      className="hidden lg:flex items-center justify-center absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2 z-20"
                    >
                      <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <ArrowRight className="w-8 h-8 text-electric-blue bg-white rounded-full p-1" />
                      </motion.div>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

