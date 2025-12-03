import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export function createMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  canonical,
  noindex = false,
}: MetadataProps): Metadata {
  const fullTitle = `${title} | ByteLab Infotech`;
  const defaultKeywords = [
    'virtual internships',
    'online internship program',
    'internship with certificate',
    'GitHub tasks internships',
    'MSME verified internship',
    'virtual internship India',
    'online internship certificate',
    'GitHub-based internship',
    'verified internship program',
    ...keywords,
  ];

  const keywordsString = defaultKeywords.join(', ');
  const canonicalUrl = canonical || 'https://bytelab.com';
  const robotsValue = noindex ? 'noindex, nofollow' : 'index, follow';
  
  // Create plain object literal to ensure full serializability
  // Note: 'keywords' is not a standard Next.js Metadata field, so we omit it
  const metadata: Metadata = {
    title: fullTitle,
    description: description,
    authors: [{ name: 'ByteLab Infotech' }],
    creator: 'ByteLab Infotech',
    publisher: 'ByteLab Infotech',
    robots: robotsValue,
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonicalUrl,
      siteName: 'ByteLab Infotech',
      images: ogImage ? [{ url: ogImage }] : [],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };

  return metadata;
}

// Keep generateMetadata as an alias for backward compatibility
export const generateMetadata = createMetadata;

