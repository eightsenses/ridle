'use client';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export interface TextareaProps<
  T extends FieldValues
> extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder?: string;
  field: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  isSubmitting?: boolean;
}

const TextareaField = <T extends FieldValues>({
  label,
  field,
  register,
  placeholder,
  error,
  isSubmitting = false
}: TextareaProps<T>) => {
  return (
    <div>
      <Label>{label}</Label>
      <Textarea placeholder={placeholder} {...register(field)} disabled={isSubmitting} />
      {error && <p className="mt-1 text-[14px] text-red-700">{error}</p>}
    </div>
  );
};

export { TextareaField };
