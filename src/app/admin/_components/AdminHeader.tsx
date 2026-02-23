'use client';
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface AdminHeaderProps {
  title: string;
  className?: string;
}

const AdminHeader: FC<AdminHeaderProps> = ({ title, className }) => {
  return (
    <header className={cn('mb-5 border-b border-semantic-background-gray pb-5 lg:mb-8', className)}>
      <h1 className={cn('text-2xl font-semibold text-semantic-text-primary', className)}>
        {title}
      </h1>
    </header>
  );
};
export default AdminHeader;
