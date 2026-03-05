'use client';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sessionSchema, type SessionFormData } from '@/schemas/session';
import {
  DatePickerField,
  InputField,
  SubmitButton,
  TextareaField,
  SelectBox,
  StarRatingField,
  ImageUploadField
} from '@/app/_components/form';
import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import { useSpots } from '@/app/admin/_hooks/useSpots';
import { useImageUpload } from '@/app/admin/_hooks/useImageUpload';

interface SessionFormProps {
  defaultValues?: SessionFormData;
  initialImageUrl?: string | null;
  onSubmit: (data: SessionFormData) => Promise<void>;
  onDelete?: () => void;
  buttonText: string;
  isCancelButton?: boolean;
}

const SessionForm: FC<SessionFormProps> = ({
  defaultValues,
  initialImageUrl,
  onSubmit,
  onDelete,
  buttonText,
  isCancelButton = false
}) => {
  const { token } = useSupabaseSession();
  const { data: spots = [] } = useSpots(token);
  const {
    thumbnailImageKey,
    thumbnailImageUrl,
    imageRemoved,
    handleImageChange,
    handleImageRemove,
    cleanup
  } = useImageUpload(initialImageUrl);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset
  } = useForm<SessionFormData>({
    resolver: zodResolver(sessionSchema),
    defaultValues
  });
  useEffect(() => {
    if (defaultValues && spots.length > 0) {
      reset(defaultValues);
    }
  }, [defaultValues, spots.length, reset]);
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await onSubmit({ ...data, thumbnailImageKey, imageRemoved });
          reset();
        } catch {
          /* 親側でエラーハンドリング（トースト表示） */
        }
      })}
      className="grid w-full gap-6 [&_label]:text-semantic-text-black"
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="w-full">
          <DatePickerField
            label="日付"
            field="date"
            control={control}
            isSubmitting={isSubmitting}
            error={errors.date?.message}
          />
        </div>
        <div className="w-full">
          <SelectBox
            label="サーフスポット"
            field="spotId"
            register={register}
            registerOptions={{ valueAsNumber: true }}
            isSubmitting={isSubmitting}
            error={errors.spotId?.message}
            options={spots.map((spot) => ({ value: spot.id, label: spot.name }))}
          />
        </div>
        <div className="w-full">
          <InputField
            label="サーフタイム（分）"
            type="number"
            placeholder="サーフィンした時間（分）"
            field="surfTimeMinutes"
            register={register}
            registerOptions={{ valueAsNumber: true }}
            isSubmitting={isSubmitting}
            error={errors.surfTimeMinutes?.message}
          />
        </div>
        <div className="w-full">
          <InputField
            label="ライド数"
            type="number"
            placeholder="波に乗った回数"
            field="rideCount"
            register={register}
            registerOptions={{ valueAsNumber: true }}
            isSubmitting={isSubmitting}
            error={errors.rideCount?.message}
          />
        </div>
      </section>
      <div className="w-full">
        <ImageUploadField
          label="サムネイル"
          previewUrl={thumbnailImageUrl}
          onChange={handleImageChange}
          onRemove={handleImageRemove}
          isSubmitting={isSubmitting}
        />
      </div>
      <div className="w-full">
        <TextareaField
          label="課題"
          field="challengeNote"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.challengeNote?.message}
        />
      </div>
      <div className="w-full">
        <StarRatingField
          label="総合評価"
          field="ratings"
          control={control}
          isSubmitting={isSubmitting}
          error={errors.ratings?.message}
        />
      </div>
      <div className="mt-8 flex flex-col items-center gap-2 md:w-fit md:flex-row md:justify-center">
        <SubmitButton type="submit" isSubmitting={isSubmitting}>
          {buttonText}
        </SubmitButton>
        {isCancelButton && (
          <SubmitButton
            type="button"
            variant="outline"
            onClick={() => {
              cleanup();
              reset();
            }}
            isSubmitting={isSubmitting}
          >
            キャンセル
          </SubmitButton>
        )}
        {onDelete && (
          <SubmitButton
            type="button"
            variant="outline"
            onClick={onDelete}
            isSubmitting={isSubmitting}
          >
            削除する
          </SubmitButton>
        )}
      </div>
    </form>
  );
};
export default SessionForm;
