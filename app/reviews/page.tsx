import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { Star, Linkedin, Github, ExternalLink } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Student Reviews - ByteLab Infotech',
  description: 'Read reviews from students who completed ByteLab virtual internships. See real feedback and experiences.',
  keywords: ['reviews', 'student reviews', 'testimonials', 'internship reviews'],
  canonical: 'https://bytelab.com/reviews',
});

const reviews = [
  {
    name: 'Priya Sharma',
    domain: 'Web Development',
    rating: 5,
    review: 'ByteLab provided an incredible learning experience. The tasks were challenging and relevant, and the certificate is a great addition to my resume!',
    linkedin: 'https://linkedin.com/in/priya-sharma',
    github: 'https://github.com/priya-sharma',
    date: '2024-01-15',
  },
  {
    name: 'Rahul Singh',
    domain: 'Data Science',
    rating: 5,
    review: 'The automated system is brilliant! I loved the flexibility and the real-time GitHub validation. Highly recommend for anyone looking for practical experience.',
    linkedin: 'https://linkedin.com/in/rahul-singh',
    github: 'https://github.com/rahul-singh',
    date: '2024-01-10',
  },
  {
    name: 'Ananya Gupta',
    domain: 'Mobile Development',
    rating: 5,
    review: 'Getting an offer letter instantly and a verifiable certificate was a game-changer. ByteLab truly delivers on its promise of a high-trust internship.',
    linkedin: 'https://linkedin.com/in/ananya-gupta',
    github: 'https://github.com/ananya-gupta',
    date: '2024-01-05',
  },
  {
    name: 'Arjun Patel',
    domain: 'Cloud Computing',
    rating: 5,
    review: 'The tasks were industry-relevant and helped me build a strong portfolio. The certificate verification process is seamless.',
    linkedin: 'https://linkedin.com/in/arjun-patel',
    github: 'https://github.com/arjun-patel',
    date: '2023-12-28',
  },
  {
    name: 'Sneha Reddy',
    domain: 'Cybersecurity',
    rating: 5,
    review: 'Excellent platform for learning cybersecurity. The GitHub-based validation ensures authenticity, and the certificate is well-recognized.',
    linkedin: 'https://linkedin.com/in/sneha-reddy',
    github: 'https://github.com/sneha-reddy',
    date: '2023-12-20',
  },
  {
    name: 'Vikram Kumar',
    domain: 'Machine Learning',
    rating: 5,
    review: 'The ML tasks were comprehensive and helped me understand real-world applications. The certificate added credibility to my profile.',
    linkedin: 'https://linkedin.com/in/vikram-kumar',
    github: 'https://github.com/vikram-kumar',
    date: '2023-12-15',
  },
];

export default function ReviewsPage() {
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <>
      <SchemaMarkup
        type="review"
        data={{
          questions: reviews.map(r => ({
            question: `${r.name}'s Review`,
            answer: r.review,
          })),
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <PageHero
          title="Student Reviews"
          description="Read what our students say about their virtual internship experience at ByteLab Infotech."
        />

        {/* Average Rating */}
        <ContentSection className="bg-slate-grey">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection variant="slideUp">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h2 className="text-h2 font-heading font-bold text-navy mb-4">
                  Overall Rating
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-8 h-8 ${
                          star <= Math.round(averageRating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-3xl font-bold text-navy ml-2">
                    {averageRating.toFixed(1)}
                  </span>
                </div>
                <p className="text-body-lg text-gray-600">
                  Based on {reviews.length} student reviews
                </p>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Reviews Grid */}
        <ContentSection title="Student Reviews" className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <AnimatedSection key={index} variant="slideUp">
                  <div className="bg-slate-grey rounded-xl p-6 border border-gray-100 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-h3 font-heading font-semibold text-navy mb-1">
                          {review.name}
                        </h3>
                        <p className="text-body-sm text-gray-600">{review.domain}</p>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-body text-gray-700 leading-relaxed mb-4 flex-1">
                      "{review.review}"
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <p className="text-body-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                      <div className="flex gap-2">
                        {review.linkedin && (
                          <a
                            href={review.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-electric-blue/10 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4 text-electric-blue" />
                          </a>
                        )}
                        {review.github && (
                          <a
                            href={review.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-electric-blue/10 rounded-lg flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="w-4 h-4 text-electric-blue" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </ContentSection>

        {/* CTA */}
        <ContentSection className="bg-navy text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-display font-heading font-bold text-white mb-6">
              Ready to Share Your Experience?
            </h2>
            <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
              Complete an internship and share your review to help other students make informed decisions.
            </p>
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
            >
              Start Your Internship
            </a>
          </div>
        </ContentSection>

        <Footer />
      </div>
    </>
  );
}

