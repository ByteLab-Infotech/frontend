'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { MessageSquare, Send, Mail, Clock } from 'lucide-react';

export default function SupportPage() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [formData, setFormData] = useState({
    subject: '',
    category: 'technical',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', href: '/student' },
    { key: 'support', label: 'Support', href: '/dashboard/support' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement support ticket API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSuccess(true);
    setFormData({ subject: '', category: 'technical', message: '' });
    setLoading(false);
  };

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={sidebarItems} activeKey="support" />
      <div className="flex-1 p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-navy">Support Center</h1>
            <Button variant="outline" onClick={logout}>Logout</Button>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h3 className="text-h3 font-heading font-semibold text-navy">Submit Ticket</h3>
                  <p className="text-body-sm text-gray-600">Get help from our support team</p>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h3 className="text-h3 font-heading font-semibold text-navy">Email Support</h3>
                  <p className="text-body-sm text-gray-600">support@bytelab.com</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Ticket Form */}
          <Card>
            <h2 className="text-h2 font-heading font-bold text-navy mb-6">Submit Support Ticket</h2>
            
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Your ticket has been submitted successfully! We'll respond within 24-48 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-[#D0D0D0] rounded-lg p-3 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none"
                >
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing Question</option>
                  <option value="task">Task Related</option>
                  <option value="certificate">Certificate Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Input
                label="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                placeholder="Brief description of your issue"
              />

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full border border-[#D0D0D0] rounded-lg p-3 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none"
                  placeholder="Describe your issue in detail..."
                />
              </div>

              <Button type="submit" variant="primary" disabled={loading} className="w-full">
                {loading ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Ticket
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Response Time */}
          <Card className="mt-6 bg-slate-grey">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-electric-blue" />
              <div>
                <p className="text-body font-medium text-navy">Response Time</p>
                <p className="text-body-sm text-gray-600">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

