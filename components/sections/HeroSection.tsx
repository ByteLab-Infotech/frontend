'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { slideInRight, fadeIn, staggerContainer } from '@/lib/animations';
import { CheckCircle2, Users, Award, Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const achievements = [
    { icon: Users, value: '10K+', label: 'Students' },
    { icon: Award, value: '50K+', label: 'Certificates' },
    { icon: Shield, value: '100%', label: 'Verified' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-grey via-white to-white py-section overflow-hidden">
      {/* Background gradient ring animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-electric-blue/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeIn}
              className="text-hero font-heading font-bold text-navy mb-6 leading-tight"
            >
              Start Your Official Virtual Internship in{' '}
              <span className="text-electric-blue">Minutes</span>
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              className="text-body-lg text-gray-700 mb-8 leading-relaxed"
            >
              Offer Letter → GitHub Tasks → Certificate with QR Verification.
              <br />
              Fully automated. Zero manual checking. Industry-recognized.
            </motion.p>
            
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/internships">
                <Button variant="cta" className="text-lg px-8 py-4">
                  Apply
                </Button>
              </Link>
            </motion.div>
            
            {/* Achievement Bar */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-electric-blue mr-2" />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-2xl font-bold text-navy"
                      >
                        {achievement.value}
                      </motion.span>
                    </div>
                    <p className="text-sm text-gray-600">{achievement.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          
          {/* Right - Dashboard Mockup */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-elevated p-8 border border-gray-100"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video bg-gradient-to-br from-slate-grey to-white rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Animated dashboard preview */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative z-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-electric-blue mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Dashboard</p>
                  <p className="text-sm text-gray-500 mt-2">Real-time progress tracking</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

