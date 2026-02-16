'use client';
import { FC } from 'react';
import { HeroVisualProps } from '@/types/home';
import { getImageProps } from 'next/image';

const HeroVisual: FC<HeroVisualProps> = ({ heading, subtitle, imagePc, imageSp }) => {
  const common = {
    alt: 'Ridle',
    className: 'pointer-events-none absolute inset-0 select-none object-cover',
    fill: true,
    priority: true
  };

  const {
    props: { srcSet: pc }
  } = getImageProps({
    ...common,
    src: imagePc
  });

  const {
    props: { srcSet: sp, ...rest }
  } = getImageProps({
    ...common,
    src: imageSp
  });

  return (
    <section className="relative h-lvh overflow-hidden md:h-[calc(100vh+300px)]">
      <picture>
        <source media="(min-width: 768px)" srcSet={pc} />
        <source media="(max-width: 767px)" srcSet={sp} />
        <img {...rest} alt="Ridle" />
      </picture>
      <div className="relative mt-[calc(110px+3vw)] grid gap-2 max-md:text-center md:ml-16">
        <h1 className="font-bebas relative items-center overflow-hidden text-[clamp(4.4rem,12vw,10vw)] leading-[0.9] text-semantic-text-black">
          {heading}
        </h1>
        {subtitle && (
          <div className="text-sm font-semibold italic tracking-wider text-semantic-text-black md:text-xl">
            {subtitle}
          </div>
        )}
      </div>
    </section>
  );
};
export default HeroVisual;
