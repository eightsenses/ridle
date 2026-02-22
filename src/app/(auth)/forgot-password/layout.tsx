import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'パスワードを忘れた方',
  alternates: {
    canonical: '/forgot-password'
  },
  openGraph: {
    url: '/forgot-password'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
