'use client';

import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import type { BlogPost } from '@/data/blog-posts';

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export default function BlogPostContent({ post, relatedPosts = [] }: BlogPostContentProps) {
  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          image: post.image || `https://bytelab.com/blog/${post.slug}.jpg`,
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-slate-grey to-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-electric-blue hover:underline mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-hero font-heading font-bold text-navy mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-body text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              
              {post.image && (
                <div className="aspect-video bg-slate-grey rounded-xl overflow-hidden mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <ContentSection className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-navy prose-code:text-electric-blue prose-code:bg-slate-grey prose-code:px-2 prose-code:py-1 prose-code:rounded"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.article>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-grey text-gray-700 text-sm font-medium rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center gap-4">
                <span className="text-body font-medium text-gray-700">Share:</span>
                <button className="p-2 bg-slate-grey rounded-lg hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <ContentSection title="Related Articles" className="bg-slate-grey">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-h3 font-heading font-semibold text-navy mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-body-sm text-gray-600 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </ContentSection>
        )}
      </div>
    </>
  );
}

