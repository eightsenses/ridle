'use client';
import { ReactNode, FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import ZoomFixed from '@/app/_components/motions/ZoomFixed';

interface ConceptProps {
  title: ReactNode;
  texts: string[];
  imageBg: StaticImageData;
}

const Concept: FC<ConceptProps> = ({ title, texts, imageBg }) => {
  return (
    <ZoomFixed>
      <section className="is-zoom-wrapper h-[450vh] w-full">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="is-zoom-mask relative aspect-[3/2] overflow-hidden">
            <Image
              src={imageBg}
              alt="Concept Image"
              fill
              priority
              sizes="100vw"
              className="is-zoom-img object-cover"
            />
          </div>
          <div className="is-zoom-content absolute inset-0 grid place-items-center">
            <div className="absolute inset-0 bg-black/15" />
            <div className="relative mx-auto flex w-fit gap-6 px-6 max-md:flex-col md:gap-12">
              <div className="text-4xl/tight font-semibold text-white max-md:text-center md:text-6xl/snug">
                {title}
              </div>
              <div className="grid gap-5">
                {texts.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-sm font-semibold tracking-wider text-white md:whitespace-pre-line md:text-lg"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZoomFixed>
  );
};
export default Concept;
