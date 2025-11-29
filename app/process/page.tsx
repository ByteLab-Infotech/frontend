import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'How It Works - Internship Process',
  description: 'Learn how ByteLab\'s virtual internship process works. Understand batch system, task assignment, GitHub validation, and certificate unlock.',
  keywords: ['internship process', 'how it works', 'internship workflow', 'task assignment'],
  canonical: 'https://bytelab.com/process',
});

const processSteps = [
  {
    step: 1,
    title: 'Registration & Offer Letter',
    description: 'Register for an internship, select your domain and duration, and receive your official offer letter instantly.',
    details: ['Simple registration process', 'Domain and duration selection', 'Instant offer letter generation'],
  },
  {
    step: 2,
    title: 'Batch Assignment',
    description: 'You\'re assigned to a batch with a specific start date. Tasks unlock automatically when your batch begins.',
    details: ['Automatic batch assignment', 'Start date notification', 'Countdown timer until batch starts'],
  },
  {
    step: 3,
    title: 'Task Assignment',
    description: 'Tasks are automatically assigned based on your domain and duration, distributed across different difficulty levels.',
    details: ['Automatic task distribution', 'Multiple difficulty levels', 'Real-world project requirements'],
  },
  {
    step: 4,
    title: 'GitHub Submission',
    description: 'Complete tasks and submit your work through GitHub. Each task requires a dedicated repository.',
    details: ['Create GitHub repositories', 'Submit repository URLs', 'Follow task requirements'],
  },
  {
    step: 5,
    title: 'Automated Validation',
    description: 'Your work is automatically validated using GitHub API. The system checks code quality and completeness.',
    details: ['GitHub API integration', 'Automated code validation', 'Quality and completeness checks'],
  },
  {
    step: 6,
    title: 'Certificate Unlock',
    description: 'Upon approval of all tasks, unlock your certificate by completing payment. Certificate is generated instantly.',
    details: ['All tasks approved', 'Payment processing', 'Instant certificate generation'],
  },
  {
    step: 7,
    title: 'Verification',
    description: 'Your certificate includes QR code and unique ID for instant verification by employers and institutions.',
    details: ['QR code on certificate', 'Unique certificate ID', 'Public verification portal'],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero
        title="How It Works"
        description="Understand the complete virtual internship process from registration to certificate verification."
        icon={<Workflow className="w-10 h-10 text-electric-blue" />}
      />

      {/* Process Flow */}
      <ContentSection title="Internship Process Flow" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {processSteps.map((process, index) => (
              <AnimatedSection key={process.step} variant="slideUp">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-electric-blue text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {process.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-1 h-full bg-electric-blue/20 mx-auto mt-2" style={{ minHeight: '60px' }}></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                      {process.title}
                    </h3>
                    <p className="text-body-lg text-gray-700 leading-relaxed mb-4">
                      {process.description}
                    </p>
                    <ul className="space-y-2">
                      {process.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-body text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Technical Details */}
      <ContentSection title="Technical Process Details" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="slideUp">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                  Batch System
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Internships are organized into batches with specific start dates. This ensures 
                  fair task distribution and allows for better management of resources. Your batch 
                  start date is assigned during registration.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                  Task Assignment Algorithm
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Tasks are automatically assigned based on your selected domain and duration. 
                  The system distributes tasks across BEGINNER, INTERMEDIATE, ADVANCED, and FINAL 
                  levels to ensure comprehensive learning.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                  GitHub Validation
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  All submissions are validated through GitHub API integration. The system checks 
                  for code quality, completeness, repository structure, and adherence to task 
                  requirements automatically.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                  Certificate Generation
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Certificates are generated using secure PDF generation technology. Each certificate 
                  includes a unique QR code and certificate ID that links to our verification database.
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

