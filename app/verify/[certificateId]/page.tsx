'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import api from '@/lib/api';

export default function VerifyPage() {
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
      <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !verificationData) {
    return (
      <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center">
        <Card className="max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            {verificationType === 'offer-letter' ? 'Offer Letter Not Found' : 'Certificate Not Found'}
          </h1>
          <p className="text-gray-600">
            The {verificationType === 'offer-letter' ? 'offer letter' : 'certificate'} you are looking for does not exist or is invalid.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDEDED] p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <h1 className="text-3xl font-bold text-[#0A284E] mb-6">
            {verificationType === 'offer-letter' ? 'Offer Letter Verification' : 'Certificate Verification'}
          </h1>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {verificationType === 'certificate' ? (
                <>
                  <div>
                    <p className="text-sm text-gray-600">Certificate Number</p>
                    <p className="font-semibold text-lg">{verificationData.certificateNo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Domain</p>
                    <p className="font-semibold">{verificationData.domain}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{verificationData.duration} Days</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Issue Date</p>
                    <p className="font-semibold">{new Date(verificationData.issueDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Batch Period</p>
                    <p className="font-semibold">
                      {new Date(verificationData.batchStartDate).toLocaleDateString()} - {new Date(verificationData.batchEndDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className={`font-semibold ${verificationData.valid ? 'text-green-600' : 'text-red-600'}`}>
                      {verificationData.valid ? 'Valid' : 'Invalid'}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-sm text-gray-600">Offer Letter ID</p>
                    <p className="font-semibold text-lg">{verificationData.offerLetterId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Student Name</p>
                    <p className="font-semibold">{verificationData.studentName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Student Email</p>
                    <p className="font-semibold">{verificationData.studentEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Domain</p>
                    <p className="font-semibold">{verificationData.domain}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{verificationData.duration} Days</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Issue Date</p>
                    <p className="font-semibold">{new Date(verificationData.issueDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Batch Period</p>
                    <p className="font-semibold">
                      {new Date(verificationData.batchStartDate).toLocaleDateString()} - {new Date(verificationData.batchEndDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-semibold text-green-600">{verificationData.status}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-green-800 font-semibold">
              ✓ This {verificationType === 'offer-letter' ? 'offer letter' : 'certificate'} is verified and authentic.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

