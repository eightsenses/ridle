'use client';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export interface InputProps<
  T extends FieldValues
> extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder?: string;
  field: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  isSubmitting?: boolean;
}

const InputField = <T extends FieldValues>({
  label,
  type,
  field,
  register,
  placeholder,
  error,
  isSubmitting = false
}: InputProps<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type === 'password';
  const passwordType = isShowPassword ? 'text' : 'password';
  const togglePasswordIcon = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <div>
      <Label>{label}</Label>
      {!isPassword ? (
        <Input type={type} placeholder={placeholder} {...register(field)} disabled={isSubmitting} />
      ) : (
        <div className="relative">
          <Input
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

export { InputField };
