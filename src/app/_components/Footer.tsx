'use client';
import Link from 'next/link';
import X from '@/assets/svg/x-icon.svg';
import Insta from '@/assets/svg/insta-icon.svg';
const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const socialUrls = {
    x: 'https://x.com',
    insta: 'https://www.instagram.com'
  };

  return (
    <footer className="flex w-full items-center justify-between px-6 py-8 max-md:pb-4xl md:px-8">
      <p className="text-right text-[14px] font-normal leading-none tracking-widest text-semantic-text-default">
        &copy;{year} Ridle
      </p>
      <div className="flex shrink-0 items-center gap-3">
        <Link
          href="/contact"
          className="mr-2 text-right text-[14px] font-normal leading-none text-semantic-text-default hover:underline"
        >
          お問い合わせ
        </Link>
        <a href={socialUrls.x} aria-label="Xページ" target="_blank">
          <X className="h-4 w-4 transition-opacity duration-300 hover:opacity-70" />
        </a>
        <a href={socialUrls.insta} aria-label="Instagramページ" target="_blank">
          <Insta className="rtansition-opacity h-4 w-4 duration-300 hover:opacity-70" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
