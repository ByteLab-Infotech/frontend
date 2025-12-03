import { Metadata } from 'next';
import { createMetadata } from '@/components/seo/Metadata';
import { blogPosts, getBlogPost } from '@/data/blog-posts';

interface BlogPostLayoutProps {
  params: Promise<{
    slug: string;
  }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return createMetadata({
      title: 'Blog Post Not Found',
      description: 'The requested blog post was not found.',
    });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    canonical: `https://bytelab.com/blog/${post.slug}`,
  });
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return <>{children}</>;
}

