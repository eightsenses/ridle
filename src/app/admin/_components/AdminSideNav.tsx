'use client';
import { FC } from 'react';
import ModeToggle from '@/app/_components/ModeToggle';
import Link from 'next/link';
import Logo from '@/assets/svg/logo.svg';
import AdminNavItem from '@/app/admin/_components/AdminNavItem';
import { Home, MapPin, Waves, Users, Settings } from 'lucide-react';

export const ADMIN_NAV_ITEMS = [
  {
    href: '/admin',
    icon: Home,
    label: 'ダッシュボード'
  },
  {
    href: '/admin/area',
    icon: MapPin,
    label: 'エリア選択'
  },
  {
    href: '/admin/session',
    icon: Waves,
    label: 'セッション'
  },
  {
    href: '/admin/friend',
    icon: Users,
    label: '友だち'
  },
  {
    href: '/admin/setting',
    icon: Settings,
    label: '設定'
  }
];

const AdminSideNav: FC = () => {
  return (
    <aside className="relative w-full items-center bg-semantic-background-thin p-4 lg:flex lg:h-screen lg:w-72 lg:flex-col lg:p-8">
      <div className="mx-auto w-[110px]">
        <Link href="/admin" className="text-center">
          <Logo className="w-full" />
        </Link>
      </div>
      <nav className="fixed bottom-0 z-[999] -ml-4 w-full bg-semantic-background-thin lg:relative lg:ml-0 lg:mt-6">
        <ul className="flex w-full justify-between md:gap-[2px] lg:flex-col">
          {ADMIN_NAV_ITEMS.map((item, idx) => (
            <li key={idx} className="flex-1">
              <AdminNavItem {...item} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-center lg:static lg:mt-auto lg:w-full lg:translate-y-0 lg:border-t lg:border-semantic-background-subtle lg:pt-8">
        <ModeToggle />
      </div>
    </aside>
  );
};
export default AdminSideNav;
