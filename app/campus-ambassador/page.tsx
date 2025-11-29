import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import { Users, Award, TrendingUp, Gift, CheckCircle2, Send } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Campus Ambassador Program - Join ByteLab',
  description: 'Become a ByteLab Campus Ambassador. Represent ByteLab on your campus, help fellow students, and earn rewards. Apply now for the CA program.',
  keywords: ['campus ambassador', 'CA program', 'student ambassador', 'referral program'],
  canonical: 'https://bytelab.com/campus-ambassador',
});

export default function CampusAmbassadorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-grey to-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-electric-blue" />
            </div>
            <h1 className="text-hero font-heading font-bold text-navy mb-6">
              Campus Ambassador Program
            </h1>
            <p className="text-body-lg text-gray-700 leading-relaxed">
              Represent ByteLab on your campus, help fellow students succeed, and earn
              exclusive rewards while building leadership skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <ContentSection title="Program Overview" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="space-y-6"
          >
            <p className="text-body-lg text-gray-700 leading-relaxed">
              The ByteLab Campus Ambassador program offers students the opportunity to
              represent ByteLab on their campus, help fellow students discover virtual
              internship opportunities, and earn rewards while building valuable leadership
              experience.
            </p>
            <p className="text-body-lg text-gray-700 leading-relaxed">
              As a Campus Ambassador, you'll be the face of ByteLab at your institution,
              helping students understand the benefits of virtual internships and guiding
              them through the registration process.
            </p>
          </motion.div>
        </div>
      </ContentSection>

      {/* Benefits */}
      <ContentSection title="Benefits & Perks" className="bg-slate-grey">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Gift, title: 'Exclusive Rewards', desc: 'Earn rewards for every successful referral' },
            { icon: Award, title: 'Recognition', desc: 'Certificate of recognition and LinkedIn badge' },
            { icon: TrendingUp, title: 'Leadership Skills', desc: 'Build leadership and communication skills' },
            { icon: Users, title: 'Networking', desc: 'Connect with students and ByteLab team' },
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-electric-blue" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-body text-gray-600">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </ContentSection>

      {/* Roles & Responsibilities */}
      <ContentSection title="Roles & Responsibilities" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="space-y-4"
          >
            {[
              'Promote ByteLab virtual internships on your campus',
              'Help students understand the program benefits',
              'Organize workshops and information sessions',
              'Share ByteLab content on social media',
              'Provide feedback and insights to ByteLab team',
              'Maintain active communication with assigned students',
            ].map((responsibility, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-grey rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                <p className="text-body text-gray-700">{responsibility}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </ContentSection>

      {/* KPIs */}
      <ContentSection title="Key Performance Indicators" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="bg-white rounded-xl p-8 border border-gray-100"
          >
            <h3 className="text-h3 font-heading font-semibold text-navy mb-6">
              How Success is Measured
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-body font-medium text-navy mb-2">Referrals</p>
                <p className="text-body-sm text-gray-600">
                  Number of successful student registrations through your referral
                </p>
              </div>
              <div>
                <p className="text-body font-medium text-navy mb-2">Engagement</p>
                <p className="text-body-sm text-gray-600">
                  Social media engagement and content sharing activity
                </p>
              </div>
              <div>
                <p className="text-body font-medium text-navy mb-2">Events</p>
                <p className="text-body-sm text-gray-600">
                  Workshops and information sessions organized
                </p>
              </div>
              <div>
                <p className="text-body font-medium text-navy mb-2">Feedback</p>
                <p className="text-body-sm text-gray-600">
                  Quality and frequency of feedback provided
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Rewards System */}
      <ContentSection title="Rewards System" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-electric-blue/5 to-transparent rounded-xl p-6 border border-electric-blue/20">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-4">
                Tier-Based Rewards
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-body font-medium text-navy mb-2">Bronze (5-10 referrals)</p>
                  <p className="text-body-sm text-gray-600">Certificate of recognition, LinkedIn badge</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-body font-medium text-navy mb-2">Silver (11-25 referrals)</p>
                  <p className="text-body-sm text-gray-600">All Bronze rewards + Exclusive merchandise</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-body font-medium text-navy mb-2">Gold (26+ referrals)</p>
                  <p className="text-body-sm text-gray-600">All Silver rewards + Cash incentives + Priority support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Application Form */}
      <ContentSection title="Apply Now" className="bg-slate-grey">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <Card>
              <h3 className="text-h3 font-heading font-semibold text-navy mb-6">
                Campus Ambassador Application
              </h3>
              <form className="space-y-4">
                <Input label="Full Name" required />
                <Input label="Email" type="email" required />
                <Input label="Phone" type="tel" required />
                <Input label="College/University" required />
                <Input label="Course/Program" required />
                <Input label="Year of Study" required />
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Why do you want to be a Campus Ambassador?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-[#D0D0D0] rounded-lg p-3 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                  Previous Experience (if any)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-[#D0D0D0] rounded-lg p-3 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none"
                  />
                </div>
                <Button variant="primary" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </ContentSection>
    </div>
  );
}

