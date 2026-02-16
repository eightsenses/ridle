'use client';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface CtaButtonProps {
  label: string;
  href: string;
  className?: string;
}

const CtaButton: FC<CtaButtonProps> = ({ label, href, className }) => {
  return (
    <Button
      asChild
      size="lg"
      className={twMerge('text-md mt-12 block py-5 text-center', className)}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
export default CtaButton;
