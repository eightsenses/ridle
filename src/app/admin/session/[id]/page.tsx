'use client';
import AdminHeader from '@/app/admin/_components/AdminHeader';
import AdminMain from '@/app/admin/_components/AdminMain';
import SessionForm from '@/app/admin/session/_components/SessionForm';
import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import { useRouter } from 'next/navigation';
import { SessionFormData } from '@/schemas/session';
import { Session } from '@/types/session';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import useSWR from 'swr';
import Loader from '@/app/_components/Loader';
import StatusMessage from '@/app/_components/StatusMessage';
import { parseRating } from '@/utils/rating';

//useSWRを使用して/session/idをフェッチするカスタムフック
const useSessionDetail = (id: string, token?: string | null) => {
  const fetcher = async (url: string) => {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('セッションの取得に失敗しました');
    const data = await res.json();
    return data.session;
  };
  return useSWR<Session>(token ? `/api/admin/sessions/${id}` : null, fetcher);
};

//セッション編集・削除
export default function EditSession({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { token } = useSupabaseSession();
  const { data: session, error } = useSessionDetail(params.id, token);

  if (error) return <StatusMessage message="セッションの取得に失敗しました" />;
  if (!session) return <Loader />;

  const defaultValues: SessionFormData = {
    date: new Date(session.date),
    spotId: session.spotId,
    surfTimeMinutes: session.surfTimeMinutes,
    rideCount: session.rideCount,
    challengeNote: session.challengeNote || '',
    ratings: parseRating(session.ratings)
  };

  //セッション編集
  const handleSubmit = async (data: SessionFormData) => {
    if (!token) return;
    try {
      const res = await fetch(`/api/admin/sessions/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ...data,
          date: format(data.date, 'yyyy-MM-dd')
        })
      });

      const resData = await res.json();

      if (res.ok) {
        router.push(`/admin/session/${resData.session.id}`);
        toast.success('セッション記録を更新しました');
      } else {
        toast.error(`セッション記録の更新に失敗しました: ${resData.status}`);
      }
    } catch {
      toast.error('セッション更新の登録に失敗しました');
    }
  };
  //セッション削除
  const handleDelete = async () => {
    if (!token) return;
    if (!window.confirm('このセッションを削除しますか？')) return;
    try {
      const res = await fetch(`/api/admin/sessions/${params.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      if (res.ok) {
        toast.success('セッション記録を削除しました');
        router.push('/admin/session');
      } else {
        toast.error('セッション記録の削除に失敗しました');
      }
    } catch {
      toast.error('セッション記録の削除に失敗しました');
    }
  };

  return (
    <>
      <AdminHeader title="セッション記録を編集" />
      <AdminMain className="admin-main">
        <SessionForm
          defaultValues={defaultValues}
          initialImageUrl={session.thumbnailImageUrl}
          onSubmit={handleSubmit}
          buttonText="更新する"
          onDelete={handleDelete}
        />
      </AdminMain>
    </>
  );
}
