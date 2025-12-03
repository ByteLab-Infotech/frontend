import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MSME Registration - ByteLab Infotech | ByteLab Infotech',
  description: 'ByteLab Infotech is an MSME registered company verified by the Government of India. View our MSME certificate and registration details.',
  authors: [{ name: 'ByteLab Infotech' }],
  creator: 'ByteLab Infotech',
  publisher: 'ByteLab Infotech',
  robots: 'index, follow',
  openGraph: {
    title: 'MSME Registration - ByteLab Infotech | ByteLab Infotech',
    description: 'ByteLab Infotech is an MSME registered company verified by the Government of India. View our MSME certificate and registration details.',
    url: 'https://bytelab.com/msme',
    siteName: 'ByteLab Infotech',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSME Registration - ByteLab Infotech | ByteLab Infotech',
    description: 'ByteLab Infotech is an MSME registered company verified by the Government of India. View our MSME certificate and registration details.',
    images: [],
  },
  alternates: {
    canonical: 'https://bytelab.com/msme',
  },
};

export default function MSMELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

