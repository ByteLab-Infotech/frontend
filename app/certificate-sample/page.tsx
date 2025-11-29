import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Award, QrCode, Shield, CheckCircle2 } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Certificate Sample - View Sample Certificate',
  description: 'View a sample ByteLab Infotech certificate. See QR code verification, security features, and certificate design.',
  keywords: ['certificate sample', 'sample certificate', 'certificate design'],
  canonical: 'https://bytelab.com/certificate-sample',
});

export default function CertificateSamplePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero
        title="Certificate Sample"
        description="View a sample of the official ByteLab Infotech certificate with QR code verification and security features."
        icon={<Award className="w-10 h-10 text-electric-blue" />}
      />

      {/* Sample Certificate */}
      <ContentSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp">
            <Card className="p-8 md:p-12 border-2 border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-navy mb-2">ByteLab Infotech</h2>
                <p className="text-body text-gray-600">MSME Registered Company</p>
              </div>
              
              <div className="border-t-2 border-b-2 border-navy py-8 mb-8">
                <h3 className="text-4xl font-heading font-bold text-navy mb-6 text-center">
                  CERTIFICATE OF COMPLETION
                </h3>
                <p className="text-body-lg text-gray-700 text-center mb-6">
                  This is to certify that
                </p>
                <p className="text-3xl font-heading font-bold text-electric-blue text-center mb-6">
                  [Student Name]
                </p>
                <p className="text-body-lg text-gray-700 text-center mb-4">
                  has successfully completed the Virtual Internship Program in
                </p>
                <p className="text-2xl font-heading font-semibold text-navy text-center mb-6">
                  [Domain Name]
                </p>
                <p className="text-body text-gray-700 text-center">
                  Duration: [Duration] Days | Completed on: [Date]
                </p>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="text-center">
                  <div className="w-32 h-32 bg-slate-grey rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <QrCode className="w-16 h-16 text-gray-400" />
                  </div>
                  <p className="text-body-sm text-gray-600">Scan to Verify</p>
                  <p className="text-body-sm text-gray-500 mt-2">Certificate ID: BL-2024-XXXXX</p>
                </div>
                <div className="text-center">
                  <p className="text-body-sm text-gray-600 mb-2">ByteLab Infotech</p>
                  <div className="w-24 h-24 bg-slate-grey rounded-lg mx-auto"></div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Security Features */}
      <ContentSection title="Security Features" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: QrCode, title: 'QR Code Verification', desc: 'Unique QR code for instant verification' },
                { icon: Shield, title: 'Unique Certificate ID', desc: 'Tamper-proof certificate identifier' },
                { icon: CheckCircle2, title: 'Database Verification', desc: 'Verified through our secure database' },
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                    <div className="w-14 h-14 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-electric-blue" />
                    </div>
                    <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-body text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Verification Info */}
      <ContentSection title="How to Verify" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp">
            <div className="bg-slate-grey rounded-xl p-8 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                Verify This Certificate
              </h3>
              <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
                Employers and institutions can verify certificates instantly using:
              </p>
              <ul className="space-y-3 text-body text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <span>QR code scanner on the certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <span>Certificate ID through our verification portal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <span>Visit <a href="/verification" className="text-electric-blue hover:underline">/verification</a> for instant verification</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
}

