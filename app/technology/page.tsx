import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { Code2, Database, Globe, Cloud, Shield, Zap } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Technology Stack - ByteLab Infotech',
  description: 'Learn about ByteLab\'s technology stack: Spring Boot, Next.js, GitHub API, Puppeteer, AWS SES, Razorpay, and more.',
  keywords: ['technology stack', 'tech stack', 'spring boot', 'next.js', 'github api'],
  canonical: 'https://bytelab.com/technology',
});

const techStack = [
  {
    category: 'Backend',
    icon: Code2,
    technologies: [
      { name: 'Spring Boot', description: 'Java-based framework for building robust REST APIs' },
      { name: 'MySQL', description: 'Relational database for data persistence' },
      { name: 'JPA/Hibernate', description: 'ORM for database operations' },
      { name: 'JWT Authentication', description: 'Secure token-based authentication' },
    ],
  },
  {
    category: 'Frontend',
    icon: Globe,
    technologies: [
      { name: 'Next.js 14', description: 'React framework with server-side rendering' },
      { name: 'TypeScript', description: 'Type-safe JavaScript for better code quality' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      { name: 'Framer Motion', description: 'Animation library for smooth interactions' },
    ],
  },
  {
    category: 'Integrations',
    icon: Zap,
    technologies: [
      { name: 'GitHub API', description: 'Automated task validation and repository access' },
      { name: 'Razorpay', description: 'Secure payment processing' },
      { name: 'AWS SES', description: 'Email delivery service' },
      { name: 'Puppeteer', description: 'PDF generation for certificates' },
    ],
  },
  {
    category: 'Infrastructure',
    icon: Cloud,
    technologies: [
      { name: 'Cloud Hosting', description: 'Scalable cloud infrastructure' },
      { name: 'SSL/TLS', description: 'Encrypted data transmission' },
      { name: 'CDN', description: 'Content delivery network for fast loading' },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero
        title="Our Technology Stack"
        description="Built on modern, scalable technologies to deliver a reliable and secure virtual internship platform."
        icon={<Code2 className="w-10 h-10 text-electric-blue" />}
      />

      {/* Tech Stack */}
      <ContentSection title="Technology Overview" className="bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="slideUp">
            <div className="space-y-12">
              {techStack.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.category} className="bg-slate-grey rounded-xl p-8 border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-7 h-7 text-electric-blue" />
                      </div>
                      <h3 className="text-h2 font-heading font-bold text-navy">
                        {category.category}
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.technologies.map((tech) => (
                        <div key={tech.name} className="bg-white rounded-lg p-4 border border-gray-100">
                          <h4 className="text-h3 font-heading font-semibold text-navy mb-2">
                            {tech.name}
                          </h4>
                          <p className="text-body text-gray-600">
                            {tech.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Why These Technologies */}
      <ContentSection title="Why These Technologies" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Scalability
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Our technology stack is designed to handle growth. Spring Boot and Next.js 
                  provide excellent performance and scalability for thousands of concurrent users.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Security
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Security is paramount. We use JWT authentication, encrypted connections, 
                  secure payment processing, and follow industry best practices for data protection.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Reliability
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Our infrastructure ensures high availability and reliability. Automated 
                  validation, error handling, and monitoring systems keep the platform running smoothly.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Architecture */}
      <ContentSection title="System Architecture" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp">
            <div className="bg-slate-grey rounded-xl p-8 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-6">
                How It All Works Together
              </h3>
              <div className="space-y-4 text-body text-gray-700">
                <p>
                  <strong>Frontend (Next.js):</strong> Provides the user interface, handles client-side 
                  interactions, and communicates with the backend through REST APIs.
                </p>
                <p>
                  <strong>Backend (Spring Boot):</strong> Processes business logic, manages database 
                  operations, integrates with external services, and handles authentication.
                </p>
                <p>
                  <strong>Database (MySQL):</strong> Stores all user data, internship information, tasks, 
                  and certificate records securely.
                </p>
                <p>
                  <strong>External Services:</strong> GitHub API for validation, Razorpay for payments, 
                  AWS SES for emails, and Puppeteer for certificate generation.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
}

