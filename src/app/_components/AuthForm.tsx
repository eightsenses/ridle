'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthFormData } from '@/app/_types/auth';
import Input from '@/app/_components/Input';
import Button from '@/app/_components/Button';

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
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
      {isShowName && (
        <div className="w-full">
          <Input
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
        <Input
          label="メールアドレス"
          type="email"
          placeholder="メールアドレス"
          field="email"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.email?.message}
        />
      </div>

      <div>
        <Input
          label="パスワード"
          type="password"
          placeholder="パスワード"
          field="password"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.password?.message}
        />
      </div>

      <Button type="submit" isSubmitting={isSubmitting}>
        {buttonText}
      </Button>
    </form>
  );
};
export default AuthForm;
