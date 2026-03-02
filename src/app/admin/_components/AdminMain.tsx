'use client';
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface AdminMainProps {
  children: React.ReactNode;
  className?: string;
}

const AdminMain: FC<AdminMainProps> = ({ children, className }) => {
  return <main className={cn(className)}>{children}</main>;
};
export default AdminMain;
