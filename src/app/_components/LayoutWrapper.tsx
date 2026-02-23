'use client';

import { usePathname } from 'next/navigation';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import ModeToggle from '@/app/_components/ModeToggle';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return <>{children}</>;
  }

  if (isLoginPage) {
    return (
      <>
        <div className="fixed left-4 top-7 z-[9999] md:left-8 md:top-[35px]">
          <ModeToggle />
        </div>
        <main className="main login">{children}</main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="main flex flex-1 items-center px-6 md:justify-center">{children}</main>
      <Footer />
    </>
  );
}
