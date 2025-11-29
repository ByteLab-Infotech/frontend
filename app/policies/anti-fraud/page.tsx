import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { ShieldAlert } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Anti-Fraud Statement - ByteLab Infotech',
  description: 'ByteLab Infotech\'s commitment to preventing fraud and maintaining platform integrity. Learn about our anti-fraud measures.',
  keywords: ['anti-fraud', 'fraud prevention', 'security measures'],
  canonical: 'https://bytelab.com/policies/anti-fraud',
});

export default function AntiFraudPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero
        title="Anti-Fraud Statement"
        description="Our commitment to preventing fraud and maintaining the integrity of our virtual internship platform."
        icon={<ShieldAlert className="w-10 h-10 text-electric-blue" />}
      />

      <ContentSection className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <AnimatedSection variant="slideUp">
            <div className="space-y-6 text-body text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-h2 font-heading font-bold text-navy mb-4">Last Updated: January 2024</h2>
                <p>
                  ByteLab Infotech is committed to maintaining the highest standards of integrity and 
                  preventing fraudulent activity on our platform. This statement outlines our anti-fraud 
                  measures and policies.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Fraud Prevention Measures</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Automated GitHub validation to ensure original work</li>
                  <li>Unique certificate IDs and QR codes to prevent duplication</li>
                  <li>Secure payment processing through Razorpay</li>
                  <li>Account verification and monitoring</li>
                  <li>Regular audits and security checks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Prohibited Activities</h3>
                <p>The following activities are strictly prohibited:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Submitting plagiarized or copied code</li>
                  <li>Using someone else's GitHub account or work</li>
                  <li>Creating fake certificates or documents</li>
                  <li>Attempting to bypass validation systems</li>
                  <li>Multiple account creation to abuse the system</li>
                  <li>Payment fraud or chargeback abuse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Consequences of Fraud</h3>
                <p>Violations of our anti-fraud policy may result in:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Immediate account suspension or termination</li>
                  <li>Revocation of certificates</li>
                  <li>Legal action where applicable</li>
                  <li>Reporting to relevant authorities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Reporting Fraud</h3>
                <p>
                  If you suspect fraudulent activity, please report it immediately to{' '}
                  <a href="mailto:security@bytelab.com" className="text-electric-blue hover:underline">
                    security@bytelab.com
                  </a>
                  . All reports are taken seriously and investigated promptly.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Our Commitment</h3>
                <p>
                  We continuously work to improve our fraud detection and prevention systems to ensure 
                  a fair and secure platform for all users.
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

