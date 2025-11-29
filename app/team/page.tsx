import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { TeamGrid } from '@/components/sections/TeamGrid';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

export const metadata = generateMetadata({
  title: 'Our Team - Founders & Advisors',
  description: 'Meet the team behind ByteLab Infotech - founders, advisors, and key members dedicated to transforming virtual internship experiences.',
  keywords: ['bytelab team', 'founders', 'advisors', 'virtual internship team'],
  canonical: 'https://bytelab.com/team',
});

const founders = [
  {
    name: 'Founder Name',
    role: 'Co-Founder & CEO',
    bio: 'Passionate about EdTech and student success. [Placeholder bio - to be updated with actual founder information]',
    image: '/team/founder-1.jpg',
    linkedin: 'https://linkedin.com/in/founder1',
    email: 'founder1@bytelab.com',
  },
  {
    name: 'Founder Name',
    role: 'Co-Founder & CTO',
    bio: 'Technology enthusiast with expertise in full-stack development and system architecture. [Placeholder bio - to be updated with actual founder information]',
    image: '/team/founder-2.jpg',
    linkedin: 'https://linkedin.com/in/founder2',
    email: 'founder2@bytelab.com',
  },
];

const advisors = [
  {
    name: 'Advisor Name',
    role: 'Industry Advisor',
    bio: 'Expert in education technology and student career development. [Placeholder bio - to be updated with actual advisor information]',
    image: '/team/advisor-1.jpg',
    linkedin: 'https://linkedin.com/in/advisor1',
  },
];

const teamMembers = [
  {
    name: 'Team Member',
    role: 'Lead Developer',
    bio: 'Full-stack developer specializing in modern web technologies.',
    image: '/team/member-1.jpg',
    github: 'https://github.com/member1',
  },
];

export default function TeamPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <PageHero
          title="Our Team"
          description="Meet the passionate individuals behind ByteLab Infotech, dedicated to transforming how students gain real-world experience."
        />

        {/* Founders Section */}
        <ContentSection title="Founders" className="bg-white">
          <div className="max-w-5xl mx-auto">
            <TeamGrid members={founders} columns={2} />
          </div>
        </ContentSection>

        {/* Advisors Section */}
        {advisors.length > 0 && (
          <ContentSection title="Advisors" className="bg-slate-grey">
            <div className="max-w-6xl mx-auto">
              <TeamGrid members={advisors} columns={3} />
            </div>
          </ContentSection>
        )}

        {/* Team Members Section */}
        {teamMembers.length > 0 && (
          <ContentSection title="Team Members" className="bg-white">
            <div className="max-w-6xl mx-auto">
              <TeamGrid members={teamMembers} columns={3} />
            </div>
          </ContentSection>
        )}

        {/* Join Us CTA */}
        <ContentSection className="bg-navy text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-display font-heading font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
              We're always looking for passionate individuals who share our vision of
              transforming education through technology.
            </p>
            <a
              href="/careers"
              className="inline-block px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </ContentSection>
      </div>
    </>
  );
}

