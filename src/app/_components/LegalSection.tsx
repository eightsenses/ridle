'use client';
import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface LegalSectionProps {
  title: string;
  content: ReactNode;
  className?: string;
}

const LegalSection: FC<LegalSectionProps> = ({ title, content, className }) => {
  return (
    <section className={cn(className)}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {content}
    </section>
  );
};
export default LegalSection;
