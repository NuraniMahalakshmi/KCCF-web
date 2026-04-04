import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title:
    'KCCF Family - Meet Our Brave Warriors | Koenig Childhood Cancer Foundation',
  description:
    "Meet the incredible children and families whose lives have been touched by KCCF's support. See the real impact of our programs on families battling childhood cancer.",
  keywords: [
    'KCCF family',
    'brave warriors',
    'childhood cancer',
    'cancer families',
    'survivors',
    'warriors',
    'impact stories',
  ],
  openGraph: {
    title:
      'KCCF Family - Meet Our Brave Warriors | Koenig Childhood Cancer Foundation',
    description:
      "Meet the incredible children and families whose lives have been touched by KCCF's support. See the real impact of our programs on families battling childhood cancer.",
    type: 'website',
    url: process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/kccf-family`
      : 'https://thekccf.org/kccf-family',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KCCFFamilyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
