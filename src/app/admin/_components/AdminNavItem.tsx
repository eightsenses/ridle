'use client';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminNavItemProps {
  href: string;
  className?: string;
  icon: LucideIcon;
  label: string;
}

const AdminNavItem: FC<AdminNavItemProps> = ({ href, className, icon: Icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex w-full items-center gap-2 px-2 py-4 transition-colors duration-300 hover:bg-semantic-background-subtle max-lg:flex-col lg:rounded-sm lg:px-4',
        isActive && 'bg-semantic-background-primary hover:bg-semantic-background-primary',
        className
      )}
    >
      <Icon className={cn('tw-6 h-6', isActive && 'text-semantic-text-white', className)} />
      <span
        className={cn(
          'whitespace-nowrap text-[10px] font-semibold lg:text-base',
          isActive && 'text-semantic-text-white',
          className
        )}
      >
        {label}
      </span>
    </Link>
  );
};
export default AdminNavItem;
