import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '新規登録',
  alternates: {
    canonical: '/signup'
  },
  openGraph: {
    url: '/signup'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
