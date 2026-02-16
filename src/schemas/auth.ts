import { z } from 'zod';

const emailSchema = z
  .string()
  .min(1, 'メールアドレスは必須です')
  .email({ message: '有効なメールアドレスを入力してください' });

const passwordSchema = z
  .string()
  .min(1, 'パスワードは必須です')
  .min(6, 'パスワードは6文字以上で入力してください');

export const signupSchema = z.object({
  name: z.string().min(1, 'ユーザーネームは必須です'),
  email: emailSchema,
  password: passwordSchema
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'パスワードは必須です')
});

export const forgotPasswordSchema = z.object({
  email: emailSchema
});

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(6, 'パスワードは6文字以上で入力してください')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'パスワードが一致しません',
    path: ['confirmPassword']
  });

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
