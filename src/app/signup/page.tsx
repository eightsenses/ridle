'use client';
import { useState } from 'react';
import { supabase } from '@/utils/supabase';
import AuthForm from '@/app/_components/AuthForm';
import { AuthFormData } from '@/app/_types/auth';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Signup() {
  const [reset, setReset] = useState(0);

  const handleSubmit = async (data: AuthFormData) => {
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
      setReset((prev) => prev + 1);
    }
  };

  return (
    <div className="mx-auto grid max-w-[480px] gap-8">
      <AuthForm key={reset} onSubmit={handleSubmit} buttonText="会員登録" />
      <div className="text-center text-[14px] font-normal leading-[1.6] tracking-[0.21px] text-semantic-text-gray">
        もうアカウント持ってる？
        <br />
        <Link className="text-semantic-text-primary underline hover:no-underline" href="/login">
          ログインはこちら
        </Link>
      </div>
    </div>
  );
}
