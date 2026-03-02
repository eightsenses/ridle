'use client';
import { FC } from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';

interface SubmitButtonProps extends ButtonProps {
  isSubmitting?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ children, isSubmitting = false, ...Props }) => {
  return (
    <Button size="md" disabled={isSubmitting} {...Props}>
      {children}
    </Button>
  );
};

export { SubmitButton };
