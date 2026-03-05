'use client';
import AdminHeader from '@/app/admin/_components/AdminHeader';
import AdminMain from '@/app/admin/_components/AdminMain';
import SessionForm from '@/app/admin/session/_components/SessionForm';
import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import { useRouter } from 'next/navigation';
import { SessionFormData } from '@/schemas/session';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

export default function CreateSession() {
  const router = useRouter();
  const { token } = useSupabaseSession();

  const handleSubmit = async (data: SessionFormData) => {
    if (!token) return;
    try {
      const res = await fetch('/api/admin/sessions', {
        method: 'POST',
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
        toast.success('セッション記録を登録しました');
      } else {
        throw new Error(resData.status);
      }
    } catch (e) {
      toast.error('セッション記録の登録に失敗しました');
      throw e;
    }
  };
  return (
    <>
      <AdminHeader title="セッション記録を作成" />
      <AdminMain className="admin-main">
        <SessionForm onSubmit={handleSubmit} buttonText="登録する" isCancelButton={true} />
      </AdminMain>
    </>
  );
}
