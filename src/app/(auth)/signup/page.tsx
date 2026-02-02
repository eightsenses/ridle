'use client';
import { supabase } from '@/utils/supabase';
import AuthForm from '@/app/(auth)/_components/AuthForm';
import AuthTextLink from '@/app/(auth)/_components/AuthTextLink';
import { AuthFormData } from '@/app/(auth)/_types/auth';
import toast from 'react-hot-toast';
import PageHeader from '@/app/_components/PageHeader';

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
    <section className="mx-auto grid w-full max-w-[480px] gap-8">
      <PageHeader title="会員登録" text="今日の波も、自分の成長も記録！かんたん・無料で始めよう" />
      <AuthForm onSubmit={handleSubmit} buttonText="会員登録" />
      <div className="text-center text-[14px] font-normal leading-[1.6] tracking-[0.21px] text-semantic-text-gray">
        もうアカウント持ってる？
        <br />
        <AuthTextLink href={'/login'}>ログインはこちら</AuthTextLink>
      </div>
    </section>
  );
}
