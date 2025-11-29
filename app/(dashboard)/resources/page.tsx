'use client';

import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { BookOpen, Code, FileText, ExternalLink, Download, GitBranch } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', href: '/student' },
    { key: 'resources', label: 'Resources', href: '/dashboard/resources' },
  ];

  const resources = [
    {
      category: 'Tutorials',
      icon: BookOpen,
      items: [
        { title: 'Complete GitHub Submission Guide', type: 'guide', link: '/dashboard/github-guide', isInternal: true },
        { title: 'GitHub Basics for Beginners', type: 'tutorial', link: '#' },
        { title: 'How to Structure Your Repository', type: 'tutorial', link: '#' },
        { title: 'Best Practices for Code Submission', type: 'tutorial', link: '#' },
      ],
    },
    {
      category: 'Documentation',
      icon: FileText,
      items: [
        { title: 'Task Submission Guide', type: 'doc', link: '#' },
        { title: 'Certificate Verification Guide', type: 'doc', link: '#' },
        { title: 'Platform User Manual', type: 'doc', link: '#' },
      ],
    },
    {
      category: 'Sample Repositories',
      icon: Code,
      items: [
        { title: 'Web Development Examples', type: 'repo', link: 'https://github.com/bytelab/web-dev-examples' },
        { title: 'Data Science Templates', type: 'repo', link: 'https://github.com/bytelab/data-science-templates' },
        { title: 'Mobile App Samples', type: 'repo', link: 'https://github.com/bytelab/mobile-samples' },
      ],
    },
  ];

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={sidebarItems} activeKey="resources" />
      <div className="flex-1 p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-navy">Resources</h1>
            <Button variant="outline" onClick={logout}>Logout</Button>
          </div>

          <div className="space-y-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div key={resource.category}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-electric-blue" />
                    </div>
                    <h2 className="text-h2 font-heading font-bold text-navy">
                      {resource.category}
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {resource.items.map((item) => (
                      <Card key={item.title} hover>
                        <div className="flex items-start gap-2 mb-2">
                          {item.type === 'guide' && <GitBranch className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />}
                          <h3 className="text-h3 font-heading font-semibold text-navy">
                            {item.title}
                          </h3>
                        </div>
                        {item.isInternal ? (
                          <Link
                            href={item.link}
                            className="inline-flex items-center gap-2 text-electric-blue hover:underline mt-4"
                          >
                            <BookOpen className="w-4 h-4" />
                            View Guide
                          </Link>
                        ) : (
                          <a
                            href={item.link}
                            target={item.type === 'repo' ? '_blank' : undefined}
                            rel={item.type === 'repo' ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-2 text-electric-blue hover:underline mt-4"
                          >
                            {item.type === 'repo' ? (
                              <>
                                <ExternalLink className="w-4 h-4" />
                                View Repository
                              </>
                            ) : (
                              <>
                                <Download className="w-4 h-4" />
                                Download
                              </>
                            )}
                          </a>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Links */}
          <Card className="mt-8 bg-gradient-to-br from-electric-blue/5 to-transparent border-electric-blue/20">
            <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard/github-guide">
                <Button variant="primary">
                  <GitBranch className="w-4 h-4 mr-2" />
                  GitHub Guide
                </Button>
              </Link>
              <Button variant="outline" onClick={() => router.push('/dashboard/help')}>
                Help Center
              </Button>
              <Button variant="outline" onClick={() => router.push('/faq')}>
                FAQ
              </Button>
              <Button variant="outline" onClick={() => router.push('/blog')}>
                Blog
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

