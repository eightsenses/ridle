import { z } from 'zod';

export const sessionSchema = z.object({
  date: z.date({ message: '日付を選択してください' }),
  spotId: z
    .number({ message: 'サーフスポットを選択してください' })
    .refine((v) => !Number.isNaN(v), 'サーフスポットを選択してください')
    .refine((v) => v >= 1, 'サーフスポットを選択してください'),
  surfTimeMinutes: z
    .number({ message: 'サーフタイムを入力してください' })
    .refine((v) => !Number.isNaN(v), 'サーフタイムを入力してください')
    .refine((v) => v >= 1, 'サーフタイムは1分以上で入力してください'),
  rideCount: z
    .number({ message: 'ライド数を入力してください' })
    .refine((v) => !Number.isNaN(v), 'ライド数を入力してください')
    .refine((v) => v >= 0, 'ライド数は0以上で入力してください'),
  thumbnailImageKey: z.string().optional(),
  imageRemoved: z.boolean().optional(),
  challengeNote: z.string().optional(),
  ratings: z.number().min(0).max(5).optional()
});

export type SessionFormData = z.output<typeof sessionSchema>;
