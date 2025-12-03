'use client';

import React, { useState, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { DomainsGrid } from '@/components/sections/DomainsGrid';
import { AnimatedGrid } from '@/components/sections/AnimatedGrid';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, Filter, X, ArrowUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

interface Domain {
  id: number;
  name: string;
  description: string;
  durations: number[];
  certificatePrice: number;
}

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';
type CategoryFilter = 'all' | 'development' | 'programming' | 'data' | 'business' | 'design' | 'other';

// Hardcoded domains data
const hardcodedDomains: Domain[] = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Master the art of building dynamic, responsive, and scalable web applications using modern technologies. This comprehensive program covers frontend frameworks, backend development, database management, and deployment strategies. Gain hands-on experience with industry-standard tools and practices to create professional web solutions that meet enterprise-level requirements.',
    durations: [30, 45, 90],
    certificatePrice: 499.00,
  },
  {
    id: 2,
    name: 'Data Science',
    description: 'Transform raw data into actionable business insights through advanced analytics, machine learning, and statistical modeling. This program encompasses data collection, cleaning, analysis, visualization, and predictive modeling. Develop expertise in Python, R, SQL, and specialized ML frameworks to drive data-driven decision-making in corporate environments.',
    durations: [30, 45, 90],
    certificatePrice: 599.00,
  },
  {
    id: 3,
    name: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications for iOS and Android platforms. Learn to create user-friendly, performant mobile apps using modern frameworks and development tools. Master app architecture, UI/UX design principles, API integration, and app store deployment processes to deliver professional mobile solutions.',
    durations: [30, 45, 90],
    certificatePrice: 549.00,
  },
  {
    id: 4,
    name: 'Cloud Computing',
    description: 'Master cloud infrastructure, services, and deployment strategies on leading platforms like AWS, Azure, and GCP. Learn to design scalable, secure, and cost-effective cloud solutions. Gain expertise in containerization, serverless computing, DevOps practices, and cloud architecture patterns for enterprise-grade applications.',
    durations: [30, 45, 90],
    certificatePrice: 649.00,
  },
  {
    id: 5,
    name: 'Cybersecurity',
    description: 'Protect digital assets and infrastructure from evolving cyber threats through comprehensive security practices. Learn vulnerability assessment, penetration testing, security architecture, incident response, and compliance frameworks. Develop skills to safeguard organizations against cyberattacks and ensure regulatory compliance.',
    durations: [30, 45, 90],
    certificatePrice: 699.00,
  },
  {
    id: 6,
    name: 'Frontend Developer',
    description: 'Specialize in creating engaging, responsive user interfaces using modern frontend technologies. Master HTML5, CSS3, JavaScript, React, Vue, and Angular to build interactive web applications. Learn state management, component architecture, performance optimization, and accessibility standards to deliver exceptional user experiences.',
    durations: [30, 45, 90],
    certificatePrice: 499.00,
  },
  {
    id: 7,
    name: 'Backend Developer',
    description: 'Build robust, scalable server-side applications and APIs that power modern web and mobile platforms. Master server technologies, database design, API development, authentication, and system architecture. Learn to optimize performance, ensure security, and implement best practices for enterprise-level backend systems.',
    durations: [30, 45, 90],
    certificatePrice: 549.00,
  },
  {
    id: 8,
    name: 'Full Stack Developer',
    description: 'Become proficient in both frontend and backend development to build complete, end-to-end web applications. Master the full software development lifecycle from UI design to database management, API development, and deployment. Gain comprehensive skills to work independently or lead development teams on full-stack projects.',
    durations: [30, 45, 90],
    certificatePrice: 599.00,
  },
  {
    id: 9,
    name: 'App Developer',
    description: 'Develop native and cross-platform mobile applications for iOS, Android, and hybrid platforms. Learn mobile app architecture, UI/UX design, API integration, push notifications, and app store optimization. Master frameworks like React Native, Flutter, or native development to create professional mobile applications.',
    durations: [30, 45, 90],
    certificatePrice: 549.00,
  },
  {
    id: 10,
    name: 'Python Programming',
    description: 'Master Python, one of the most versatile and in-demand programming languages. Learn syntax, data structures, object-oriented programming, web development with Django/Flask, data analysis, automation, and API development. Build real-world applications and develop expertise in Python\'s extensive ecosystem for various industry applications.',
    durations: [30, 45, 90],
    certificatePrice: 499.00,
  },
  {
    id: 11,
    name: 'Java Programming',
    description: 'Develop enterprise-grade applications using Java, the cornerstone of enterprise software development. Master core Java concepts, object-oriented programming, collections, multithreading, Spring framework, and microservices architecture. Learn to build scalable, maintainable applications following industry best practices and design patterns.',
    durations: [30, 45, 90],
    certificatePrice: 549.00,
  },
  {
    id: 12,
    name: 'C++ Programming',
    description: 'Master C++ for high-performance system programming, game development, and resource-intensive applications. Learn memory management, object-oriented programming, templates, STL, multithreading, and performance optimization. Develop skills to build efficient, low-level applications and understand computer systems at a fundamental level.',
    durations: [30, 45, 90],
    certificatePrice: 499.00,
  },
  {
    id: 13,
    name: 'C Programming',
    description: 'Learn the fundamentals of programming with C, the foundation of modern computing. Master memory management, pointers, data structures, algorithms, and system programming. Understand how software interacts with hardware and develop skills essential for embedded systems, operating systems, and performance-critical applications.',
    durations: [30, 45, 90],
    certificatePrice: 449.00,
  },
  {
    id: 14,
    name: 'DevOps',
    description: 'Bridge the gap between development and operations through automation, continuous integration, and infrastructure as code. Master containerization with Docker, orchestration with Kubernetes, CI/CD pipelines, cloud infrastructure, monitoring, and deployment strategies. Learn to streamline software delivery and improve system reliability.',
    durations: [30, 45, 90],
    certificatePrice: 649.00,
  },
  {
    id: 15,
    name: 'AI',
    description: 'Explore artificial intelligence and machine learning to build intelligent systems that learn and adapt. Master neural networks, deep learning, natural language processing, computer vision, and reinforcement learning. Learn to implement AI solutions using TensorFlow, PyTorch, and other cutting-edge frameworks for real-world applications.',
    durations: [30, 45, 90],
    certificatePrice: 699.00,
  },
  {
    id: 16,
    name: 'Data Analytics',
    description: 'Transform business data into strategic insights through statistical analysis, data visualization, and business intelligence. Learn to collect, process, and analyze data using tools like Excel, SQL, Python, Tableau, and Power BI. Develop skills to create dashboards, reports, and recommendations that drive data-informed business decisions.',
    durations: [30, 45, 90],
    certificatePrice: 549.00,
  },
  {
    id: 17,
    name: 'Bioinformatics',
    description: 'Combine biology, computer science, and data analysis to solve complex biological problems. Learn to process genomic data, perform sequence analysis, build biological databases, and develop computational tools for life sciences research. Master Python, R, and specialized bioinformatics tools to contribute to medical and pharmaceutical innovations.',
    durations: [30, 45, 90],
    certificatePrice: 599.00,
  },
  {
    id: 18,
    name: 'Digital Marketing',
    description: 'Master the art of promoting products and services through digital channels. Learn SEO, SEM, social media marketing, content marketing, email campaigns, analytics, and conversion optimization. Develop skills to create effective marketing strategies, manage campaigns, and measure ROI in the digital landscape.',
    durations: [30, 45, 90],
    certificatePrice: 449.00,
  },
  {
    id: 19,
    name: 'Business Strategy',
    description: 'Develop strategic thinking and business acumen to drive organizational growth and competitive advantage. Learn market analysis, competitive positioning, business model design, strategic planning, and execution frameworks. Master tools and methodologies used by top consulting firms and corporate strategy teams.',
    durations: [30, 45, 90],
    certificatePrice: 499.00,
  },
  {
    id: 20,
    name: 'Finance & Investment',
    description: 'Gain expertise in financial analysis, investment strategies, portfolio management, and risk assessment. Learn financial modeling, valuation techniques, market analysis, and regulatory frameworks. Develop skills to make informed investment decisions and understand corporate finance principles for career advancement in finance.',
    durations: [30, 45, 90],
    certificatePrice: 549.00,
  },
  {
    id: 21,
    name: 'HR',
    description: 'Master human resources management, talent acquisition, employee relations, performance management, and organizational development. Learn HR analytics, compensation strategies, labor laws, and modern HR technologies. Develop skills to attract, retain, and develop talent while aligning HR strategies with business objectives.',
    durations: [30, 45, 90],
    certificatePrice: 449.00,
  },
  {
    id: 22,
    name: 'Stock Market Trading',
    description: 'Learn technical and fundamental analysis, trading strategies, risk management, and market psychology. Master chart analysis, indicators, portfolio management, and algorithmic trading concepts. Develop skills to analyze markets, execute trades, and manage investment portfolios in various market conditions.',
    durations: [30, 45, 90],
    certificatePrice: 499.00,
  },
  {
    id: 23,
    name: 'Content Writing',
    description: 'Develop professional writing skills for digital platforms, marketing, and communication. Learn SEO writing, copywriting, content strategy, storytelling, and brand voice development. Master techniques to create engaging content that drives engagement, conversions, and brand awareness across various media channels.',
    durations: [30, 45, 90],
    certificatePrice: 399.00,
  },
  {
    id: 24,
    name: 'UI/UX',
    description: 'Design intuitive, user-centered digital experiences through user research, wireframing, prototyping, and usability testing. Master design principles, interaction design, information architecture, and design tools like Figma and Adobe XD. Learn to create interfaces that are both beautiful and functional, enhancing user satisfaction and business outcomes.',
    durations: [30, 45, 90],
    certificatePrice: 549.00,
  },
  {
    id: 25,
    name: 'Graphics Automation',
    description: 'Automate graphic design workflows and create dynamic visual content using programming and automation tools. Learn to generate graphics programmatically, batch process images, create templates, and integrate design automation into workflows. Master tools like Python libraries, Adobe scripting, and design automation platforms.',
    durations: [30, 45, 90],
    certificatePrice: 499.00,
  },
];

