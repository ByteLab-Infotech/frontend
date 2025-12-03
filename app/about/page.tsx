import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { AnimatedGrid } from '@/components/sections/AnimatedGrid';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Shield } from 'lucide-react';
import Link from 'next/link';
import { IconCard } from '@/components/ui/IconCard';

export const metadata = generateMetadata({
  title: 'About Us - Virtual Internship Platform',
  description: 'Learn about ByteLab Infotech - an MSME verified EdTech platform offering automated virtual internships with GitHub-based tasks and verified certificates. Discover our mission, vision, and commitment to student success.',
  keywords: ['about bytelab', 'virtual internship company', 'MSME verified', 'EdTech platform'],
  canonical: 'https://bytelab.com/about',
});

const values = [
  {
    icon: 'Target',
    title: 'Our Mission',
    description: 'To democratize access to quality internship experiences through technology, enabling students to gain real-world skills regardless of geographical constraints.',
  },
  {
    icon: 'Rocket',
    title: 'Our Vision',
    description: 'To become the most trusted virtual internship platform in India, recognized for innovation, transparency, and student success.',
  },
  {
    icon: 'Shield',
    title: 'Trust & Transparency',
    description: 'MSME verified and committed to maintaining the highest standards of credibility and transparency in all our operations.',
  },
];

const features = [
  {
    icon: 'Code',
    title: 'Technology-Driven',
    description: 'Built on modern tech stack: Spring Boot, Next.js, GitHub API integration, and automated validation systems.',
  },
  {
    icon: 'Users',
    title: 'Student-Centric',
    description: 'Every feature is designed with student success in mind, from task assignment to certificate verification.',
  },
  {
    icon: 'Award',
    title: 'Industry Recognized',
    description: 'Certificates verified through QR codes, recognized by employers and educational institutions.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup
        type="organization"
        data={{
          description: 'ByteLab Infotech is an MSME verified EdTech platform offering automated virtual internships with GitHub-based tasks and verified certificates.',
          socialLinks: [
            'https://linkedin.com/company/bytelab',
            'https://github.com/bytelab',
          ],
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <PageHero
          title="About ByteLab Infotech"
          description="We're transforming how students gain real-world experience through automated virtual internships. MSME verified, technology-driven, and committed to student success."
        />

        {/* Company Story */}
        <ContentSection title="Our Story" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="slideUp" className="prose prose-lg max-w-none">
              <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
                ByteLab Infotech was founded with a simple yet powerful vision: to bridge the gap between
                academic learning and industry requirements. We recognized that traditional internships often
                pose barriers for students—geographical constraints, limited opportunities, and lack of
                structured learning paths.
              </p>
              <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
                Our platform leverages cutting-edge technology to automate the entire internship process,
                from task assignment to certificate verification. By integrating with GitHub, we ensure
                students work on real projects that demonstrate their skills to potential employers.
              </p>
              <p className="text-body-lg text-gray-700 leading-relaxed">
                As an MSME verified company, we're committed to maintaining the highest standards of
                credibility and transparency. Every certificate issued through our platform is verifiable
                via QR code, providing students with industry-recognized credentials that enhance their
                career prospects.
              </p>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Mission, Vision, Values */}
        <ContentSection title="Mission, Vision & Values" className="bg-slate-grey">
          <AnimatedGrid className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <IconCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </AnimatedGrid>
        </ContentSection>

        {/* Why ByteLab */}
        <ContentSection title="Why ByteLab Exists" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="slideUp" className="space-y-6">
              <p className="text-body-lg text-gray-700 leading-relaxed">
                The traditional internship model is broken. Students struggle to find quality opportunities,
                companies face challenges in managing interns, and the entire process lacks transparency
                and standardization.
              </p>
              <p className="text-body-lg text-gray-700 leading-relaxed">
                ByteLab exists to solve these problems through technology. We've created a platform that:
              </p>
              <ul className="list-disc list-inside space-y-3 text-body-lg text-gray-700 ml-4">
                <li>Eliminates geographical barriers—students can intern from anywhere</li>
                <li>Provides structured learning paths with real-world projects</li>
                <li>Ensures transparency through automated validation and verification</li>
                <li>Offers industry-recognized certificates that enhance career prospects</li>
                <li>Maintains credibility through MSME verification and QR-based certificate validation</li>
              </ul>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* What Makes Us Trustworthy */}
        <ContentSection title="What Makes ByteLab Trustworthy" className="bg-slate-grey">
          <AnimatedGrid className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <IconCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </AnimatedGrid>
        </ContentSection>

        {/* MSME Details */}
        <ContentSection title="MSME Verification" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="slideUp" className="bg-gradient-to-br from-electric-blue/5 to-transparent rounded-2xl p-8 border border-electric-blue/20">
              <div className="flex items-start gap-6">
                <Shield className="w-12 h-12 text-electric-blue flex-shrink-0" />
                <div>
                  <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                    MSME Registered Company
                  </h3>
                  <p className="text-body-lg text-gray-700 leading-relaxed mb-4">
                    ByteLab Infotech is a registered MSME (Micro, Small and Medium Enterprise) company,
                    verified and recognized by the Government of India. This certification demonstrates
                    our commitment to operating as a legitimate, credible business entity.
                  </p>
                  <p className="text-body-lg text-gray-700 leading-relaxed mb-4">
                    Our MSME registration ensures that we adhere to government standards and regulations,
                    providing students and educational institutions with confidence in our platform's
                    legitimacy and reliability.
                  </p>
                  <Link href="/msme" className="text-electric-blue font-medium hover:underline">
                    Learn more about our MSME certification →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Infrastructure */}
        <ContentSection title="Our Technology Infrastructure" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="slideUp" className="space-y-6">
              <p className="text-body-lg text-gray-700 leading-relaxed">
                ByteLab is built on a modern, scalable technology stack designed for reliability,
                performance, and security:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Backend</h4>
                  <ul className="space-y-2 text-body text-gray-600">
                    <li>• Spring Boot (Java)</li>
                    <li>• MySQL Database</li>
                    <li>• RESTful API Architecture</li>
                    <li>• JWT Authentication</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Frontend</h4>
                  <ul className="space-y-2 text-body text-gray-600">
                    <li>• Next.js 14 (React)</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Framer Motion</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Integrations</h4>
                  <ul className="space-y-2 text-body text-gray-600">
                    <li>• GitHub API</li>
                    <li>• Razorpay (Payments)</li>
                    <li>• AWS SES (Email)</li>
                    <li>• Puppeteer (PDF Generation)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Security</h4>
                  <ul className="space-y-2 text-body text-gray-600">
                    <li>• SSL/TLS Encryption</li>
                    <li>• Secure Payment Processing</li>
                    <li>• QR Code Verification</li>
                    <li>• Data Privacy Compliance</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <AnimatedButton href="/technology" variant="primary">
                  Explore Our Technology Stack
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* CTA Section */}
        <ContentSection className="bg-navy text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-display font-heading font-bold text-white mb-6">
              Ready to Start Your Virtual Internship?
            </h2>
            <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
              Join thousands of students who have gained real-world experience through ByteLab's
              automated virtual internship platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton href="/register" variant="cta">
                Get Started Free
              </AnimatedButton>
              <AnimatedButton href="/internships" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Internships
              </AnimatedButton>
            </div>
          </div>
        </ContentSection>

        <Footer />
      </div>
    </>
  );
}

