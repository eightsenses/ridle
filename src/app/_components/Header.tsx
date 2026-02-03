'use client';
import ModeToggle from '@/app/_components/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/assets/svg/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="sticky left-0 top-0 z-[9999px] w-full">
      <section className="relative py-4 md:py-4">
        <div className="absolute left-4 top-1/2 grid w-fit -translate-y-1/2 items-center md:left-8">
          <ModeToggle />
        </div>
        <div className="mx-auto w-[130px] lg:w-[160px]">
          <Link href="/" className="text-center">
            <Logo className="w-full" />
          </Link>
        </div>
        <div className="fixed flex items-center max-md:bottom-0 max-md:w-full md:absolute md:right-8 md:top-1/2 md:shrink-0 md:-translate-y-1/2 md:gap-4">
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
