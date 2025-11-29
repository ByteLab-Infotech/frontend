import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/Metadata';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { PageHero } from '@/components/sections/PageHero';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { NewsletterCTA } from '@/components/blog/NewsletterCTA';
import { blogPosts } from '@/data/blog-posts';
import { BookOpen } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Blog - Virtual Internship Insights & Guides',
  description: 'Read expert articles on virtual internships, career development, GitHub, web development, and student success. Learn from ByteLab\'s comprehensive guides.',
  keywords: ['internship blog', 'career guide', 'github tutorial', 'web development guide', 'student success'],
  canonical: 'https://bytelab.com/blog',
});

const categories = ['All', 'Career Guide', 'Learning', 'Projects', 'Industry', 'Tutorial'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <PageHero
        title="ByteLab Blog"
        description="Expert insights, guides, and resources to help you succeed in your virtual internship and build a successful tech career."
        icon={<BookOpen className="w-10 h-10 text-electric-blue" />}
      />

      {/* Blog Posts Grid */}
      <ContentSection className="bg-white">
        <BlogGrid posts={blogPosts} />
      </ContentSection>

      {/* Newsletter CTA */}
      <ContentSection className="bg-navy text-white">
        <NewsletterCTA />
      </ContentSection>
    </div>
  );
}

