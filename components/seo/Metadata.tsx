import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export function generateMetadata({
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

  return {
    title: fullTitle,
    description,
    keywords: defaultKeywords.join(', '),
    authors: [{ name: 'ByteLab Infotech' }],
    creator: 'ByteLab Infotech',
    publisher: 'ByteLab Infotech',
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || 'https://bytelab.com',
      siteName: 'ByteLab Infotech',
      images: ogImage ? [{ url: ogImage }] : [],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: canonical || 'https://bytelab.com',
    },
  };
}

