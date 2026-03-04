'use client';
import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface LegalSectionProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

const LegalSection: FC<LegalSectionProps> = ({ title, children, className }) => {
  return (
    <section className={cn(className)}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
};
export default LegalSection;
