import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { FileText } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Terms & Conditions - ByteLab Infotech',
  description: 'Read ByteLab Infotech\'s terms and conditions. Understand the rules and guidelines for using our virtual internship platform.',
  keywords: ['terms and conditions', 'terms of service', 'user agreement'],
  canonical: 'https://bytelab.com/policies/terms',
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero
        title="Terms & Conditions"
        description="Please read these terms carefully before using our virtual internship platform."
        icon={<FileText className="w-10 h-10 text-electric-blue" />}
      />

      <ContentSection className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <AnimatedSection variant="slideUp">
            <div className="space-y-6 text-body text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-h2 font-heading font-bold text-navy mb-4">Last Updated: January 2024</h2>
                <p>
                  By accessing and using ByteLab Infotech's virtual internship platform, you agree to 
                  be bound by these Terms and Conditions. If you do not agree, please do not use our services.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Acceptance of Terms</h3>
                <p>
                  By registering for an internship, you acknowledge that you have read, understood, 
                  and agree to be bound by these terms and our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Eligibility</h3>
                <p>
                  You must be at least 18 years old or have parental consent to use our platform. 
                  You must provide accurate and complete information during registration.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">User Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Submit original work through GitHub</li>
                  <li>Follow all task requirements and guidelines</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in fraudulent or deceptive practices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Payment Terms</h3>
                <p>
                  Certificate unlock requires payment as specified for your chosen domain. Payments are 
                  processed securely through Razorpay. All fees are non-refundable except as stated in 
                  our Refund Policy.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Intellectual Property</h3>
                <p>
                  All content on our platform, including but not limited to text, graphics, logos, and 
                  software, is the property of ByteLab Infotech and protected by copyright laws.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Limitation of Liability</h3>
                <p>
                  ByteLab Infotech shall not be liable for any indirect, incidental, special, or 
                  consequential damages arising from your use of our platform.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Contact Us</h3>
                <p>
                  For questions about these terms, contact us at{' '}
                  <a href="mailto:support@bytelab.com" className="text-electric-blue hover:underline">
                    support@bytelab.com
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
}

