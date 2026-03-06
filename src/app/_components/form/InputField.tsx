'use client';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { FieldValues, Path, UseFormRegister, RegisterOptions } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface InputProps<
  T extends FieldValues
> extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder?: string;
  field: Path<T>;
  register: UseFormRegister<T>;
  registerOptions?: RegisterOptions<T, Path<T>>;
  error?: string;
  isSubmitting?: boolean;
  description?: string;
  suffix?: string;
  className?: string;
}

const InputField = <T extends FieldValues>({
  label,
  type,
  field,
  register,
  registerOptions,
  placeholder,
  error,
  isSubmitting = false,
  description,
  suffix,
  className
}: InputProps<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type === 'password';
  const passwordType = isShowPassword ? 'text' : 'password';
  const togglePasswordIcon = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <div>
      <Label>
        {label}
        {description && <span className="pl-1 text-[11px]">{description}</span>}
      </Label>
      {!isPassword ? (
        suffix ? (
          <div className="flex items-center gap-2">
            <div className={cn('flex-1', className)}>
              <Input
                type={type}
                placeholder={placeholder}
                {...register(field, registerOptions)}
                disabled={isSubmitting}
              />
            </div>
            <div>{suffix}</div>
          </div>
        ) : (
          <Input
            type={type}
            placeholder={placeholder}
            {...register(field, registerOptions)}
            disabled={isSubmitting}
          />
        )
      ) : (
        <div className="relative">
          <Input
            type={passwordType}
            placeholder={placeholder}
            {...register(field, registerOptions)}
            disabled={isSubmitting}
          />

          <button
            type="button"
            onClick={togglePasswordIcon}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-semantic-text-gray"
            aria-label="Toggle password visibility"
            aria-pressed={isShowPassword}
          >
            {isShowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      )}
      {error && <p className="mt-1 text-[14px] text-semantic-text-danger">{error}</p>}
    </div>
  );
};

export { InputField };
