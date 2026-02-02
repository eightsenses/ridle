'use client';
import { supabase } from '@/utils/supabase';
import AuthForm from '@/app/(auth)/_components/AuthForm';
import { AuthFormData } from '@/app/(auth)/_types/auth';
import AuthTextLink from '@/app/(auth)/_components/AuthTextLink';
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
    <section className="mx-auto grid w-full max-w-[480px] gap-8">
      <AuthForm onSubmit={handleSubmit} buttonText="ログイン" isShowName={false} />
      <div className="text-center text-[14px] font-normal leading-[1.6] tracking-[0.21px] text-semantic-text-gray">
        <AuthTextLink href={'/'}>パスワードを忘れた方はこちら</AuthTextLink>
      </div>
    </section>
  );
}
