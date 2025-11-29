'use client';

import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaMarkupProps {
  type: 'breadcrumb' | 'article' | 'faq' | 'organization' | 'person' | 'review';
  data: any;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const generateSchema = () => {
    switch (type) {
      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items.map((item: BreadcrumbItem, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline,
          description: data.description,
          author: {
            '@type': 'Organization',
            name: 'ByteLab Infotech',
          },
          publisher: {
            '@type': 'Organization',
            name: 'ByteLab Infotech',
            logo: {
              '@type': 'ImageObject',
              url: 'https://bytelab.com/logo.png',
            },
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          image: data.image,
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.questions.map((q: { question: string; answer: string }) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })),
        };

      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ByteLab Infotech',
          url: 'https://bytelab.com',
          logo: 'https://bytelab.com/logo.png',
          description: data.description,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
          },
          sameAs: data.socialLinks || [],
        };

      case 'person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: data.name,
          jobTitle: data.jobTitle,
          description: data.description,
          image: data.image,
          url: data.url,
        };

      case 'review':
        return {
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'ByteLab Virtual Internship',
          },
          author: {
            '@type': 'Person',
            name: data.authorName,
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: data.rating,
            bestRating: 5,
          },
          reviewBody: data.reviewText,
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