export default function InternshipsPage() {
  const [domains] = useState<Domain[]>(hardcodedDomains);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('name-asc');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Category mapping
  const getDomainCategory = (name: string): CategoryFilter => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('developer') || lowerName.includes('development') || lowerName.includes('stack') || lowerName.includes('app')) {
      return 'development';
    }
    if (lowerName.includes('programming') || lowerName.includes('python') || lowerName.includes('java') || lowerName.includes('c++') || lowerName.includes(' c ')) {
      return 'programming';
    }
    if (lowerName.includes('data') || lowerName.includes('ai') || lowerName.includes('analytics') || lowerName.includes('bioinformatics')) {
      return 'data';
    }
    if (lowerName.includes('marketing') || lowerName.includes('business') || lowerName.includes('finance') || lowerName.includes('hr') || lowerName.includes('trading') || lowerName.includes('strategy')) {
      return 'business';
    }
    if (lowerName.includes('ui') || lowerName.includes('ux') || lowerName.includes('graphics') || lowerName.includes('content')) {
      return 'design';
    }
    return 'other';
  };

  // Filter and sort domains
  const filteredAndSortedDomains = useMemo(() => {
    if (!domains || domains.length === 0) {
      console.log('No domains available');
      return [];
    }

    let filtered = domains.filter((domain) => {
      // Search filter
      const matchesSearch = 
        !searchQuery || 
        domain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (domain.description && domain.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Category filter
      const matchesCategory = categoryFilter === 'all' || getDomainCategory(domain.name) === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });

    console.log('After filtering:', filtered.length, 'domains');

    // Sort domains
    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return (a.certificatePrice || 0) - (b.certificatePrice || 0);
        case 'price-desc':
          return (b.certificatePrice || 0) - (a.certificatePrice || 0);
        default:
          return 0;
      }
    });

    // Add slug to each domain for routing
    const result = filtered.map(domain => ({
      ...domain,
      slug: domain.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
    }));

    console.log('Final filtered domains:', result.length);
    return result;
  }, [domains, searchQuery, sortOption, categoryFilter]);

  // Debug: Log domains after filtering
  React.useEffect(() => {
    console.log('Domains loaded:', domains.length);
    console.log('Filtered domains:', filteredAndSortedDomains.length);
    console.log('Search query:', searchQuery);
    console.log('Category filter:', categoryFilter);
  }, [domains.length, filteredAndSortedDomains.length, searchQuery, categoryFilter]);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryFilter, number> = {
      all: domains.length,
      development: 0,
      programming: 0,
      data: 0,
      business: 0,
      design: 0,
      other: 0,
    };
    
    domains.forEach(domain => {
      const category = getDomainCategory(domain.name);
      counts[category]++;
    });
    
    return counts;
  }, [domains]);

  if (!domains || domains.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <p className="text-gray-600">Loading domains...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <PageHero
        title="Virtual Internship Domains"
        description="Choose from industry-leading domains and gain hands-on experience with real-world projects. All internships include GitHub-based tasks and verified certificates."
      />

      {/* Search and Filter Section */}
      <ContentSection className="bg-white">
        <div className="max-w-7xl mx-auto" style={{ minHeight: '400px' }}>
          {/* Search Bar and Controls */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search domains by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full"
                />
              </div>

              {/* Filter Toggle Button */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
                {showFilters && <X className="w-4 h-4" />}
              </Button>
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-slate-grey rounded-xl p-6 border border-gray-200"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-3">
                        Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {(['all', 'development', 'programming', 'data', 'business', 'design', 'other'] as CategoryFilter[]).map((category) => (
                          <button
                            key={category}
                            onClick={() => setCategoryFilter(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              categoryFilter === category
                                ? 'bg-electric-blue text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                            <span className="ml-2 text-xs opacity-75">
                              ({categoryCounts[category]})
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sort Options */}
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-3">
                        Sort By
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSortOption('name-asc')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                            sortOption === 'name-asc'
                              ? 'bg-electric-blue text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <ArrowUpDown className="w-4 h-4" />
                          Name (A-Z)
                        </button>
                        <button
                          onClick={() => setSortOption('name-desc')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                            sortOption === 'name-desc'
                              ? 'bg-electric-blue text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <ArrowUpDown className="w-4 h-4 rotate-180" />
                          Name (Z-A)
                        </button>
                        <button
                          onClick={() => setSortOption('price-asc')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                            sortOption === 'price-asc'
                              ? 'bg-electric-blue text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <ArrowUpDown className="w-4 h-4" />
                          Price (Low-High)
                        </button>
                        <button
                          onClick={() => setSortOption('price-desc')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                            sortOption === 'price-desc'
                              ? 'bg-electric-blue text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <ArrowUpDown className="w-4 h-4 rotate-180" />
                          Price (High-Low)
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold text-navy">{filteredAndSortedDomains.length}</span> of{' '}
              <span className="font-semibold text-navy">{domains.length}</span> domains
            </div>
          </div>

          {/* Domains Grid */}
          {filteredAndSortedDomains.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg mb-2">No domains found matching your criteria.</p>
              <p className="text-gray-500 text-sm mb-4">Total domains: {domains.length}</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('all');
                  setSortOption('name-asc');
                }}
                className="text-electric-blue hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div style={{ width: '100%', padding: '20px 0' }}>
              <DomainsGrid domains={filteredAndSortedDomains} />
            </div>
          )}
        </div>
      </ContentSection>

      {/* Why Choose ByteLab */}
      <ContentSection title="Why Choose ByteLab for Your Internship" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <AnimatedGrid className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                Real-World Projects
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                Work on actual projects that demonstrate your skills to employers.
                All tasks are validated through GitHub, ensuring authenticity.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                Flexible Duration
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                Choose from 30, 45, or 90-day internships based on your schedule
                and learning goals. Start anytime, work at your own pace.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                Verified Certificates
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                Receive industry-recognized certificates with QR verification.
                Employers can instantly verify your credentials.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                MSME Verified
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                ByteLab is an MSME verified company, ensuring credibility and
                trust in all our programs and certificates.
              </p>
            </div>
          </AnimatedGrid>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection className="bg-navy text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display font-heading font-bold text-white mb-6">
            Ready to Start Your Internship?
          </h2>
          <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
            Select a domain above to learn more, or register now to get started.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
}

