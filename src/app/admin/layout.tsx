'use client';
import Loader from '@/app/_components/Loader';
import AdminLayout from '@/app/admin/_components/AdminLayoutWrapper';
import { useRouteGuard } from '@/app/admin/_hooks/useRouteGuard';

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  const { isLoading, session } = useRouteGuard();
  if (isLoading || !session) return <Loader isFullPage={true} />;

  return <AdminLayout>{children}</AdminLayout>;
}
