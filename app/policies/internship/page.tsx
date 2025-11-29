import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { Briefcase } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Internship Terms - ByteLab Infotech',
  description: 'Read the specific terms and conditions for ByteLab virtual internships. Understand internship requirements and expectations.',
  keywords: ['internship terms', 'internship conditions', 'virtual internship rules'],
  canonical: 'https://bytelab.com/policies/internship',
});

export default function InternshipTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero
        title="Internship Terms"
        description="Specific terms and conditions governing virtual internships at ByteLab Infotech."
        icon={<Briefcase className="w-10 h-10 text-electric-blue" />}
      />

      <ContentSection className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <AnimatedSection variant="slideUp">
            <div className="space-y-6 text-body text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-h2 font-heading font-bold text-navy mb-4">Last Updated: January 2024</h2>
                <p>
                  These Internship Terms govern your participation in ByteLab Infotech's virtual 
                  internship program. By registering, you agree to these terms.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Internship Structure</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Internships are available in 30, 45, or 90-day durations</li>
                  <li>Tasks are assigned based on your selected domain and duration</li>
                  <li>All work must be submitted through GitHub</li>
                  <li>Tasks are validated automatically using GitHub API</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Task Requirements</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All code must be original and created by you</li>
                  <li>Tasks must be completed according to specified requirements</li>
                  <li>GitHub repositories must be properly structured and documented</li>
                  <li>Submissions are subject to automated validation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Certificate Issuance</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Certificates are issued upon successful completion of all tasks</li>
                  <li>Certificate unlock requires payment as per domain pricing</li>
                  <li>Certificates include QR code verification</li>
                  <li>Certificates are non-transferable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Code of Conduct</h3>
                <p>During your internship, you must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintain academic integrity</li>
                  <li>Submit original work only</li>
                  <li>Respect intellectual property rights</li>
                  <li>Follow GitHub best practices</li>
                  <li>Communicate professionally</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">Termination</h3>
                <p>
                  We reserve the right to terminate your internship for violations of these terms, 
                  fraudulent activity, or failure to meet requirements.
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

