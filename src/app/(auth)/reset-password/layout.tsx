import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'パスワード再設定',
  alternates: {
    canonical: '/reset-password'
  },
  openGraph: {
    url: '/reset-password'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
