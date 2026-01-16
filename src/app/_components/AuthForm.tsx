'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthFormData } from '@/app/_types/auth';

const signupSchema = z.object({
  name: z.string().min(1, 'ユーザーネームは必須です'),
  email: z
    .string()
    .min(1, 'メールアドレスは必須です')
    .email({ message: '有効なメールアドレスを入力してください' }),
  password: z
    .string()
    .min(1, 'パスワードは必須です')
    .min(6, 'パスワードは6文字以上で入力してください')
});

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'メールアドレスは必須です')
    .email({ message: '有効なメールアドレスを入力してください' }),
  password: z.string().min(1, 'パスワードは必須です')
});

type SignupFormData = z.infer<typeof signupSchema>;
type LoginFormData = z.infer<typeof loginSchema>;

interface AuthFormProps {
  onSubmit: (data: SignupFormData | LoginFormData) => void;
  buttonText: string;
  isShowName?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, buttonText, isShowName = true }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<AuthFormData>({
    resolver: zodResolver(isShowName ? signupSchema : loginSchema)
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-6">
      {isShowName && (
        <div>
          <label className="mb-2 block text-[14px] font-medium text-[var(--colors-semantic-text-default)]">
            ユーザーネーム
          </label>
          <input
            type="text"
            placeholder="ニックネームを入力"
            {...register('name')}
            className="w-full rounded-md border border-[var(--colors-semantic-border-default)] bg-white px-4 py-3 text-[16px] leading-normal text-[var(--colors-semantic-text-black)] placeholder:text-[var(--colors-semantic-text-placeholder)] focus:border-[var(--colors-semantic-border-focus)] focus:outline-none"
          />
          {errors.name && <p className="mt-1 text-[14px] text-red-700">{errors.name.message}</p>}
        </div>
      )}
      <div>
        <label className="mb-2 block text-[14px] font-medium text-[var(--colors-semantic-text-default)]">
          メールアドレス
        </label>
        <input
          type="email"
          placeholder="メールアドレス"
          {...register('email')}
          className="w-full rounded-md border border-[var(--colors-semantic-border-default)] bg-white px-4 py-3 text-[16px] leading-normal text-[var(--colors-semantic-text-black)] placeholder:text-[var(--colors-semantic-text-placeholder)] focus:border-[var(--colors-semantic-border-focus)] focus:outline-none"
        />
        {errors.email && <p className="mt-1 text-[14px] text-red-700">{errors.email.message}</p>}
      </div>

      <div>
        <label className="mb-2 block text-[14px] font-medium text-[var(--colors-semantic-text-default)]">
          パスワード
        </label>
        <input
          type="password"
          placeholder="パスワード"
          {...register('password')}
          className="w-full rounded-md border border-[var(--colors-semantic-border-default)] bg-white px-4 py-3 text-[16px] leading-normal text-[var(--colors-semantic-text-black)] placeholder:text-[var(--colors-semantic-text-placeholder)] focus:border-[var(--colors-semantic-border-focus)] focus:outline-none"
        />
        {errors.password && (
          <p className="mt-1 text-[14px] text-red-700">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="min-w-[140px] rounded-full bg-[var(--colors-semantic-background-btn-primary-enabled)] px-4 py-4 text-[16px] font-bold leading-none text-[var(--colors-semantic-text-btn-primary-text)] transition-colors hover:bg-[var(--colors-semantic-background-btn-primary-hover)] disabled:opacity-50"
      >
        {buttonText}
      </button>
    </form>
  );
};
export default AuthForm;
