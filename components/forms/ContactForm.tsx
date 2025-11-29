'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import api from '@/lib/api';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // TODO: Implement contact form API endpoint
      // await api.post('/contact', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@bytelab.com',
      link: 'mailto:support@bytelab.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 1234567890',
      link: 'tel:+911234567890',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'MSME Registered Office, India',
      link: null,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-h3 font-heading font-semibold text-navy mb-6">
          Get in Touch
        </h3>
        <p className="text-body text-gray-600 mb-8 leading-relaxed">
          Have questions about our virtual internship program? We're here to help.
          Reach out to us through any of the channels below.
        </p>
        
        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-body-lg font-medium text-navy hover:text-electric-blue transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-body-lg font-medium text-navy">{info.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <Card>
        <h3 className="text-h3 font-heading font-semibold text-navy mb-6">
          Send us a Message
        </h3>
        
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
          >
            Thank you! Your message has been sent. We'll get back to you soon.
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Your full name"
          />
          
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="your.email@example.com"
          />
          
          <Input
            label="Phone (Optional)"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 1234567890"
          />
          
          <Input
            label="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            placeholder="What is this regarding?"
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
              className="w-full border border-[#D0D0D0] rounded-lg p-3 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all duration-200"
              placeholder="Tell us more about your inquiry..."
            />
          </div>
          
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              'Sending...'
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

