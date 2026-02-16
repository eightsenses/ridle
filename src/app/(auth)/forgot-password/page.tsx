'use client';
import { supabase } from '@/utils/supabase';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '@/schemas/auth';
import { InputField, SubmitButton } from '@/app/_components/form';
import AuthTextLink from '@/app/(auth)/_components/AuthTextLink';
import toast from 'react-hot-toast';
import PageHeader from '@/app/_components/PageHeader';

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}/reset-password`
    });

    if (error) {
      toast.error('メール送信に失敗しました');
    } else {
      toast.success('パスワードリセットメールを送信しました。メールをご確認ください。');
      reset();
    }
  };

  return (
    <section className="mx-auto grid w-full max-w-[480px] gap-8">
      <PageHeader
        title="パスワードを忘れた方"
        text="登録したアドレスに、リセット用のメールをお送りします"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-6">
        <InputField
          label="メールアドレス"
          type="email"
          placeholder="メールアドレス"
          field="email"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.email?.message}
        />

        <SubmitButton type="submit" isSubmitting={isSubmitting}>
          送信する
        </SubmitButton>
      </form>
      <div className="text-center text-sm font-normal leading-[1.6] tracking-[0.21px] text-semantic-text-gray">
        <AuthTextLink href="/login">ログインに戻る</AuthTextLink>
      </div>
    </section>
  );
}
