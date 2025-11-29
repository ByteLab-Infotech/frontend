'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-5xl font-heading font-bold text-navy mb-4">
              Something Went Wrong
            </h1>
            <p className="text-body-lg text-gray-600 leading-relaxed mb-4">
              We encountered an unexpected error. Our team has been notified and is working on a fix.
            </p>
            {error.digest && (
              <p className="text-body-sm text-gray-500 mb-4">
                Error ID: {error.digest}
              </p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="primary" 
              onClick={reset}
              className="w-full sm:w-auto"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
          </div>
          
          <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
            <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
              Need Help?
            </h3>
            <p className="text-body text-gray-700 mb-4">
              If this problem persists, please contact our support team.
            </p>
            <Link href="/contact" className="text-electric-blue hover:underline font-medium">
              Contact Support →
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

