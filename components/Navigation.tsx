'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { domainNameToSlug } from '@/lib/domainIcons';

interface Domain {
  id: number;
  name: string;
  description: string;
  durations: number[];
  certificatePrice: number;
}

// Hardcoded domains for navigation
const hardcodedDomains: Domain[] = [
  { id: 1, name: 'Web Development', description: '', durations: [30, 45, 90], certificatePrice: 499.00 },
  { id: 2, name: 'Data Science', description: '', durations: [30, 45, 90], certificatePrice: 599.00 },
  { id: 3, name: 'Mobile Development', description: '', durations: [30, 45, 90], certificatePrice: 549.00 },
  { id: 4, name: 'Cloud Computing', description: '', durations: [30, 45, 90], certificatePrice: 649.00 },
  { id: 5, name: 'Cybersecurity', description: '', durations: [30, 45, 90], certificatePrice: 699.00 },
  { id: 6, name: 'Frontend Developer', description: '', durations: [30, 45, 90], certificatePrice: 499.00 },
  { id: 7, name: 'Backend Developer', description: '', durations: [30, 45, 90], certificatePrice: 549.00 },
  { id: 8, name: 'Full Stack Developer', description: '', durations: [30, 45, 90], certificatePrice: 599.00 },
  { id: 9, name: 'App Developer', description: '', durations: [30, 45, 90], certificatePrice: 549.00 },
  { id: 10, name: 'Python Programming', description: '', durations: [30, 45, 90], certificatePrice: 499.00 },
  { id: 11, name: 'Java Programming', description: '', durations: [30, 45, 90], certificatePrice: 549.00 },
  { id: 12, name: 'C++ Programming', description: '', durations: [30, 45, 90], certificatePrice: 499.00 },
  { id: 13, name: 'C Programming', description: '', durations: [30, 45, 90], certificatePrice: 449.00 },
  { id: 14, name: 'DevOps', description: '', durations: [30, 45, 90], certificatePrice: 649.00 },
  { id: 15, name: 'AI', description: '', durations: [30, 45, 90], certificatePrice: 699.00 },
  { id: 16, name: 'Data Analytics', description: '', durations: [30, 45, 90], certificatePrice: 549.00 },
  { id: 17, name: 'Bioinformatics', description: '', durations: [30, 45, 90], certificatePrice: 599.00 },
  { id: 18, name: 'Digital Marketing', description: '', durations: [30, 45, 90], certificatePrice: 449.00 },
  { id: 19, name: 'Business Strategy', description: '', durations: [30, 45, 90], certificatePrice: 499.00 },
  { id: 20, name: 'Finance & Investment', description: '', durations: [30, 45, 90], certificatePrice: 549.00 },
  { id: 21, name: 'HR', description: '', durations: [30, 45, 90], certificatePrice: 449.00 },
  { id: 22, name: 'Stock Market Trading', description: '', durations: [30, 45, 90], certificatePrice: 499.00 },
  { id: 23, name: 'Content Writing', description: '', durations: [30, 45, 90], certificatePrice: 399.00 },
  { id: 24, name: 'UI/UX', description: '', durations: [30, 45, 90], certificatePrice: 549.00 },
  { id: 25, name: 'Graphics Automation', description: '', durations: [30, 45, 90], certificatePrice: 499.00 },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [domains] = useState<Domain[]>(hardcodedDomains);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Categorize domains
  const categorizedDomains = React.useMemo(() => {
    const categories: Record<string, Domain[]> = {
      'Development': [],
      'Programming': [],
      'Data & AI': [],
      'Business': [],
      'Design & Creative': [],
      'Other': [],
    };

    domains.forEach(domain => {
      const name = domain.name.toLowerCase();
      if (name.includes('developer') || name.includes('development') || name.includes('stack') || name.includes('app')) {
        categories['Development'].push(domain);
      } else if (name.includes('programming') || name.includes('python') || name.includes('java') || name.includes('c++') || name.includes(' c ')) {
        categories['Programming'].push(domain);
      } else if (name.includes('data') || name.includes('ai') || name.includes('analytics') || name.includes('bioinformatics')) {
        categories['Data & AI'].push(domain);
      } else if (name.includes('marketing') || name.includes('business') || name.includes('finance') || name.includes('hr') || name.includes('trading') || name.includes('strategy')) {
        categories['Business'].push(domain);
      } else if (name.includes('ui') || name.includes('ux') || name.includes('graphics') || name.includes('content')) {
        categories['Design & Creative'].push(domain);
      } else {
        categories['Other'].push(domain);
      }
    });

    return categories;
  }, [domains]);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Internships', 
      href: '/internships',
      hasSubmenu: true,
    },
    { name: 'Blog', href: '/blog' },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ]
    },
  ];
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Logo 
            variant="full" 
            size="md" 
            href="/"
            className="h-12"
          />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group dropdown-container">
                {item.hasSubmenu && item.name === 'Internships' ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      className="flex items-center gap-1 text-body text-gray-700 hover:text-electric-blue transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          onMouseLeave={() => setOpenDropdown(null)}
                          className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-elevated border border-gray-100 p-4"
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <Link
                              href="/internships"
                              className="col-span-2 px-4 py-2 text-body font-semibold text-electric-blue hover:bg-slate-grey rounded-lg transition-colors border-b border-gray-100 pb-3 mb-2"
                              onClick={() => setOpenDropdown(null)}
                            >
                              View All Domains →
                            </Link>
                            {Object.entries(categorizedDomains).map(([category, categoryDomains]) => {
                              if (categoryDomains.length === 0) return null;
                              return (
                                <div key={category} className="space-y-1">
                                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-1">
                                    {category}
                                  </h4>
                                  {categoryDomains.slice(0, 5).map((domain) => (
                                    <Link
                                      key={domain.id}
                                      href={`/internships/${domainNameToSlug(domain.name)}`}
                                      className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-slate-grey hover:text-electric-blue rounded transition-colors"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {domain.name}
                                    </Link>
                                  ))}
                                  {categoryDomains.length > 5 && (
                                    <Link
                                      href="/internships"
                                      className="block px-2 py-1.5 text-xs text-electric-blue hover:underline"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      +{categoryDomains.length - 5} more
                                    </Link>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center gap-1 text-body text-gray-700 hover:text-electric-blue transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-elevated border border-gray-100 py-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-body text-gray-700 hover:bg-slate-grey hover:text-electric-blue transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-body text-gray-700 hover:text-electric-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/verification" className="text-body text-gray-700 hover:text-electric-blue transition-colors">
              Verify
            </Link>
            <Link href="/login">
              <Button variant="outline" className="text-sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" className="text-sm">
                Get Started
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasSubmenu && item.name === 'Internships' ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(`mobile-${item.name}`)}
                        className="flex items-center justify-between w-full text-body text-gray-700 py-2"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === `mobile-${item.name}` ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === `mobile-${item.name}` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-3"
                          >
                            <Link
                              href="/internships"
                              className="block text-body-sm font-semibold text-electric-blue py-2 border-b border-gray-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Domains
                            </Link>
                            {Object.entries(categorizedDomains).map(([category, categoryDomains]) => {
                              if (categoryDomains.length === 0) return null;
                              return (
                                <div key={category} className="space-y-1">
                                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide py-1">
                                    {category}
                                  </h4>
                                  {categoryDomains.map((domain) => (
                                    <Link
                                      key={domain.id}
                                      href={`/internships/${domainNameToSlug(domain.name)}`}
                                      className="block text-body-sm text-gray-600 py-1.5 pl-2"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {domain.name}
                                    </Link>
                                  ))}
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.submenu ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(`mobile-${item.name}`)}
                        className="flex items-center justify-between w-full text-body text-gray-700 py-2"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === `mobile-${item.name}` ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === `mobile-${item.name}` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-body-sm text-gray-600 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-body text-gray-700 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/verification"
                className="block text-body text-gray-700 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Verify
              </Link>
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <Link href="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full text-sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
