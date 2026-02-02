'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Link>;

const AuthTextLink: React.FC<Props> = ({ className = '', ...props }) => {
  return <Link {...props} className={`text-semantic-text-primary hover:underline ${className}`} />;
};
export default AuthTextLink;
