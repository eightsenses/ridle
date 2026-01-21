'use client';

import { useState } from 'react';

function EyeIcon({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          stroke="#646464"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="#646464" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
        stroke="#646464"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="1" y1="1" x2="23" y2="23" stroke="#646464" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type TextInputProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  unit?: string;
  hasUnit?: boolean;
  type?: 'text' | 'email' | 'password';
  value?: string;
  onChange?: (value: string) => void;
};

export default function TextInput({
  className = '',
  label = 'Label',
  placeholder = 'Text',
  unit = 'Unit',
  hasUnit = false,
  type = 'text',
  value,
  onChange
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && !showPassword ? 'password' : 'text';

  return (
    <div className={`flex flex-col gap-4 overflow-hidden ${className}`}>
      <p className="w-full shrink-0 text-[16px] font-bold leading-none text-[var(--colors-semantic-text-subtle)]">
        {label}
      </p>

      {!isPassword && (
        <div className="flex w-full shrink-0 items-center gap-2">
          <div className="flex flex-1 flex-col items-start bg-[#f7f7f7] p-4">
            <input
              type={type}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-transparent text-[16px] font-normal leading-none text-[var(--colors-semantic-text-gray)] outline-none placeholder:text-[var(--colors-semantic-text-gray)]"
            />
          </div>
          {hasUnit && (
            <p className="w-[40px] shrink-0 text-[16px] font-normal leading-none text-black">
              {unit}
            </p>
          )}
        </div>
      )}

      {isPassword && (
        <div className="relative flex w-full items-center justify-between bg-[#f7f7f7] p-4">
          <input
            type={inputType}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className="w-[400px] bg-transparent text-[16px] font-normal leading-none text-[var(--colors-semantic-text-gray)] outline-none placeholder:text-[var(--colors-semantic-text-gray)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2"
            aria-label={showPassword ? 'パスワードを隠す' : 'パスワードを表示'}
          >
            <EyeIcon isOpen={showPassword} />
          </button>
        </div>
      )}
    </div>
  );
}
