'use client';
import { ComponentProps, FC } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<typeof Link>;

const AuthTextLink: FC<Props> = ({ className, ...props }) => {
  return (
    <Link {...props} className={twMerge('text-semantic-text-primary hover:underline', className)} />
  );
};
export default AuthTextLink;
