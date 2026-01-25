'use client';
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSubmitting?: boolean;
}

const SubmitButton = ({ children, isSubmitting = false, ...Props }: ButtonProps) => {
  return (
    <Button disabled={isSubmitting} {...Props}>
      {children}
    </Button>
  );
};

export { SubmitButton };
