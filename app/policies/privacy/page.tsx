import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { Shield } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Privacy Policy - ByteLab Infotech',
  description: 'Read ByteLab Infotech\'s privacy policy. Learn how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'privacy'],
  canonical: 'https://bytelab.com/policies/privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero
        title="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        icon={<Shield className="w-10 h-10 text-electric-blue" />}
      />

      <ContentSection className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <AnimatedSection variant="slideUp">
            <div className="space-y-6 text-body text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-h2 font-heading font-bold text-navy mb-4">Last Updated: January 2024</h2>
                <p>
                  ByteLab Infotech ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our virtual internship platform.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Information We Collect</h3>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, phone number, and other contact information</li>
                  <li>Educational background and academic information</li>
                  <li>GitHub username and repository information</li>
                  <li>Payment information (processed securely through Razorpay)</li>
                  <li>Internship preferences and domain selections</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our virtual internship services</li>
                  <li>Process registrations and manage your internship</li>
                  <li>Validate tasks through GitHub API integration</li>
                  <li>Generate and deliver certificates</li>
                  <li>Send important updates and communications</li>
                  <li>Improve our platform and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Data Retention</h3>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required by law.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Your Rights</h3>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Contact Us</h3>
                <p>
                  If you have questions about this Privacy Policy, please contact us at{' '}
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

