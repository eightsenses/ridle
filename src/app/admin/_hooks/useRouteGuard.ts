import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useRouteGuard = () => {
  const router = useRouter();
  const { session, isLoading } = useSupabaseSession();

  useEffect(() => {
    if (isLoading) return;
    if (session === null) {
      router.replace('/login');
    }
  }, [router, session, isLoading]);

  return { session, isLoading };
};
