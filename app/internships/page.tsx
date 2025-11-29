import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { DomainsGrid } from '@/components/sections/DomainsGrid';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { AnimatedGrid } from '@/components/sections/AnimatedGrid';

export const metadata = generateMetadata({
  title: 'Virtual Internships - All Domains',
  description: 'Explore all virtual internship domains at ByteLab Infotech. Choose from Web Development, Data Science, AI/ML, Cybersecurity, Cloud Computing, Mobile Development, and more. Get industry-recognized certificates.',
  keywords: ['virtual internships', 'internship domains', 'web development internship', 'data science internship', 'AI ML internship'],
  canonical: 'https://bytelab.com/internships',
});

const domains = [
  {
    name: 'Web Development',
    slug: 'web-development',
    description: 'Master modern web technologies including React, Node.js, and full-stack development. Build real-world web applications and APIs.',
    icon: 'Globe',
    color: 'text-blue-500',
    durations: [30, 45, 90],
  },
  {
    name: 'Data Science',
    slug: 'data-science',
    description: 'Learn data analysis, visualization, and machine learning fundamentals. Work with real datasets and build predictive models.',
    icon: 'Database',
    color: 'text-purple-500',
    durations: [30, 45, 90],
  },
  {
    name: 'Mobile Development',
    slug: 'mobile-development',
    description: 'Develop native and cross-platform mobile applications. Learn React Native, Flutter, and mobile app architecture.',
    icon: 'Smartphone',
    color: 'text-green-500',
    durations: [30, 45, 90],
  },
  {
    name: 'Cloud Computing',
    slug: 'cloud-computing',
    description: 'Master AWS, Azure, and cloud infrastructure. Learn DevOps, containerization, and scalable system design.',
    icon: 'Cloud',
    color: 'text-orange-500',
    durations: [30, 45, 90],
  },
  {
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Learn security fundamentals, ethical hacking, and network security. Protect systems from threats and vulnerabilities.',
    icon: 'Shield',
    color: 'text-red-500',
    durations: [30, 45, 90],
  },
  {
    name: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Deep dive into AI and ML algorithms. Build neural networks, work with TensorFlow, and create intelligent systems.',
    icon: 'Brain',
    color: 'text-indigo-500',
    durations: [30, 45, 90],
  },
  {
    name: 'Python Development',
    slug: 'python-development',
    description: 'Master Python programming, frameworks like Django and Flask, and build scalable backend systems.',
    icon: 'Code2',
    color: 'text-yellow-500',
    durations: [30, 45, 90],
  },
  {
    name: 'Java Development',
    slug: 'java-development',
    description: 'Learn Java programming, Spring Boot framework, and enterprise application development.',
    icon: 'Server',
    color: 'text-cyan-500',
    durations: [30, 45, 90],
  },
];

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <PageHero
        title="Virtual Internship Domains"
        description="Choose from industry-leading domains and gain hands-on experience with real-world projects. All internships include GitHub-based tasks and verified certificates."
      />

      {/* Domains Grid */}
      <ContentSection className="bg-white">
        <DomainsGrid domains={domains} />
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
    </div>
  );
}

