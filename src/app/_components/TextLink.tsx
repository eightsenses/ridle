'use client';
import { ComponentProps, FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = ComponentProps<typeof Link>;

const TextLink: FC<Props> = ({ className, ...props }) => {
  return (
    <Link {...props} className={cn('text-semantic-text-primary hover:underline', className)} />
  );
};
export default TextLink;
