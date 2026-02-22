'use client';
import { cn } from '@/lib/utils';
import { FC } from 'react';

interface PageHeaderProps {
  title: string;
  text?: string;
  className?: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, text, className }) => {
  return (
    <div className="mt-4 grid gap-4">
      <h1 className={cn('text-center text-4xl font-bold', className)}>{title}</h1>
      <p className={cn('text-semantic-text-gray md:text-center', className)}>{text}</p>
    </div>
  );
};
export default PageHeader;
