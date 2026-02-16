'use client';
import { FC } from 'react';
import WavePath from '@/assets/svg/wave-path.svg';

const Wave: FC = () => {
  return (
    <div className="relative overflow-hidden py-20 xl:py-40">
      <div className="aspect-[833.82666/50.5] h-auto w-full">
        <div className="is-animate-y">
          <div className="is-animate-x flex w-full [&_svg]:shrink-0 max-md:[&_svg]:h-[50.5px]">
            <WavePath aria-hidden="true" />
            <WavePath aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wave;
