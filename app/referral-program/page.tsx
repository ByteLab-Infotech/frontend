import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import { Share2, Gift, Users, TrendingUp, CheckCircle2, HelpCircle } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Referral Program - Earn Rewards',
  description: 'Join ByteLab\'s referral program. Refer friends and earn rewards. Learn about referral rules, rewards structure, and how to get started.',
  keywords: ['referral program', 'earn rewards', 'refer friends', 'student referral'],
  canonical: 'https://bytelab.com/referral-program',
});

export default function ReferralProgramPage() {
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
              <Share2 className="w-10 h-10 text-electric-blue" />
            </div>
            <h1 className="text-hero font-heading font-bold text-navy mb-6">
              Referral Program
            </h1>
            <p className="text-body-lg text-gray-700 leading-relaxed">
              Refer friends to ByteLab and earn rewards. Help others discover virtual
              internships while building your own rewards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <ContentSection title="How It Works" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { step: '1', title: 'Get Your Link', desc: 'Receive your unique referral link after registration' },
              { step: '2', title: 'Share with Friends', desc: 'Share your link with friends and classmates' },
              { step: '3', title: 'Earn Rewards', desc: 'Get rewarded when they register and complete internships' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-grey rounded-xl p-6 border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-electric-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-h3 font-bold">
                  {item.step}
                </div>
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ContentSection>

      {/* Rewards */}
      <ContentSection title="Rewards Structure" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="bg-white rounded-xl p-8 border border-gray-100"
          >
            <h3 className="text-h3 font-heading font-semibold text-navy mb-6">
              What You Can Earn
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-grey rounded-lg">
                <Gift className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-body font-medium text-navy mb-1">Per Referral</p>
                  <p className="text-body-sm text-gray-600">
                    Earn rewards for each friend who registers through your link
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-grey rounded-lg">
                <TrendingUp className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-body font-medium text-navy mb-1">Bonus Rewards</p>
                  <p className="text-body-sm text-gray-600">
                    Additional rewards when referrals complete their internships
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-grey rounded-lg">
                <Users className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-body font-medium text-navy mb-1">Tier Benefits</p>
                  <p className="text-body-sm text-gray-600">
                    Unlock higher reward tiers as you refer more students
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Rules */}
      <ContentSection title="Program Rules" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="space-y-4"
          >
            {[
              'Referrals must register using your unique referral link',
              'Rewards are credited after successful registration',
              'Self-referrals are not allowed',
              'Referrals must complete registration to count',
              'Program terms may be updated; you\'ll be notified of changes',
              'Fraudulent activity will result in account suspension',
            ].map((rule, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-grey rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                <p className="text-body text-gray-700">{rule}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </ContentSection>

      {/* Why It's Helpful */}
      <ContentSection title="Why Referral Program is Helpful" className="bg-slate-grey">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                For You
              </h3>
              <ul className="space-y-2 text-body text-gray-700">
                <li>• Earn rewards for helping friends</li>
                <li>• Build your network</li>
                <li>• Support others' career growth</li>
                <li>• Unlock tier benefits</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                For Your Friends
              </h3>
              <ul className="space-y-2 text-body text-gray-700">
                <li>• Discover virtual internship opportunities</li>
                <li>• Get started with trusted platform</li>
                <li>• Build real-world skills</li>
                <li>• Earn verified certificates</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* FAQs */}
      <ContentSection title="Referral Program FAQs" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="space-y-4"
          >
            {[
              {
                q: 'How do I get my referral link?',
                a: 'After registering for an internship, you\'ll receive your unique referral link in your dashboard.',
              },
              {
                q: 'When do I receive rewards?',
                a: 'Rewards are credited after your referral successfully registers and completes their internship.',
              },
              {
                q: 'Can I refer multiple people?',
                a: 'Yes! There\'s no limit to the number of people you can refer.',
              },
              {
                q: 'What happens if my referral doesn\'t complete?',
                a: 'You\'ll still receive rewards for successful registration. Bonus rewards require completion.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-slate-grey rounded-xl p-6 border border-gray-100">
                <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                  {faq.q}
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection className="bg-navy text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display font-heading font-bold text-white mb-6">
            Ready to Start Referring?
          </h2>
          <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
            Register for an internship to get your referral link and start earning rewards.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
          >
            Get Started
          </a>
        </div>
      </ContentSection>
    </div>
  );
}

