import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { RefreshCw } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Refund Policy - ByteLab Infotech',
  description: 'Read ByteLab Infotech\'s refund policy. Understand our refund terms and conditions for certificate payments.',
  keywords: ['refund policy', 'money back', 'refund terms'],
  canonical: 'https://bytelab.com/policies/refund',
});

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero
        title="Refund Policy"
        description="Our refund policy outlines the terms and conditions for refunds on certificate payments."
        icon={<RefreshCw className="w-10 h-10 text-electric-blue" />}
      />

      <ContentSection className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <AnimatedSection variant="slideUp">
            <div className="space-y-6 text-body text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-h2 font-heading font-bold text-navy mb-4">Last Updated: January 2024</h2>
                <p>
                  ByteLab Infotech offers refunds under specific circumstances as outlined in this policy. 
                  Please read carefully before making a payment.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Refund Eligibility</h3>
                <p>Refunds may be considered in the following cases:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Technical errors preventing certificate generation</li>
                  <li>Duplicate payments</li>
                  <li>Payment made by mistake</li>
                  <li>Service not delivered as promised</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Non-Refundable Items</h3>
                <p>The following are not eligible for refunds:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payments for completed and issued certificates</li>
                  <li>Change of mind after certificate unlock</li>
                  <li>Failure to complete tasks or meet requirements</li>
                  <li>Account suspension due to policy violations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Refund Process</h3>
                <p>To request a refund:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Contact support at support@bytelab.com within 7 days of payment</li>
                  <li>Provide payment details and reason for refund</li>
                  <li>Our team will review your request within 5-7 business days</li>
                  <li>If approved, refund will be processed within 10-15 business days</li>
                </ol>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Refund Method</h3>
                <p>
                  Refunds will be processed to the original payment method used. Processing times may 
                  vary depending on your bank or payment provider.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Contact Us</h3>
                <p>
                  For refund requests or questions, contact us at{' '}
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

