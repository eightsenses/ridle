'use client';

import React, { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isSubmitting?: boolean;
}

const buttonVariants = cva(
  'mx-auto rounded-full px-4 py-4 text-[16px] font-bold transition-colors disabled:bg-[var(--colors-semantic-background-btn-primary-disabled)] disabled:text-[var(--colors-semantic-text-btn-primary-text)]',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--colors-semantic-background-btn-primary-enabled)] text-[var(--colors-semantic-text-btn-primary-text)] hover:bg-[var(--colors-semantic-background-btn-primary-hover)]',
        outline: '',
        secondary: ''
      },
      size: {
        default: 'w-[180px]',
        sm: 'w-full',
        lg: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

const Button = ({
  variant,
  size,
  className,
  children,
  isSubmitting = false,
  ...Props
}: ButtonProps) => {
  return (
    <button
      disabled={isSubmitting}
      {...Props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;
