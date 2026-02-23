import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAuthGuard = () => {
  const router = useRouter();
  const { session, isLoading } = useSupabaseSession();

  useEffect(() => {
    if (isLoading) return;
    if (session) router.replace('/admin');
  }, [router, session, isLoading]);

  return { session, isLoading };
};
