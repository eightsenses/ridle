'use client';
import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CtaButtonProps {
  label: string;
  href: string;
  className?: string;
}

const CtaButton: FC<CtaButtonProps> = ({ label, href, className }) => {
  return (
    <Button asChild size="lg" className={cn('text-md mt-12 block py-5 text-center', className)}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
export default CtaButton;
