'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { 
  Shield, 
  CheckCircle2, 
  XCircle, 
  User, 
  Award, 
  Calendar, 
  Clock, 
  FileText,
  Mail,
  Loader2
} from 'lucide-react';
import api from '@/lib/api';

export default function VerifyPageContent() {
  const params = useParams();
  const identifier = params.certificateId as string;
  const [verificationData, setVerificationData] = useState<any>(null);
  const [verificationType, setVerificationType] = useState<'certificate' | 'offer-letter' | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (identifier) {
      const isOfferLetter = identifier.startsWith('offer-');
      api.get(`/verify/${identifier}`)
        .then((res) => {
          const { type, data } = res.data;
          setVerificationType(type);
          setVerificationData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(isOfferLetter ? 'Offer Letter not found' : 'Certificate not found');
          setLoading(false);
        });
    }
  }, [identifier]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-grey to-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-electric-blue animate-spin mx-auto mb-4" />
            <p className="text-body-lg text-gray-600">Verifying certificate...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !verificationData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-grey to-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh] px-6">
          <AnimatedSection variant="fadeIn" className="max-w-md w-full">
            <Card className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="w-10 h-10 text-red-600" />
              </div>
              <h1 className="text-h2 font-heading font-bold text-red-600 mb-4">
                {verificationType === 'offer-letter' ? 'Offer Letter Not Found' : 'Certificate Not Found'}
              </h1>
              <p className="text-body text-gray-600">
                The {verificationType === 'offer-letter' ? 'offer letter' : 'certificate'} you are looking for does not exist or is invalid.
              </p>
            </Card>
          </AnimatedSection>
        </div>
        <Footer />
      </div>
    );
  }

  const isCertificate = verificationType === 'certificate';
  const isValid = isCertificate ? verificationData.valid : true;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-grey to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-grey">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatedSection variant="fadeIn" className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-electric-blue" />
            </div>
            <h1 className="text-hero font-heading font-bold text-navy mb-4">
              {isCertificate ? 'Certificate Verification' : 'Offer Letter Verification'}
            </h1>
            <p className="text-body-lg text-gray-600">
              Verify the authenticity of this {isCertificate ? 'certificate' : 'offer letter'} from ByteLab Infotech
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Verification Details */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection variant="slideUp">
            <Card className="overflow-hidden">
              {/* Status Banner */}
              <div className={`${isValid ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'} text-white p-6`}>
                <div className="flex items-center gap-4">
                  {isValid ? (
                    <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-8 h-8 flex-shrink-0" />
                  )}
                  <div>
                    <h2 className="text-h3 font-heading font-bold mb-1">
                      {isValid ? 'Verified and Authentic' : 'Invalid Certificate'}
                    </h2>
                    <p className="text-body-sm opacity-90">
                      This {isCertificate ? 'certificate' : 'offer letter'} has been verified in our system
                    </p>
                  </div>
                </div>
              </div>

              {/* Student Name - Prominently Displayed */}
              {verificationData.studentName && (
                <div className="bg-gradient-to-br from-electric-blue/5 to-transparent p-8 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-body-sm text-gray-600 mb-1">Certificate Holder</p>
                      <h2 className="text-h2 font-heading font-bold text-navy">
                        {verificationData.studentName}
                      </h2>
                    </div>
                  </div>
                </div>
              )}

              {/* Details Grid */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {isCertificate ? (
                    <>
                      <DetailItem
                        icon={<FileText className="w-5 h-5" />}
                        label="Certificate Number"
                        value={verificationData.certificateNo}
                        highlight
                      />
                      <DetailItem
                        icon={<Award className="w-5 h-5" />}
                        label="Domain"
                        value={verificationData.domain}
                      />
                      <DetailItem
                        icon={<Clock className="w-5 h-5" />}
                        label="Duration"
                        value={`${verificationData.duration} Days`}
                      />
                      <DetailItem
                        icon={<Calendar className="w-5 h-5" />}
                        label="Issue Date"
                        value={new Date(verificationData.issueDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      />
                      <DetailItem
                        icon={<Calendar className="w-5 h-5" />}
                        label="Batch Period"
                        value={`${new Date(verificationData.batchStartDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${new Date(verificationData.batchEndDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
                      />
                      <DetailItem
                        icon={<Shield className="w-5 h-5" />}
                        label="Status"
                        value={
                          <Badge 
                            status={verificationData.valid ? 'approved' : 'rejected'} 
                            animated
                          >
                            {verificationData.valid ? 'Valid' : 'Invalid'}
                          </Badge>
                        }
                      />
                    </>
                  ) : (
                    <>
                      <DetailItem
                        icon={<FileText className="w-5 h-5" />}
                        label="Offer Letter ID"
                        value={verificationData.offerLetterId}
                        highlight
                      />
                      <DetailItem
                        icon={<User className="w-5 h-5" />}
                        label="Student Name"
                        value={verificationData.studentName}
                      />
                      <DetailItem
                        icon={<Mail className="w-5 h-5" />}
                        label="Student Email"
                        value={verificationData.studentEmail}
                      />
                      <DetailItem
                        icon={<Award className="w-5 h-5" />}
                        label="Domain"
                        value={verificationData.domain}
                      />
                      <DetailItem
                        icon={<Clock className="w-5 h-5" />}
                        label="Duration"
                        value={`${verificationData.duration} Days`}
                      />
                      <DetailItem
                        icon={<Calendar className="w-5 h-5" />}
                        label="Issue Date"
                        value={new Date(verificationData.issueDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      />
                      <DetailItem
                        icon={<Calendar className="w-5 h-5" />}
                        label="Batch Period"
                        value={`${new Date(verificationData.batchStartDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${new Date(verificationData.batchEndDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
                      />
                      <DetailItem
                        icon={<Shield className="w-5 h-5" />}
                        label="Status"
                        value={<Badge status="approved" animated>{verificationData.status}</Badge>}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Verification Info */}
              <div className="bg-slate-grey p-6 border-t border-gray-200">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-h4 font-heading font-semibold text-navy mb-2">
                      Verification Information
                    </h3>
                    <p className="text-body-sm text-gray-600 leading-relaxed">
                      This {isCertificate ? 'certificate' : 'offer letter'} has been verified through our secure database. 
                      All information displayed is authentic and can be trusted by employers and educational institutions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}

const DetailItem: React.FC<DetailItemProps> = ({ icon, label, value, highlight = false }) => {
  return (
    <div className={`p-4 rounded-lg border ${highlight ? 'bg-gradient-to-br from-electric-blue/5 to-transparent border-electric-blue/20' : 'bg-white border-gray-200'}`}>
      <div className="flex items-start gap-3">
        <div className={`${highlight ? 'text-electric-blue' : 'text-gray-600'} flex-shrink-0 mt-0.5`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-body-sm text-gray-600 mb-1">{label}</p>
          <div className={`${highlight ? 'text-h4 font-heading font-bold text-navy' : 'text-body font-semibold text-gray-900'}`}>
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

