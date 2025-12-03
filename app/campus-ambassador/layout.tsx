import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campus Ambassador Program - Join ByteLab | ByteLab Infotech',
  description: 'Become a ByteLab Campus Ambassador. Represent ByteLab on your campus, help fellow students, and earn rewards. Apply now for the CA program.',
  authors: [{ name: 'ByteLab Infotech' }],
  creator: 'ByteLab Infotech',
  publisher: 'ByteLab Infotech',
  robots: 'index, follow',
  openGraph: {
    title: 'Campus Ambassador Program - Join ByteLab | ByteLab Infotech',
    description: 'Become a ByteLab Campus Ambassador. Represent ByteLab on your campus, help fellow students, and earn rewards. Apply now for the CA program.',
    url: 'https://bytelab.com/campus-ambassador',
    siteName: 'ByteLab Infotech',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campus Ambassador Program - Join ByteLab | ByteLab Infotech',
    description: 'Become a ByteLab Campus Ambassador. Represent ByteLab on your campus, help fellow students, and earn rewards. Apply now for the CA program.',
    images: [],
  },
  alternates: {
    canonical: 'https://bytelab.com/campus-ambassador',
  },
};

export default function CampusAmbassadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

