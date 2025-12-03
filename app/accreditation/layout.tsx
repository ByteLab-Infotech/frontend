import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accreditation & Credibility - ByteLab Infotech | ByteLab Infotech',
  description: 'Learn about ByteLab Infotech\'s accreditation, MSME verification, certificate validation technologies, and process credibility.',
  authors: [{ name: 'ByteLab Infotech' }],
  creator: 'ByteLab Infotech',
  publisher: 'ByteLab Infotech',
  robots: 'index, follow',
  openGraph: {
    title: 'Accreditation & Credibility - ByteLab Infotech | ByteLab Infotech',
    description: 'Learn about ByteLab Infotech\'s accreditation, MSME verification, certificate validation technologies, and process credibility.',
    url: 'https://bytelab.com/accreditation',
    siteName: 'ByteLab Infotech',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accreditation & Credibility - ByteLab Infotech | ByteLab Infotech',
    description: 'Learn about ByteLab Infotech\'s accreditation, MSME verification, certificate validation technologies, and process credibility.',
    images: [],
  },
  alternates: {
    canonical: 'https://bytelab.com/accreditation',
  },
};

export default function AccreditationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

