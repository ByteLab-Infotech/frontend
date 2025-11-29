'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, fadeIn } from '@/lib/animations';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { 
  Globe, 
  Database, 
  Smartphone, 
  Cloud, 
  Shield, 
  Code2,
  ChevronRight 
} from 'lucide-react';

const domains = [
  { name: 'Web Development', icon: Globe, color: 'text-blue-500' },
  { name: 'Data Science', icon: Database, color: 'text-purple-500' },
  { name: 'Mobile Development', icon: Smartphone, color: 'text-green-500' },
  { name: 'Cloud Computing', icon: Cloud, color: 'text-orange-500' },
  { name: 'Cybersecurity', icon: Shield, color: 'text-red-500' },
  { name: 'Machine Learning', icon: Code2, color: 'text-indigo-500' },
];

export const DomainsSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <section className="py-section bg-slate-grey">
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
            Internship Domains
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-body-lg text-gray-600 max-w-2xl mx-auto"
          >
            Choose from industry-leading domains and gain hands-on experience
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.name}
                initial="hidden"
                animate={controls}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCard hover className="h-full group">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start justify-between"
                  >
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className={`w-12 h-12 ${domain.color} mb-4`}
                      >
                        <Icon className="w-full h-full" />
                      </motion.div>
                      
                      <h3 className="text-h3 font-heading font-semibold text-navy mb-2">
                        {domain.name}
                      </h3>
                      
                      <motion.p
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        className="text-body text-gray-600 leading-relaxed"
                      >
                        Hands-on experience in {domain.name.toLowerCase()}
                      </motion.p>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-electric-blue" />
                    </motion.div>
                  </motion.div>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

