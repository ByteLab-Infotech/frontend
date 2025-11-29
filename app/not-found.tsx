'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-heading font-bold text-electric-blue mb-4">404</h1>
            <h2 className="text-4xl font-heading font-bold text-navy mb-4">
              Page Not Found
            </h2>
            <p className="text-body-lg text-gray-600 leading-relaxed mb-8">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button variant="primary" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Link href="/internships">
              <Button variant="outline" className="w-full sm:w-auto">
                <Search className="w-4 h-4 mr-2" />
                Browse Internships
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-slate-grey text-charcoal rounded-lg font-medium hover:bg-[#E8ECF0] transition-colors w-full sm:w-auto min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4 mr-2 inline" />
              Go Back
            </button>
          </div>
          
          <div className="bg-slate-grey rounded-xl p-6 border border-gray-100">
            <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-body text-gray-700">
              <Link href="/" className="hover:text-electric-blue transition-colors">Home</Link>
              <Link href="/internships" className="hover:text-electric-blue transition-colors">Internships</Link>
              <Link href="/blog" className="hover:text-electric-blue transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-electric-blue transition-colors">About</Link>
              <Link href="/contact" className="hover:text-electric-blue transition-colors">Contact</Link>
              <Link href="/faq" className="hover:text-electric-blue transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

