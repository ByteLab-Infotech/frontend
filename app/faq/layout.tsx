import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - FAQ | ByteLab Infotech',
  description: 'Find answers to common questions about ByteLab virtual internships, certificate verification, payment, batch system, GitHub process, and more.',
  authors: [{ name: 'ByteLab Infotech' }],
  creator: 'ByteLab Infotech',
  publisher: 'ByteLab Infotech',
  robots: 'index, follow',
  openGraph: {
    title: 'Frequently Asked Questions - FAQ | ByteLab Infotech',
    description: 'Find answers to common questions about ByteLab virtual internships, certificate verification, payment, batch system, GitHub process, and more.',
    url: 'https://bytelab.com/faq',
    siteName: 'ByteLab Infotech',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions - FAQ | ByteLab Infotech',
    description: 'Find answers to common questions about ByteLab virtual internships, certificate verification, payment, batch system, GitHub process, and more.',
    images: [],
  },
  alternates: {
    canonical: 'https://bytelab.com/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

