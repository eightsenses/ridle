import * as React from 'react';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'min-h-[180px] w-full resize-y bg-gray-100 px-4 py-3 text-[16px] leading-normal text-[var(--colors-semantic-text-black)] placeholder:text-[var(--colors-semantic-text-placeholder)] focus:border-[var(--colors-semantic-border-focus)] focus:outline-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
