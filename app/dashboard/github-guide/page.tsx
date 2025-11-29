'use client';

import React, { useEffect } from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { Button } from '@/components/ui/Button';
import { GitHubSubmissionGuide } from '@/components/dashboard/GitHubSubmissionGuide';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GitHubGuidePage() {
  const router = useRouter();
  const { user } = useAuthStore();

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', href: '/student' },
    { key: 'github-guide', label: 'GitHub Guide', href: '/dashboard/github-guide' },
  ];

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-[#EDEDED]">
      <Sidebar items={sidebarItems} activeKey="github-guide" />
      <div className="flex-1 p-4 md:p-8 w-full md:w-auto overflow-x-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link href="/student">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              GitHub Submission Guide
            </h1>
            <p className="text-body-lg text-gray-600 mt-2">
              Complete documentation for submitting your internship tasks via GitHub
            </p>
          </div>

          <GitHubSubmissionGuide />
        </div>
      </div>
    </div>
  );
}

