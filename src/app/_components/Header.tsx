'use client';
import { FC } from 'react';
import ModeToggle from '@/app/_components/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/assets/svg/logo.svg';

const Header: FC = () => {
  return (
    <header className="sticky left-0 top-0 z-[9999] w-full">
      <section className="relative mx-4 py-4 md:mx-8">
        <div className="absolute top-1/2 grid w-fit -translate-y-1/2 items-center">
          <ModeToggle />
        </div>
        <div className="mx-auto w-[110px] lg:w-[160px]">
          <Link href="/" className="text-center">
            <Logo className="w-full" />
          </Link>
        </div>
        <div className="fixed right-0 flex w-screen items-center max-md:bottom-0 max-md:w-full md:absolute md:top-1/2 md:w-fit md:shrink-0 md:-translate-y-1/2 md:gap-4">
          <Button asChild size="sm" className="py-3 text-center max-md:w-1/2 max-md:rounded-none">
            <Link href="/signup">新規登録</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="py-3 text-center shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] max-md:w-1/2 max-md:rounded-none"
          >
            <Link href="/login">ログイン</Link>
          </Button>
        </div>
      </section>
    </header>
  );
};
export default Header;
