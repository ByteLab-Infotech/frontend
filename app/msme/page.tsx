import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { Shield, FileText, CheckCircle2, Building2 } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'MSME Registration - ByteLab Infotech',
  description: 'ByteLab Infotech is an MSME registered company verified by the Government of India. View our MSME certificate and registration details.',
  keywords: ['MSME registered', 'MSME certificate', 'MSME India', 'verified company'],
  canonical: 'https://bytelab.com/msme',
});

export default function MSMEPage() {
  return (
    <>
      <SchemaMarkup
        type="organization"
        data={{
          description: 'ByteLab Infotech is an MSME registered company providing virtual internship programs.',
          socialLinks: [],
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <PageHero
          title="MSME Registration"
          description="ByteLab Infotech is a registered MSME (Micro, Small and Medium Enterprise) company, verified and recognized by the Government of India."
          icon={<Shield className="w-10 h-10 text-electric-blue" />}
        />

        {/* MSME Certificate */}
        <ContentSection title="MSME Certificate" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="slideUp" className="bg-gradient-to-br from-electric-blue/5 to-transparent rounded-2xl p-8 border border-electric-blue/20">
              <div className="flex items-start gap-6 mb-6">
                <FileText className="w-12 h-12 text-electric-blue flex-shrink-0" />
                <div>
                  <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                    MSME Registration Certificate
                  </h3>
                  <p className="text-body-lg text-gray-700 leading-relaxed mb-4">
                    ByteLab Infotech is registered as a Micro, Small and Medium Enterprise
                    under the MSME Act, 2006. Our registration demonstrates our commitment
                    to operating as a legitimate, credible business entity.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-body-sm text-gray-600 mb-2">
                      <strong>Registration Number:</strong> [MSME Registration Number]
                    </p>
                    <p className="text-body-sm text-gray-600 mb-2">
                      <strong>Registration Date:</strong> [Registration Date]
                    </p>
                    <p className="text-body-sm text-gray-600">
                      <strong>Category:</strong> Micro Enterprise
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-body-sm text-gray-600">
                  <strong>Note:</strong> The actual MSME certificate can be provided upon request
                  for verification purposes. Contact us at{' '}
                  <a href="mailto:support@bytelab.com" className="text-electric-blue hover:underline">
                    support@bytelab.com
                  </a>{' '}
                  for a copy of the certificate.
                </p>
              </div>
            </motion.div>
          </div>
        </ContentSection>

        {/* Company Information */}
        <ContentSection title="Company Information" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white rounded-xl p-8 border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-electric-blue" />
                    <h3 className="text-h3 font-heading font-semibold text-navy">
                      Company Details
                    </h3>
                  </div>
                  <div className="space-y-3 text-body text-gray-700">
                    <p><strong>Company Name:</strong> ByteLab Infotech</p>
                    <p><strong>Legal Status:</strong> MSME Registered</p>
                    <p><strong>Industry:</strong> Education Technology</p>
                    <p><strong>Services:</strong> Virtual Internship Programs</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-electric-blue" />
                    <h3 className="text-h3 font-heading font-semibold text-navy">
                      Verification Status
                    </h3>
                  </div>
                  <div className="space-y-3 text-body text-gray-700">
                    <p><strong>MSME Status:</strong> Active</p>
                    <p><strong>Registration:</strong> Verified</p>
                    <p><strong>Compliance:</strong> Current</p>
                    <p><strong>Certificate:</strong> Valid</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Why MSME Matters */}
        <ContentSection title="Why MSME Registration Matters" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="slideUp" className="space-y-6">
              <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Government Recognition
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  MSME registration provides official recognition from the Government of India,
                  ensuring that ByteLab Infotech operates as a legitimate business entity
                  under government regulations.
                </p>
              </div>
              
              <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Credibility & Trust
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Our MSME registration demonstrates our commitment to operating transparently
                  and maintaining the highest standards of business conduct. This builds trust
                  with students, educational institutions, and employers.
                </p>
              </div>
              
              <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Compliance & Standards
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  As an MSME registered company, we adhere to government standards and
                  regulations, ensuring that our operations meet legal requirements and
                  industry best practices.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Verification */}
        <ContentSection title="Verify Our Registration" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="slideUp" className="bg-white rounded-xl p-8 border border-gray-100 text-center">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                Need to Verify Our MSME Registration?
              </h3>
              <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
                Educational institutions, employers, or partners can verify our MSME registration
                through official government portals or by contacting us directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://udyamregistration.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-electric-blue text-white rounded-lg font-medium hover:bg-[#1D72C0] transition-colors"
                >
                  Udyam Registration Portal
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-transparent border-2 border-electric-blue text-electric-blue rounded-lg font-medium hover:bg-electric-blue/5 transition-colors"
                >
                  Contact Us for Certificate
                </a>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>
      </div>
    </>
  );
}

