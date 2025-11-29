import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Offer Letter Sample - View Sample Offer Letter',
  description: 'View a sample ByteLab Infotech offer letter. See what your official internship offer letter will look like with all key features highlighted.',
  keywords: ['offer letter sample', 'internship offer letter', 'sample offer letter'],
  canonical: 'https://bytelab.com/offer-letter-sample',
});

export default function OfferLetterSamplePage() {
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
              <FileText className="w-10 h-10 text-electric-blue" />
            </div>
            <h1 className="text-hero font-heading font-bold text-navy mb-6">
              Offer Letter Sample
            </h1>
            <p className="text-body-lg text-gray-700 leading-relaxed">
              View a sample of the official ByteLab Infotech internship offer letter
              you'll receive after registration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sample Offer Letter */}
      <ContentSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <Card className="p-8 md:p-12">
              <div className="prose max-w-none">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-navy mb-4">ByteLab Infotech</h2>
                  <p className="text-body text-gray-600">MSME Registered Company</p>
                </div>
                
                <div className="border-t-2 border-navy pt-6 mb-6">
                  <p className="text-body text-gray-700 mb-4">
                    <strong>Date:</strong> [Date of Issue]
                  </p>
                  <p className="text-body text-gray-700 mb-6">
                    <strong>To,</strong><br />
                    [Student Name]<br />
                    [Email Address]
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-4">INTERNSHIP OFFER LETTER</h3>
                  <p className="text-body-lg text-gray-700 leading-relaxed mb-4">
                    We are pleased to offer you a Virtual Internship position at ByteLab Infotech
                    in the domain of <strong>[Domain Name]</strong> for a duration of{' '}
                    <strong>[Duration] days</strong>.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-navy mb-3">Internship Details:</h4>
                  <ul className="space-y-2 text-body text-gray-700 ml-6">
                    <li>• <strong>Domain:</strong> [Selected Domain]</li>
                    <li>• <strong>Duration:</strong> [Selected Duration] days</li>
                    <li>• <strong>Start Date:</strong> [Batch Start Date]</li>
                    <li>• <strong>Type:</strong> Virtual Internship</li>
                    <li>• <strong>Tasks:</strong> GitHub-based project assignments</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-navy mb-3">Terms & Conditions:</h4>
                  <ul className="space-y-2 text-body text-gray-700 ml-6">
                    <li>• This is a virtual internship program with project-based tasks</li>
                    <li>• All tasks must be completed and submitted via GitHub</li>
                    <li>• Certificate will be issued upon successful completion of all tasks</li>
                    <li>• Certificate unlock requires payment as per domain pricing</li>
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-body text-gray-700 mb-4">
                    We look forward to your contribution and wish you success in your internship journey.
                  </p>
                  <div className="mt-6">
                    <p className="text-body text-gray-700 mb-2">
                      <strong>Best Regards,</strong>
                    </p>
                    <p className="text-body text-gray-700">
                      ByteLab Infotech<br />
                      MSME Registered Company
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </ContentSection>

      {/* Key Features */}
      <ContentSection title="Key Features" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              'Official company letterhead',
              'MSME registration details',
              'Complete internship details',
              'Clear terms and conditions',
              'Professional formatting',
              'Instant delivery after registration',
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                <p className="text-body text-gray-700">{feature}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection className="bg-navy text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display font-heading font-bold text-white mb-6">
            Get Your Offer Letter
          </h2>
          <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
            Register now to receive your official internship offer letter instantly.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
          >
            Register Now
          </a>
        </div>
      </ContentSection>
    </div>
  );
}

