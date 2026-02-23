'use client';
import { FC } from 'react';
import SideNav from '@/app/admin/_components/AdminSideNav';

const AdminLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="relative bg-semantic-background-dashboard lg:flex lg:h-screen lg:overflow-hidden">
      <SideNav />

      <section className="flex min-w-0 flex-1 flex-col overflow-y-auto p-6 md:p-10 xl:p-12">
        {children}
      </section>
    </section>
  );
};
export default AdminLayout;
