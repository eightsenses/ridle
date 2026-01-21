import { z } from 'zod';

export const signupSchema = z.object({
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

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'メールアドレスは必須です')
    .email({ message: '有効なメールアドレスを入力してください' }),
  password: z.string().min(1, 'パスワードは必須です')
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
