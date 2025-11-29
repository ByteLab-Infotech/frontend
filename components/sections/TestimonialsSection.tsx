'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeIn } from '@/lib/animations';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Computer Science Student',
    content: 'ByteLab made it so easy to get a verified certificate. The GitHub integration is seamless and the tasks are actually relevant to real-world work.',
    rating: 5,
  },
  {
    name: 'Rahul Kumar',
    role: 'Engineering Graduate',
    content: 'I completed my internship in 45 days and got my certificate with QR verification. The process was completely automated and professional.',
    rating: 5,
  },
  {
    name: 'Anjali Patel',
    role: 'Data Science Enthusiast',
    content: 'The best part is the instant offer letter and the real GitHub tasks. It feels like working on actual industry projects.',
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, controls } = useScrollAnimation(0.1);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-section bg-slate-grey pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-display font-heading font-bold text-navy mb-4">
            What Students Say
          </h2>
          <p className="text-body-lg text-gray-600">
            Join thousands of satisfied students who got their certificates
          </p>
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-elevated"
            >
              <Quote className="w-12 h-12 text-electric-blue mb-6 opacity-50" />
              
              <p className="text-body-lg text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-h3 font-heading font-semibold text-navy mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-body text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-5 h-5 text-byte-orange"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-electric-blue transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-electric-blue w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-electric-blue transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

