'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthFormData } from '@/app/(auth)/_types/auth';
import { Input, Button } from '@/components/ui';
import { signupSchema, loginSchema, type SignupFormData, type LoginFormData } from '@/schemas/auth';

interface AuthFormProps {
  onSubmit: (data: SignupFormData | LoginFormData, reset: () => void) => void;
  buttonText: string;
  isShowName?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, buttonText, isShowName = true }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AuthFormData>({
    resolver: zodResolver(isShowName ? signupSchema : loginSchema)
  });
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, reset))} className="grid gap-6">
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
