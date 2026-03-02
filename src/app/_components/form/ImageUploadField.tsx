'use client';
import { ChangeEvent, FC } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

export interface ImageUploadFieldProps {
  label: string;
  previewUrl: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void; // handleImageRemove
  isSubmitting?: boolean;
}

const ImageUploadField: FC<ImageUploadFieldProps> = ({
  label,
  previewUrl,
  onChange,
  onRemove,
  isSubmitting = false
}) => {
  return (
    <div>
      <Label>{label}</Label>
      {previewUrl ? (
        // プレビュー + 削除ボタン
        <div className="relative md:w-fit">
          <Image
            src={previewUrl}
            alt="サムネイル"
            width={400}
            height={400}
            className="h-[auto] w-full object-cover md:h-[150px] md:max-w-[400px]"
          />
          <button
            type="button"
            onClick={onRemove}
            disabled={isSubmitting}
            className="absolute -right-2 -top-2 rounded-full bg-semantic-text-gray p-1 text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <label className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-gray-300 bg-gray-100 p-6 text-semantic-text-placeholder md:p-12">
          <ImagePlus className="size-10" />
          画像を選択
          <input
            type="file"
            accept="image/*"
            onChange={onChange}
            disabled={isSubmitting}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export { ImageUploadField };
