import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'お名前は必須です'),
  email: z
    .string()
    .min(1, 'メールアドレスは必須です')
    .email({ message: '有効なメールアドレスを入力してください' }),
  message: z
    .string()
    .min(1, 'お問い合わせ内容を入力してください')
    .min(10, '10文字以上で入力してください')
});

export type ContactFormData = z.infer<typeof contactSchema>;
