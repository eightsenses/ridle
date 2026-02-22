import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    url: '/contact'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
