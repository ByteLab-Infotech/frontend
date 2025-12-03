import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referral Program - Earn Rewards | ByteLab Infotech',
  description: 'Join ByteLab\'s referral program. Refer friends and earn rewards. Learn about referral rules, rewards structure, and how to get started.',
  authors: [{ name: 'ByteLab Infotech' }],
  creator: 'ByteLab Infotech',
  publisher: 'ByteLab Infotech',
  robots: 'index, follow',
  openGraph: {
    title: 'Referral Program - Earn Rewards | ByteLab Infotech',
    description: 'Join ByteLab\'s referral program. Refer friends and earn rewards. Learn about referral rules, rewards structure, and how to get started.',
    url: 'https://bytelab.com/referral-program',
    siteName: 'ByteLab Infotech',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referral Program - Earn Rewards | ByteLab Infotech',
    description: 'Join ByteLab\'s referral program. Refer friends and earn rewards. Learn about referral rules, rewards structure, and how to get started.',
    images: [],
  },
  alternates: {
    canonical: 'https://bytelab.com/referral-program',
  },
};

export default function ReferralProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

