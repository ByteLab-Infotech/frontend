'use client';

import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { FAQItem } from '@/components/faq/FAQItem';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { HelpCircle } from 'lucide-react';


const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is ByteLab Infotech?',
        a: 'ByteLab Infotech is an MSME verified EdTech platform offering automated virtual internships. We provide students with real-world projects, GitHub-based task validation, and verified certificates.',
      },
      {
        q: 'How does the virtual internship program work?',
        a: 'After registration, you receive an offer letter, select a domain and duration, get assigned tasks via GitHub, complete and submit your work, and upon approval, receive a verified certificate.',
      },
      {
        q: 'Is ByteLab Infotech legitimate?',
        a: 'Yes, ByteLab Infotech is an MSME registered company verified by the Government of India. All certificates are verifiable through QR codes and our public verification portal.',
      },
    ],
  },
  {
    category: 'Internship Structure',
    questions: [
      {
        q: 'What domains are available?',
        a: 'We offer internships in Web Development, Data Science, Mobile Development, Cloud Computing, Cybersecurity, Machine Learning, Python Development, and Java Development.',
      },
      {
        q: 'What are the duration options?',
        a: 'Internships are available in 30, 45, and 90-day durations. Choose based on your schedule and learning goals.',
      },
      {
        q: 'How are tasks assigned?',
        a: 'Tasks are automatically assigned based on your selected domain and duration. Tasks are distributed across BEGINNER, INTERMEDIATE, ADVANCED, and FINAL levels.',
      },
      {
        q: 'Can I change my domain or duration after starting?',
        a: 'Domain and duration changes are generally not allowed after starting. Please choose carefully during registration.',
      },
    ],
  },
  {
    category: 'Legitimacy & Verification',
    questions: [
      {
        q: 'Are the certificates verified?',
        a: 'Yes, all certificates include QR codes and unique certificate IDs that can be verified instantly through our public verification portal.',
      },
      {
        q: 'Will employers accept ByteLab certificates?',
        a: 'Our certificates are verified, MSME-backed credentials that demonstrate real skills through GitHub portfolios. Many employers value project-based experience and verified credentials.',
      },
      {
        q: 'How can I verify a certificate?',
        a: 'Visit our verification portal at /verification and enter the certificate ID or scan the QR code. Verification is instant and free.',
      },
      {
        q: 'Is ByteLab MSME registered?',
        a: 'Yes, ByteLab Infotech is registered as a Micro, Small and Medium Enterprise under the MSME Act, 2006. Visit /msme for details.',
      },
    ],
  },
  {
    category: 'Payment & Pricing',
    questions: [
      {
        q: 'How much does the internship cost?',
        a: 'Internship registration is free. Certificate unlock requires payment, with pricing varying by domain. Check domain pages for specific pricing.',
      },
      {
        q: 'When do I need to pay?',
        a: 'Payment is required only when you want to unlock your certificate after completing all tasks. You can complete the internship without payment, but won\'t receive the certificate.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'We accept payments through Razorpay, supporting credit cards, debit cards, UPI, net banking, and wallets.',
      },
      {
        q: 'Is there a refund policy?',
        a: 'Yes, we have a refund policy. Please refer to /policies/refund for complete details.',
      },
    ],
  },
  {
    category: 'Certificate',
    questions: [
      {
        q: 'When do I receive my certificate?',
        a: 'You receive your certificate after completing all assigned tasks, getting them approved, and making the certificate payment.',
      },
      {
        q: 'What information is on the certificate?',
        a: 'Certificates include your name, domain, duration, completion date, unique certificate ID, and QR code for verification.',
      },
      {
        q: 'Can I download my certificate?',
        a: 'Yes, once unlocked, you can download your certificate as a PDF from your dashboard.',
      },
      {
        q: 'Is the certificate verifiable?',
        a: 'Yes, every certificate can be verified through our public portal using the QR code or certificate ID.',
      },
    ],
  },
  {
    category: 'Batch System',
    questions: [
      {
        q: 'What is the batch system?',
        a: 'Internships are organized into batches with specific start dates. Tasks are unlocked when your batch starts.',
      },
      {
        q: 'When does my batch start?',
        a: 'Batch start dates are assigned during registration. You can view your batch start date in your dashboard.',
      },
      {
        q: 'What if my batch hasn\'t started yet?',
        a: 'If your batch hasn\'t started, you\'ll see a countdown timer. Tasks will be unlocked automatically when the batch begins.',
      },
      {
        q: 'Can I start early?',
        a: 'Tasks are unlocked when your batch starts. Early access is not available to maintain fairness.',
      },
    ],
  },
  {
    category: 'GitHub Process',
    questions: [
      {
        q: 'Do I need a GitHub account?',
        a: 'Yes, a GitHub account is required as all tasks are submitted through GitHub repositories.',
      },
      {
        q: 'How do I submit tasks?',
        a: 'Create a GitHub repository for each task, complete the work, and submit the repository URL through your dashboard.',
      },
      {
        q: 'How is my work validated?',
        a: 'Work is automatically validated using GitHub API. The system checks for code quality, completeness, and adherence to requirements.',
      },
      {
        q: 'What if my submission is rejected?',
        a: 'If rejected, you\'ll receive feedback. You can improve your work and resubmit. Review the feedback carefully and address the issues.',
      },
      {
        q: 'Can I see my GitHub portfolio?',
        a: 'Yes, all your submitted repositories are part of your GitHub portfolio, which you can share with employers.',
      },
    ],
  },
  {
    category: 'Support & Help',
    questions: [
      {
        q: 'How can I get help?',
        a: 'Visit /dashboard/help for guides, /dashboard/support for ticket submission, or contact us at support@bytelab.com.',
      },
      {
        q: 'What is the response time?',
        a: 'We typically respond within 24-48 hours during business days. For urgent matters, mention "URGENT" in your subject.',
      },
      {
        q: 'Is there documentation available?',
        a: 'Yes, comprehensive guides and documentation are available in the dashboard resources section.',
      },
    ],
  },
];


export default function FAQPage() {
  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({ question: q.q, answer: q.a }))
  );

  return (
    <>
      <SchemaMarkup
        type="faq"
        data={{
          questions: allQuestions,
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
              <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10 text-electric-blue" />
              </div>
              <h1 className="text-hero font-heading font-bold text-navy mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-body-lg text-gray-700 leading-relaxed">
                Find answers to common questions about our virtual internship program,
                certificates, payment, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <ContentSection className="bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-h2 font-heading font-bold text-navy mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.q}
                      answer={faq.a}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ContentSection>

        {/* Still Have Questions */}
        <ContentSection className="bg-slate-grey">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl p-8 border border-gray-100"
            >
              <h2 className="text-h2 font-heading font-bold text-navy mb-4">
                Still Have Questions?
              </h2>
              <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-electric-blue text-white rounded-lg font-medium hover:bg-[#1D72C0] transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/dashboard/support"
                  className="px-6 py-3 bg-transparent border-2 border-electric-blue text-electric-blue rounded-lg font-medium hover:bg-electric-blue/5 transition-colors"
                >
                  Submit a Ticket
                </a>
              </div>
            </motion.div>
          </div>
        </ContentSection>
      </div>
    </>
  );
}

