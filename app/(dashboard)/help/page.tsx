'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { ContentSection } from '@/components/content/ContentSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { HelpCircle, BookOpen, Video, FileText, Search, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', href: '/student' },
    { key: 'help', label: 'Help Center', href: '/dashboard/help' },
  ];

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        { title: 'Complete GitHub Submission Guide', slug: 'github-guide', isLink: true, href: '/dashboard/github-guide' },
        { title: 'How to Submit GitHub Tasks', slug: 'submit-github' },
        { title: 'Understanding Task Requirements', slug: 'task-requirements' },
        { title: 'Setting Up Your GitHub Account', slug: 'github-setup' },
      ],
    },
    {
      title: 'Task Management',
      icon: FileText,
      articles: [
        { title: 'How Tasks Work', slug: 'how-tasks-work' },
        { title: 'Task Validation Process', slug: 'task-validation' },
        { title: 'Resubmitting Rejected Tasks', slug: 'resubmit-tasks' },
      ],
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      articles: [
        { title: 'Complete Dashboard Walkthrough', slug: 'dashboard-walkthrough' },
        { title: 'GitHub Submission Tutorial', slug: 'github-tutorial' },
        { title: 'Certificate Download Guide', slug: 'certificate-guide' },
      ],
    },
  ];

  const stepByStepGuides = [
    {
      title: 'How to Submit GitHub Tasks',
      steps: [
        'Complete your task according to the requirements',
        'Create a new GitHub repository for the task',
        'Push your code to the repository',
        'Copy the repository URL',
        'Paste the URL in the submission form on your dashboard',
        'Click "Submit" and wait for validation',
      ],
    },
    {
      title: 'Understanding Task Requirements',
      steps: [
        'Read the task description carefully',
        'Check the requirements list',
        'Review the expected output',
        'Ensure your code meets all criteria',
        'Test your solution before submission',
      ],
    },
  ];

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={sidebarItems} activeKey="help" />
      <div className="flex-1 p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-navy">Help Center</h1>
            <Button variant="outline" onClick={logout}>Logout</Button>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-none outline-none text-body"
              />
            </div>
          </Card>

          {/* Help Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} hover>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-electric-blue" />
                    </div>
                    <h3 className="text-h3 font-heading font-semibold text-navy">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article.slug}>
                        {article.isLink ? (
                          <Link
                            href={article.href}
                            className="text-body text-gray-700 hover:text-electric-blue transition-colors flex items-center gap-2"
                          >
                            {article.title}
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        ) : (
                          <a
                            href={`#${article.slug}`}
                            className="text-body text-gray-700 hover:text-electric-blue transition-colors"
                          >
                            {article.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* GitHub Guide Card */}
          <Card className="mb-8 bg-gradient-to-br from-electric-blue/5 to-transparent border-electric-blue/20">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-h2 font-heading font-bold text-navy mb-2">
                  Complete GitHub Submission Guide
                </h3>
                <p className="text-body text-gray-700 mb-4">
                  Comprehensive step-by-step guide covering everything you need to know about submitting your tasks via GitHub, including folder structure, Git commands, validation requirements, and troubleshooting.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/dashboard/github-guide">
                    <Button variant="primary">
                      <BookOpen className="w-4 h-4 mr-2" />
                      View Full Guide
                    </Button>
                  </Link>
                  <Link href="/dashboard/github-guide" target="_blank">
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open in New Tab
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Step-by-Step Guides */}
          <ContentSection title="Step-by-Step Guides" className="bg-white">
            <div className="space-y-8">
              {stepByStepGuides.map((guide) => (
                <Card key={guide.title}>
                  <h3 className="text-h3 font-heading font-semibold text-navy mb-6">
                    {guide.title}
                  </h3>
                  <ol className="space-y-3">
                    {guide.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-8 h-8 bg-electric-blue text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-body text-gray-700 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              ))}
            </div>
          </ContentSection>

          {/* Contact Support */}
          <Card className="mt-8 bg-gradient-to-br from-electric-blue/5 to-transparent border-electric-blue/20">
            <div className="text-center">
              <HelpCircle className="w-12 h-12 text-electric-blue mx-auto mb-4" />
              <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                Still Need Help?
              </h3>
              <p className="text-body text-gray-700 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="primary" onClick={() => router.push('/dashboard/support')}>
                  Contact Support
                </Button>
                <Button variant="outline" onClick={() => router.push('/faq')}>
                  View FAQ
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

