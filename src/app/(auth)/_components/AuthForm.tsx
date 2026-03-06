'use client';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthFormData } from '@/app/(auth)/_types/auth';
import { signupSchema, loginSchema, type SignupFormData, type LoginFormData } from '@/schemas/auth';
import { InputField, SubmitButton } from '@/app/_components/form';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

interface AuthFormProps {
  onSubmit: (data: SignupFormData | LoginFormData) => Promise<void>;
  buttonText: string;
  isShowName?: boolean;
}

const AuthForm: FC<AuthFormProps> = ({ onSubmit, buttonText, isShowName = true }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AuthFormData>({
    resolver: zodResolver(isShowName ? signupSchema : loginSchema)
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await onSubmit(data);
          reset();
        } catch {
          /* 親側でエラーハンドリング（トースト表示） */
        }
      })}
      className="grid w-full gap-6"
    >
      {isShowName && (
        <div className="w-full">
          <InputField
            label="ユーザーネーム"
            type="text"
            placeholder="ニックネームを入力"
            field="name"
            register={register}
            isSubmitting={isSubmitting}
            error={errors.name?.message}
          />
        </div>
      )}
      <div>
        <InputField
          label="メールアドレス"
          type="email"
          field="email"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.email?.message}
        />
      </div>

      <div>
        <InputField
          label="パスワード"
          type="password"
          field="password"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.password?.message}
        />
      </div>

      {isShowName && (
        <div className="my-3 md:text-center">
          <label className="flex w-fit items-start gap-2 text-sm md:mx-auto">
            <Controller
              name="agreeToTerms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                  disabled={isSubmitting}
                />
              )}
            />
            <span>
              <Link href="/terms" target="_blank" className="text-primary hover:underline">
                利用規約
              </Link>
              と
              <Link href="/privacy" target="_blank" className="text-primary hover:underline">
                プライバシーポリシー
              </Link>
              に同意する
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="mt-1 text-sm text-semantic-text-danger">{errors.agreeToTerms.message}</p>
          )}
        </div>
      )}

      <SubmitButton type="submit" isSubmitting={isSubmitting}>
        {buttonText}
      </SubmitButton>
    </form>
  );
};
export default AuthForm;
