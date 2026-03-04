import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約',
  alternates: {
    canonical: '/terms'
  },
  openGraph: {
    url: '/terms'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
