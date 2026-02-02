'use client';
import { supabase } from '@/utils/supabase';
import AuthForm from '@/app/(auth)/_components/AuthForm';
import { AuthFormData } from '@/app/(auth)/_types/auth';
import AuthTextLink from '@/app/(auth)/_components/AuthTextLink';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Logo from '@/assets/svg/logo.svg';
import Link from 'next/link';

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
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-[4fr_6fr]">
      <div className="relative hidden bg-[url('/images/signup-bg.webp')] bg-cover bg-center md:block">
        <div className="absolute inset-0 bg-black/5" />
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <div className="grid w-full max-w-[480px] gap-8">
          <div className="mx-auto grid w-[130px] gap-4 lg:w-[160px]">
            <Link href="/" className="text-center">
              <Logo className="w-full" />
            </Link>
            <h1 className="text-center text-lg font-bold text-semantic-background-default">
              ログイン
            </h1>
          </div>
          <AuthForm onSubmit={handleSubmit} buttonText="ログイン" isShowName={false} />
          <div className="text-center text-[14px] font-normal leading-[1.6] tracking-[0.21px] text-semantic-text-gray">
            <AuthTextLink href={'/'}>パスワードを忘れた方はこちら</AuthTextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
