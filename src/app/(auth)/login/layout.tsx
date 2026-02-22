import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログイン',
  alternates: {
    canonical: '/login'
  },
  openGraph: {
    url: '/login'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
