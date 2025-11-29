'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { DomainsSection } from '@/components/sections/DomainsSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { fadeIn } from '@/lib/animations';

export default function Home() {
  const faqs = [
    { q: 'How long does the internship last?', a: 'Internships are available in 30, 45, or 90-day durations.' },
    { q: 'When do I get my offer letter?', a: 'You receive your offer letter immediately after registration.' },
    { q: 'How are tasks validated?', a: 'Tasks are automatically validated via GitHub API.' },
    { q: 'Is the certificate verifiable?', a: 'Yes, certificates include QR codes for instant verification.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroSection />
      
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      <div id="domains">
        <DomainsSection />
      </div>
      
      <TrustSection />
      
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-display font-heading font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lg text-gray-600">
              Everything you need to know about our internship program
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-grey rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-h3 font-heading font-semibold text-navy mb-2">
                  {faq.q}
                </h3>
                <p className="text-body text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

