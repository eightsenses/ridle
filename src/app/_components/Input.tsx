'use client';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  label: string;
  type: string;
  placeholder?: string;
  field: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  isSubmitting?: boolean;
}

const Input = <T extends FieldValues>({
  label,
  type,
  field,
  register,
  placeholder,
  error,
  isSubmitting = false
}: InputProps<T>) => {
  return (
    <div>
      <label className="mb-2 block text-[14px] font-medium text-[var(--colors-semantic-text-default)]">
        {label}
      </label>
      <input
        className="w-full rounded-md border border-[var(--colors-semantic-border-default)] bg-white px-4 py-3 text-[16px] leading-normal text-[var(--colors-semantic-text-black)] placeholder:text-[var(--colors-semantic-text-placeholder)] focus:border-[var(--colors-semantic-border-focus)] focus:outline-none"
        type={type}
        placeholder={placeholder}
        {...register(field)}
        disabled={isSubmitting}
      />
      {error && <p className="mt-1 text-[14px] text-red-700">{error}</p>}
    </div>
  );
};

export default Input;
