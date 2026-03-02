'use client';
import { FieldValues, Path, UseFormRegister, RegisterOptions } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectBoxProps<T extends FieldValues> {
  label: string;
  field: Path<T>;
  register: UseFormRegister<T>;
  registerOptions?: RegisterOptions<T, Path<T>>;
  error?: string;
  isSubmitting?: boolean;
  options: { value: string | number; label: string }[];
  placeholder?: string;
  className?: string;
}

const SelectBox = <T extends FieldValues>({
  label,
  field,
  register,
  registerOptions,
  error,
  isSubmitting = false,
  options,
  placeholder = '選択してください',
  className
}: SelectBoxProps<T>) => {
  return (
    <div>
      <Label>{label}</Label>
      <div className="relative">
        <select
          {...register(field, registerOptions)}
          disabled={isSubmitting}
          className={cn(
            'w-full appearance-none bg-gray-100 px-4 py-3 pr-10 text-base text-semantic-text-black focus:outline-none focus-visible:outline-none [&:has(option[value=""]:checked)]:text-semantic-text-placeholder [&:not(:has(option[value=""]:checked))]:text-semantic-text-black',
            className
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-semantic-text-gray" />
      </div>
      {error && <p className="mt-1 text-[14px] text-semantic-text-danger">{error}</p>}
    </div>
  );
};

export { SelectBox };
