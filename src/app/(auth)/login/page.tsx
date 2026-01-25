'use client';
import { supabase } from '@/utils/supabase';
import AuthForm from '@/app/(auth)/_components/AuthForm';
import { AuthFormData } from '@/app/(auth)/_types/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Login() {
  const router = useRouter();

  const handleSubmit = async (data: AuthFormData) => {
    const { email, password } = data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      toast.error('ログインに失敗しました');
      return;
    }

    // ログイン成功後にProfileを作成
    try {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      const token = session?.access_token;

      if (!token) {
        throw new Error('セッション取得エラー');
      }

      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      if (res.ok) {
        router.replace('/admin');
      }
    } catch (error) {
      console.error('エラーが発生しました', error);
    }
  };

  return (
    <div className="mx-auto grid max-w-[480px]">
      <AuthForm onSubmit={handleSubmit} buttonText="ログイン" isShowName={false} />
    </div>
  );
}
