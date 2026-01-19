'use client';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { cn } from '@/lib/utils';

const baseInputClass =
  'bg-gray-100 w-full px-4 py-3 text-[16px] leading-normal text-[var(--colors-semantic-text-black)] placeholder:text-[var(--colors-semantic-text-placeholder)] focus:border-[var(--colors-semantic-border-focus)] focus:outline-none';

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
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
  isSubmitting = false,
  className
}: InputProps<T>) => {
  const inputClass = cn(baseInputClass, className);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type === 'password';
  const passwordType = isShowPassword ? 'text' : 'password';
  const togglePasswordIcon = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <div>
      <label className="mb-2 block text-[14px] font-medium text-[var(--colors-semantic-text-default)]">
        {label}
      </label>
      {!isPassword ? (
        <input
          className={inputClass}
          type={type}
          placeholder={placeholder}
          {...register(field)}
          disabled={isSubmitting}
        />
      ) : (
        <div className="relative">
          <input
            className={inputClass}
            type={passwordType}
            placeholder={placeholder}
            {...register(field)}
            disabled={isSubmitting}
          />

          <button
            type="button"
            onClick={togglePasswordIcon}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            aria-label="Toggle password visibility"
          >
            {isShowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      )}
      {error && <p className="mt-1 text-[14px] text-red-700">{error}</p>}
    </div>
  );
};

export default Input;
