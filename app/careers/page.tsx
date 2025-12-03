import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { AnimatedGrid } from '@/components/sections/AnimatedGrid';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { IconCard } from '@/components/ui/IconCard';

export const metadata = generateMetadata({
  title: 'Careers - Join ByteLab Infotech',
  description: 'Join ByteLab Infotech and help transform virtual internship experiences. Explore open positions, internal internships, and the Campus Ambassador program.',
  keywords: ['bytelab careers', 'internship jobs', 'campus ambassador', 'edtech careers'],
  canonical: 'https://bytelab.com/careers',
});

const openPositions = [
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'We are looking for an experienced full-stack developer to join our engineering team.',
  },
  {
    title: 'Content Writer',
    department: 'Marketing',
    type: 'Part-time',
    location: 'Remote',
    description: 'Create engaging content for our blog and marketing materials.',
  },
];

const benefits = [
  {
    icon: 'Briefcase',
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible working hours',
  },
  {
    icon: 'Users',
    title: 'Team Culture',
    description: 'Collaborative environment with passionate professionals',
  },
  {
    icon: 'Award',
    title: 'Growth Opportunities',
    description: 'Continuous learning and career development support',
  },
  {
    icon: 'TrendingUp',
    title: 'Impact',
    description: 'Make a real difference in students\' lives',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <PageHero
        title="Join Our Team"
        description="Help us transform how students gain real-world experience through technology. Join a mission-driven team committed to student success."
      />

      {/* Open Positions */}
      <ContentSection title="Open Positions" className="bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {openPositions.map((position, index) => (
            <AnimatedSection key={position.title} variant="slideUp" transition={{ delay: index * 0.1 }}>
              <Card className="hover:shadow-elevated transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-h3 font-heading font-semibold text-navy mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-body text-gray-600 mb-3">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-body text-gray-600">
                      {position.description}
                    </p>
                  </div>
                  <Button variant="outline" className="md:ml-4">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
          
          {openPositions.length === 0 && (
            <AnimatedSection variant="slideUp" className="text-center py-12">
              <p className="text-body-lg text-gray-600 mb-4">
                We don't have any open positions at the moment.
              </p>
              <p className="text-body text-gray-600">
                Check back later or send us your resume at{' '}
                <a href="mailto:careers@bytelab.com" className="text-electric-blue hover:underline">
                  careers@bytelab.com
                </a>
              </p>
            </AnimatedSection>
          )}
        </div>
      </ContentSection>

      {/* Internal Internships */}
      <ContentSection title="Internal Internship Opportunities" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp" className="bg-white rounded-xl p-8 border border-gray-100">
            <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
              Intern with ByteLab
            </h3>
            <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
              We offer internal internship opportunities for students who want to
              gain hands-on experience working on a real EdTech platform. Interns
              work on meaningful projects and contribute to our mission.
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-gray-700 mb-6 ml-4">
              <li>Work on real features used by thousands of students</li>
              <li>Learn from experienced developers and designers</li>
              <li>Flexible hours to accommodate your studies</li>
              <li>Certificate of completion upon successful internship</li>
            </ul>
            <Button variant="primary">
              Apply for Internal Internship
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Campus Ambassador Program */}
      <ContentSection title="Campus Ambassador Program" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp" className="bg-gradient-to-br from-electric-blue/5 to-transparent rounded-2xl p-8 border border-electric-blue/20">
            <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
              Become a Campus Ambassador
            </h3>
            <p className="text-body-lg text-gray-700 leading-relaxed mb-6">
              Our Campus Ambassador program offers students the opportunity to represent
              ByteLab on their campus, help fellow students, and earn rewards while building
              leadership skills.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Benefits
                </h4>
                <ul className="space-y-2 text-body text-gray-700">
                  <li>• Exclusive rewards and incentives</li>
                  <li>• Leadership experience</li>
                  <li>• Networking opportunities</li>
                  <li>• Certificate of recognition</li>
                </ul>
              </div>
              <div>
                <h4 className="text-h3 font-heading font-semibold text-navy mb-3">
                  Responsibilities
                </h4>
                <ul className="space-y-2 text-body text-gray-700">
                  <li>• Promote ByteLab on campus</li>
                  <li>• Help students with questions</li>
                  <li>• Organize events and workshops</li>
                  <li>• Provide feedback and insights</li>
                </ul>
              </div>
            </div>
            <Link href="/campus-ambassador">
              <Button variant="cta" className="w-full md:w-auto">
                Learn More About CA Program
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Benefits */}
      <ContentSection title="Why Work at ByteLab" className="bg-slate-grey">
        <AnimatedGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <IconCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              className="text-center"
            />
          ))}
        </AnimatedGrid>
      </ContentSection>

      {/* CTA */}
      <ContentSection className="bg-navy text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display font-heading font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
            Join us in transforming how students gain real-world experience.
            Send us your resume or apply for open positions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:careers@bytelab.com">
              <button className="px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors">
                Send Your Resume
              </button>
            </a>
            <Link href="/contact">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
}

