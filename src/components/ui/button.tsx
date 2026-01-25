import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
