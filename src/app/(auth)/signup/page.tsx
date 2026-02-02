'use client';
import { supabase } from '@/utils/supabase';
import AuthForm from '@/app/(auth)/_components/AuthForm';
import AuthTextLink from '@/app/(auth)/_components/AuthTextLink';
import { AuthFormData } from '@/app/(auth)/_types/auth';
import toast from 'react-hot-toast';
import Logo from '@/assets/svg/logo.svg';
import Link from 'next/link';

export default function Signup() {
  const handleSubmit = async (data: AuthFormData, reset: () => void) => {
    const { name, email, password } = data;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/login`,
        data: {
          userName: name
        }
      }
    });
    if (error) {
      toast.error('会員登録に失敗しました');
    } else {
      toast.success('確認メールを送信しました。メールをご確認ください。');
      reset();
    }
  };

  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-[4fr_6fr]">
      <div className="relative hidden bg-[url('/images/signup-bg.webp')] bg-cover bg-center md:block">
        <div className="absolute inset-0 bg-black/5" />
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <div className="grid w-full max-w-[480px] gap-8">
          <div className="mx-auto w-[130px] lg:w-[160px]">
            <Link href="/" className="text-center">
              <Logo className="w-full" />
            </Link>
          </div>
          <AuthForm onSubmit={handleSubmit} buttonText="会員登録" />
          <div className="text-center text-[14px] font-normal leading-[1.6] tracking-[0.21px] text-semantic-text-gray">
            もうアカウント持ってる？
            <br />
            <AuthTextLink href={'/login'}>ログインはこちら</AuthTextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
