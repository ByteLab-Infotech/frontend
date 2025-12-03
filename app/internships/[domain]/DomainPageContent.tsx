'use client';

import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';
import { CheckCircle2, Clock, Award, Code, Target } from 'lucide-react';
import Link from 'next/link';

interface DomainPageContentProps {
  domain: any;
  domainSlug: string;
}

export default function DomainPageContent({ domain, domainSlug }: DomainPageContentProps) {
  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          headline: `${domain.name} Virtual Internship Program`,
          description: domain.description,
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
          image: `https://bytelab.com/internships/${domainSlug}.jpg`,
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-slate-grey to-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="text-6xl mb-6">{domain.icon}</div>
              <h1 className="text-hero font-heading font-bold text-navy mb-6">
                {domain.name} Virtual Internship
              </h1>
              <p className="text-body-lg text-gray-700 leading-relaxed mb-8">
                {domain.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/register">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
                  >
                    Start Your Internship
                  </motion.button>
                </Link>
                <Link href="/internships">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-transparent border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy/5 transition-colors"
                  >
                    View All Domains
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Learn */}
        <ContentSection title="What You'll Learn" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {domain.skills.map((skill: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <span className="text-body text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* Tools You'll Use */}
        <ContentSection title="Tools & Technologies" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white rounded-xl p-8 border border-gray-100"
            >
              <div className="flex flex-wrap gap-3">
                {domain.tools.map((tool: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-electric-blue/10 text-electric-blue rounded-lg text-body font-medium"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </ContentSection>

        {/* Tasks Breakdown */}
        <ContentSection title="Tasks & Projects" className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(domain.tasks).map(([level, tasks]: [string, any]) => (
                <motion.div
                  key={level}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-slate-grey rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-electric-blue" />
                    <h3 className="text-h3 font-heading font-semibold text-navy capitalize">
                      {level}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {tasks.map((task: string, index: number) => (
                      <li key={index} className="text-body-sm text-gray-600 flex items-start gap-2">
                        <span className="text-electric-blue mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </ContentSection>

        {/* Example Projects */}
        <ContentSection title="Example Projects" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {domain.exampleProjects.map((project: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-h3 font-heading font-semibold text-navy mb-2">
                        {project}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* Duration Options */}
        <ContentSection title="Duration Options" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-3 gap-6"
            >
              {[30, 45, 90].map((duration) => (
                <motion.div
                  key={duration}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-electric-blue/5 to-transparent rounded-xl p-6 border border-electric-blue/20 text-center"
                >
                  <Clock className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                  <h3 className="text-h3 font-heading font-bold text-navy mb-2">
                    {duration} Days
                  </h3>
                  <p className="text-body text-gray-600">
                    {duration === 30 && 'Perfect for quick skill building'}
                    {duration === 45 && 'Balanced learning experience'}
                    {duration === 90 && 'Comprehensive deep dive'}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* Why Choose ByteLab */}
        <ContentSection title={`Why Choose ByteLab for ${domain.name}`} className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {domain.whyChoose.map((reason: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-100 flex items-start gap-4"
                >
                  <Target className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                  <p className="text-body text-gray-700">{reason}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* FAQs */}
        <ContentSection title="Frequently Asked Questions" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {domain.faqs.map((faq: any, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-slate-grey rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-body text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* CTA */}
        <ContentSection className="bg-navy text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-display font-heading font-bold text-white mb-6">
              Ready to Start Your {domain.name} Internship?
            </h2>
            <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
              Join hundreds of students learning {domain.name.toLowerCase()} through ByteLab's
              structured virtual internship program.
            </p>
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
              >
                Get Started Now
              </motion.button>
            </Link>
          </div>
        </ContentSection>
      </div>
    </>
  );
}

