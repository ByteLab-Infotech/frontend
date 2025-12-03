import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offer Letter Sample - View Sample Offer Letter | ByteLab Infotech',
  description: 'View a sample ByteLab Infotech offer letter. See what your official internship offer letter will look like with all key features highlighted.',
  authors: [{ name: 'ByteLab Infotech' }],
  creator: 'ByteLab Infotech',
  publisher: 'ByteLab Infotech',
  robots: 'index, follow',
  openGraph: {
    title: 'Offer Letter Sample - View Sample Offer Letter | ByteLab Infotech',
    description: 'View a sample ByteLab Infotech offer letter. See what your official internship offer letter will look like with all key features highlighted.',
    url: 'https://bytelab.com/offer-letter-sample',
    siteName: 'ByteLab Infotech',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offer Letter Sample - View Sample Offer Letter | ByteLab Infotech',
    description: 'View a sample ByteLab Infotech offer letter. See what your official internship offer letter will look like with all key features highlighted.',
    images: [],
  },
  alternates: {
    canonical: 'https://bytelab.com/offer-letter-sample',
  },
};

export default function OfferLetterSampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

