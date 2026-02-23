'use client';
import { FC } from 'react';
import { Loader2 } from 'lucide-react';

interface LoaderProps {
  isFullPage?: boolean;
}
const Loader: FC<LoaderProps> = ({ isFullPage = false }) => {
  const spinner = (
    <div className="flex flex-col items-center justify-center gap-2">
      <Loader2 className="h-10 w-10 animate-spin text-semantic-background-default" />
      <p className="font-bebas text-sm tracking-wider text-semantic-background-default md:text-lg">
        Waiting for the set...
      </p>
    </div>
  );

  if (isFullPage) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-semantic-background-thin">
        {spinner}
      </div>
    );
  }
  return <div className="flex justify-center p-4">{spinner}</div>;
};
export default Loader;
