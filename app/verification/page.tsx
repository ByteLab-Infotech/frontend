import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { AnimatedGrid } from '@/components/sections/AnimatedGrid';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { QrCode, CheckCircle2, XCircle, Search, Shield } from 'lucide-react';
import { Suspense } from 'react';

export const metadata = generateMetadata({
  title: 'Certificate Verification - Verify Your Certificate',
  description: 'Verify ByteLab Infotech certificates instantly using QR code or certificate ID. Public verification portal for employers and institutions.',
  keywords: ['certificate verification', 'verify certificate', 'QR code verification', 'certificate validation'],
  canonical: 'https://bytelab.com/verification',
});

function VerificationForm() {
  return (
    <Card className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <QrCode className="w-10 h-10 text-electric-blue" />
        </div>
        <h2 className="text-h2 font-heading font-bold text-navy mb-4">
          Verify Certificate
        </h2>
        <p className="text-body text-gray-600">
          Enter the certificate ID or scan the QR code to verify authenticity
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <Input
            label="Certificate ID"
            placeholder="Enter certificate ID (e.g., BL-2024-XXXXX)"
            type="text"
          />
        </div>
        
        <div className="text-center">
          <p className="text-body-sm text-gray-600 mb-4">OR</p>
          <Button variant="outline" className="w-full">
            <QrCode className="w-5 h-5 mr-2" />
            Scan QR Code
          </Button>
        </div>
        
        <Button variant="primary" className="w-full">
          <Search className="w-5 h-5 mr-2" />
          Verify Certificate
        </Button>
      </div>
      
      <div className="mt-8 p-4 bg-slate-grey rounded-lg">
        <p className="text-body-sm text-gray-600">
          <strong>Note:</strong> Certificate verification is instant and free. This service is available
          to employers, educational institutions, and certificate holders.
        </p>
      </div>
    </Card>
  );
}

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <PageHero
        title="Certificate Verification Portal"
        description="Verify the authenticity of ByteLab Infotech certificates instantly. Employers and institutions can validate certificates using QR codes or certificate IDs."
        icon={<Shield className="w-10 h-10 text-electric-blue" />}
      />

      {/* Verification Form */}
      <ContentSection className="bg-white">
        <Suspense fallback={<div>Loading...</div>}>
          <VerificationForm />
        </Suspense>
      </ContentSection>

      {/* How It Works */}
      <ContentSection title="How Verification Works" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <AnimatedGrid className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                Scan QR Code
              </h3>
              <p className="text-body text-gray-600">
                Use your phone camera to scan the QR code on the certificate
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                Enter Certificate ID
              </h3>
              <p className="text-body text-gray-600">
                Type the unique certificate ID found on the certificate
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                Instant Verification
              </h3>
              <p className="text-body text-gray-600">
                Get immediate confirmation of certificate authenticity
              </p>
            </div>
          </AnimatedGrid>
        </div>
      </ContentSection>

      {/* Security Features */}
      <ContentSection title="Security Features" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp" className="space-y-4">
            <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                QR Code Technology
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                Each certificate includes a unique QR code that links directly to our verification database.
                This ensures instant and tamper-proof verification.
              </p>
            </div>
            
            <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                Unique Certificate IDs
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                Every certificate has a unique identifier that can be verified through our public portal.
                This provides an additional layer of security and authenticity.
              </p>
            </div>
            
            <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                Database Verification
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                All certificates are stored in our secure database. Verification checks against this
                database to confirm authenticity and prevent fraud.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* For Employers */}
      <ContentSection title="For Employers & Institutions" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp" className="bg-white rounded-xl p-8 border border-gray-100">
            <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
              Verify Candidate Certificates
            </h3>
            <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
              As an employer or educational institution, you can instantly verify certificates
              presented by candidates or students. This helps ensure authenticity and builds trust.
            </p>
            <ul className="space-y-3 text-body text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                <span>Instant verification results</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                <span>Certificate details and issue date</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                <span>Domain and duration information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                <span>MSME verified platform</span>
              </li>
            </ul>
            <p className="text-body text-gray-600">
              For bulk verification or API access, please{' '}
              <a href="/contact" className="text-electric-blue hover:underline">contact us</a>.
            </p>
          </AnimatedSection>
        </div>
      </ContentSection>
    </div>
  );
}

