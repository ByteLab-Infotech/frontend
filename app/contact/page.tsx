import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';

export const metadata = generateMetadata({
  title: 'Contact Us - Get in Touch',
  description: 'Contact ByteLab Infotech for questions about virtual internships, technical support, or partnership opportunities. We\'re here to help you succeed.',
  keywords: ['contact bytelab', 'virtual internship support', 'internship help'],
  canonical: 'https://bytelab.com/contact',
});

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        type="organization"
        data={{
          description: 'ByteLab Infotech - Contact us for virtual internship inquiries and support.',
          socialLinks: [],
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <PageHero
          title="Contact Us"
          description="Have questions about our virtual internship program? We're here to help. Reach out to us through any of the channels below."
        />

        {/* Contact Form Section */}
        <ContentSection className="bg-white">
          <ContactForm />
        </ContentSection>

      {/* Additional Information */}
      <ContentSection title="Frequently Asked Questions" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp" className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Response Time
                </h3>
                <p className="text-body text-gray-600">
                  We typically respond to all inquiries within 24-48 hours during business days.
                  For urgent matters, please mention "URGENT" in your subject line.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Business Hours
                </h3>
                <p className="text-body text-gray-600">
                  Our support team is available Monday through Friday, 9:00 AM to 6:00 PM IST.
                  We monitor emails and respond even outside business hours for critical issues.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Other Ways to Reach Us
                </h3>
                <p className="text-body text-gray-600 mb-3">
                  For technical support related to your internship, please use the support center
                  in your dashboard. For general inquiries, use the contact form above.
                </p>
                <p className="text-body text-gray-600">
                  You can also check our <a href="/faq" className="text-electric-blue hover:underline">FAQ page</a> for
                  answers to common questions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>
      </div>
    </>
  );
}

