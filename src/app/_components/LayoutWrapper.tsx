'use client';

import { usePathname } from 'next/navigation';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import ModeToggle from '@/app/_components/ModeToggle';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSignup = pathname === '/signup';

  return isSignup ? (
    <>
      <div className="fixed left-3 top-4 z-[9999] md:left-8">
        <ModeToggle />
      </div>
      <main className="main signup">{children}</main>
    </>
  ) : (
    <>
      <Header />
      <main className="main flex flex-1 items-center px-6 md:justify-center">{children}</main>
      <Footer />
    </>
  );
}
