'use client';
import { cn } from '@/lib/utils';
import { FC } from 'react';

interface PageHeaderProps {
  message: string;
  className?: string;
}

const StatusMessage: FC<PageHeaderProps> = ({ message, className }) => {
  return <div className={cn('mt-6 text-center', className)}>{message}</div>;
};
export default StatusMessage;
