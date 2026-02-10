'use client';
import { FC } from 'react';
import { Button } from '@/components/ui/button';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
}

const SubmitButton: FC<ButtonProps> = ({ children, isSubmitting = false, ...Props }) => {
  return (
    <Button size="md" disabled={isSubmitting} {...Props}>
      {children}
    </Button>
  );
};

export { SubmitButton };
