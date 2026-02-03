import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'mx-auto rounded-full px-4 py-4 text-[16px] font-bold transition-colors disabled:bg-[var(--colors-semantic-background-btn-primary-disabled)] disabled:text-semantic-text-btn-primary',
  {
    variants: {
      variant: {
        default:
          'bg-semantic-background-primary text-semantic-text-btn-primary transition-colors duration-300 hover:bg-btn-primary-hover',
        secondary:
          'bg-btn-secondary text-semantic-text-btn-secondary transition-colors duration-300 hover:bg-semantic-background-btn-secondary-hover',

        outline:
          'border border-semantic-border-default bg-btn-secondary text-semantic-text-btn-secondary transition-colors duration-300 hover:bg-semantic-background-btn-secondary-hover',
        modeOn: 'pointer-events-none bg-semantic-background-primary text-semantic-text-btn-primary',
        modeOff: 'text-semantic-btn-secondary'
      },
      size: {
        default: 'w-full',
        sm: 'w-[140px]',
        md: 'w-[180px]',
        lg: 'w-[320px]'
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
