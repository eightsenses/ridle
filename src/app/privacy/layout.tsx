import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '個人情報の取扱いについて',
  alternates: {
    canonical: '/privacy'
  },
  openGraph: {
    url: '/privacy'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
