'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Internships', href: '/internships' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'Blog', href: '/blog' },
        { name: 'Verification', href: '/verification' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { name: 'Campus Ambassador', href: '/campus-ambassador' },
        { name: 'Referral Program', href: '/referral-program' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'MSME', href: '/msme' },
        { name: 'Accreditation', href: '/accreditation' },
        { name: 'Technology', href: '/technology' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/policies/privacy' },
        { name: 'Terms & Conditions', href: '/policies/terms' },
        { name: 'Refund Policy', href: '/policies/refund' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/bytelab', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/bytelab', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/bytelab', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-navy to-[#081A2E] text-white border-t border-[#1a3a5e]">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <Logo 
                variant="full" 
                size="md" 
                href="/"
                className="h-10"
                invert={true}
              />
            </div>
            <p className="text-sky-blue/90 mb-6 leading-relaxed text-body-sm">
              MSME verified virtual internship platform. Build real-world skills with GitHub-based projects 
              and earn verified certificates recognized by employers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sky-blue/90 text-body-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:support@bytelab.com" className="hover:text-white transition-colors">
                  support@bytelab.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sky-blue/90 text-body-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 1234567890
                </a>
              </div>
              <div className="flex items-center gap-2 text-sky-blue/90 text-body-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>MSME Registered Office, India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-[#1a3a5e] rounded-lg flex items-center justify-center hover:bg-electric-blue transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-lg text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sky-blue/90 hover:text-white transition-colors text-body-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a3a5e]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sky-blue/80 text-body-sm text-center md:text-left">
              &copy; {currentYear} ByteLab Infotech. All rights reserved. MSME Registered Company.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-body-sm">
              <Link href="/policies/privacy" className="text-sky-blue/80 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/policies/terms" className="text-sky-blue/80 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/policies/refund" className="text-sky-blue/80 hover:text-white transition-colors">
                Refund
              </Link>
              <Link href="/msme" className="text-sky-blue/80 hover:text-white transition-colors">
                MSME Verified
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
