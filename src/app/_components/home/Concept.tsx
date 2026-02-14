'use client';
import { FC } from 'react';
import { ConceptProps } from '@/types/home';
import Image from 'next/image';
import FadeUp from '@/app/_components/motions/FadeUpMotion';

const Concept: FC<ConceptProps> = ({ title, texts, imageBg }) => {
  return (
    <section className="relative mt-24 overflow-hidden md:mt-40">
      <Image
        src={imageBg}
        alt="Concept Image"
        fill
        priority
        sizes="100vw"
        className="-z-10 w-full object-cover"
      />
      <div className="absolute inset-0 -z-0 bg-black/15" />
      <div className="relative mx-auto flex w-fit gap-6 px-6 py-24 max-md:flex-col md:gap-12 md:py-32">
        <FadeUp y={20} duration={1} className="grid gap-14">
          <div className="text-4xl/tight font-semibold text-white max-md:text-center md:text-6xl/snug">
            {title}
          </div>
        </FadeUp>
        <FadeUp y={20} duration={1} className="grid gap-5">
          {texts.map((text, idx) => (
            <p
              key={idx}
              className="text-sm font-semibold tracking-wider text-white md:whitespace-pre-line md:text-lg"
            >
              {text}
            </p>
          ))}
        </FadeUp>
      </div>
    </section>
  );
};
export default Concept;
