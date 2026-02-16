'use client';
import { supabase } from '@/utils/supabase';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, type ResetPasswordFormData } from '@/schemas/auth';
import { InputField, SubmitButton } from '@/app/_components/form';
import toast from 'react-hot-toast';
import PageHeader from '@/app/_components/PageHeader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const router = useRouter();
  const [isCheck, setIsCheck] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema)
  });

  useEffect(() => {
    const checkAccess = async () => {
      // セッションチェック
      const {
        data: { session }
      } = await supabase.auth.getSession();
      if (!session) {
        toast.error('無効なアクセスです。パスワードリセットを再度お試しください。');
        router.replace('/forgot-password');
        return;
      }

      setIsCheck(false);
    };

    checkAccess();
  }, [router]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    const { error } = await supabase.auth.updateUser({
      password: data.password
    });

    if (error) {
      toast.error('パスワードの更新に失敗しました');
    } else {
      toast.success('パスワードを更新しました。新しいパスワードでログインしてください。');
      await supabase.auth.signOut();
      router.replace('/login');
    }
  };

  if (isCheck) {
    return null;
  }

  return (
    <section className="mx-auto grid w-full max-w-[480px] gap-8">
      <PageHeader
        title="パスワード再設定"
        text="新しいパスワードを入力して更新を完了してください"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-6">
        <InputField
          label="新しいパスワード"
          type="password"
          placeholder="パスワード"
          field="password"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.password?.message}
        />
        <InputField
          label="パスワード（確認）"
          type="password"
          placeholder="パスワード"
          field="confirmPassword"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.confirmPassword?.message}
        />
        <SubmitButton type="submit" isSubmitting={isSubmitting}>
          更新する
        </SubmitButton>
      </form>
    </section>
  );
}
