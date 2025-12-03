'use client';

import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import { Award, Shield, CheckCircle2, FileCheck, Lock } from 'lucide-react';

export default function AccreditationPage() {
  return (
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
              <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-electric-blue" />
              </div>
              <h1 className="text-hero font-heading font-bold text-navy mb-6">
                Accreditation & Credibility
              </h1>
              <p className="text-body-lg text-gray-700 leading-relaxed">
                ByteLab Infotech is committed to maintaining the highest standards of credibility,
                transparency, and trust in all our operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MSME Accreditation */}
        <ContentSection title="MSME Accreditation" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-gradient-to-br from-electric-blue/5 to-transparent rounded-2xl p-8 border border-electric-blue/20"
            >
              <div className="flex items-start gap-6">
                <Shield className="w-12 h-12 text-electric-blue flex-shrink-0" />
                <div>
                  <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                    Government Verified MSME
                  </h3>
                  <p className="text-body-lg text-gray-700 leading-relaxed mb-4">
                    ByteLab Infotech is registered as a Micro, Small and Medium Enterprise
                    under the MSME Act, 2006. This accreditation provides official recognition
                    from the Government of India and ensures compliance with government regulations.
                  </p>
                  <ul className="space-y-2 text-body text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                      <span>Official government registration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                      <span>Compliance with MSME regulations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                      <span>Verified business entity status</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </ContentSection>

        {/* Process Credibility */}
        <ContentSection title="Process Credibility" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <FileCheck className="w-8 h-8 text-electric-blue flex-shrink-0" />
                  <div>
                    <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                      Automated Task Validation
                    </h3>
                    <p className="text-body text-gray-700 leading-relaxed">
                      All tasks are validated through automated systems using GitHub API integration.
                      This ensures fair, consistent, and transparent evaluation of student work.
                      No human bias, no manual errors—just objective, technology-driven validation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <Lock className="w-8 h-8 text-electric-blue flex-shrink-0" />
                  <div>
                    <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                      Secure Certificate Generation
                    </h3>
                    <p className="text-body text-gray-700 leading-relaxed">
                      Certificates are generated using secure, tamper-proof technology. Each
                      certificate includes a unique QR code and certificate ID that can be
                      instantly verified through our public verification portal.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-electric-blue flex-shrink-0" />
                  <div>
                    <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                      Transparent Process
                    </h3>
                    <p className="text-body text-gray-700 leading-relaxed">
                      Every step of our process is transparent and verifiable. Students can
                      track their progress, view task requirements, and understand exactly
                      what is expected. No hidden requirements, no surprises.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ContentSection>

        {/* Verification Technologies */}
        <ContentSection title="Verification Technologies" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  QR Code Verification
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Each certificate includes a unique QR code that links directly to our
                  verification database. Scanning the QR code provides instant verification
                  of certificate authenticity.
                </p>
              </div>
              
              <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Certificate ID System
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Every certificate has a unique identifier that can be verified through
                  our public portal. This provides an additional layer of security and
                  prevents certificate fraud.
                </p>
              </div>
              
              <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Database Verification
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  All certificates are stored in our secure database. Verification checks
                  against this database to confirm authenticity, issue date, and certificate
                  details.
                </p>
              </div>
              
              <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  GitHub Integration
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Task validation through GitHub API ensures that all work is authentic,
                  original, and meets quality standards. This provides verifiable proof
                  of student capabilities.
                </p>
              </div>
            </motion.div>
          </div>
        </ContentSection>

        {/* Security Measures */}
        <ContentSection title="Security & Anti-Fraud Measures" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white rounded-xl p-8 border border-gray-100"
            >
              <h3 className="text-h3 font-heading font-semibold text-navy mb-6">
                Protecting Certificate Integrity
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-body font-medium text-navy mb-1">Unique Identifiers</p>
                    <p className="text-body-sm text-gray-600">
                      Each certificate has unique QR codes and IDs that cannot be duplicated
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-body font-medium text-navy mb-1">Database Verification</p>
                    <p className="text-body-sm text-gray-600">
                      All certificates are stored in secure databases with verification capabilities
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-body font-medium text-navy mb-1">Task Validation</p>
                    <p className="text-body-sm text-gray-600">
                      GitHub-based validation ensures all work is authentic and original
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-body font-medium text-navy mb-1">Anti-Fraud Monitoring</p>
                    <p className="text-body-sm text-gray-600">
                      Continuous monitoring and fraud detection systems protect certificate integrity
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ContentSection>

        {/* Trust Indicators */}
        <ContentSection title="Why Trust ByteLab" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-2">
                  MSME Verified
                </h3>
                <p className="text-body-sm text-gray-600">
                  Government registered and verified company
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-2">
                  Verified Certificates
                </h3>
                <p className="text-body-sm text-gray-600">
                  QR code verification and unique certificate IDs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-2">
                  Transparent Process
                </h3>
                <p className="text-body-sm text-gray-600">
                  Clear requirements and automated validation
                </p>
              </div>
            </motion.div>
          </div>
        </ContentSection>

        <Footer />
      </div>
  );
}

