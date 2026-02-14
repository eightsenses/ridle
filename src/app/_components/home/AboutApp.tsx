'use client';
import { FC } from 'react';
import Image from 'next/image';
import LogoJp from '@/assets/svg/logo-jp.svg';
import { AboutAppProps } from '@/types/home';
import CtaButton from '@/app/_components/home/CtaButton';
import FadeUp from '@/app/_components/motions/FadeUpMotion';
import Parallax from '@/app/_components/motions/Parallax';

const AboutApp: FC<AboutAppProps> = ({
  title,
  caption,
  imageLight,
  imageDark,
  buttonLabel,
  buttonHref
}) => {
  return (
    <section className="relative px-6">
      <div className="mx-auto -mt-20 grid max-w-4xl gap-4 md:-mt-40">
        <div className="grid gap-14">
          <FadeUp y={30} className="grid gap-14">
            <Image src={imageLight} alt="" className="h-auto w-full dark:hidden" />
            <Image src={imageDark} alt="" className="hidden h-auto w-full dark:block" />
            <div className="flex flex-col items-center gap-4">
              <div className="text-center text-2xl font-bold max-md:whitespace-pre-line md:text-3xl">
                {title}
              </div>
              <p className="text-base/8 md:whitespace-pre-line md:text-center">{caption}</p>
              {buttonHref && buttonLabel && <CtaButton href={buttonHref} label={buttonLabel} />}
            </div>
          </FadeUp>
          <div className="max-xl:flex max-xl:justify-center max-xl:gap-5">
            <Parallax
              y={130}
              scrub={1.2}
              className="mx-auto w-full max-w-xl xl:absolute xl:left-0 xl:top-32 2xl:top-6 2xl:max-w-3xl"
            >
              <LogoJp className="block h-auto w-full fill-current text-semantic-background-primary xl:origin-bottom-left xl:rotate-90" />
            </Parallax>
            <Parallax
              y={130}
              scrub={1.2}
              className="mx-auto w-full max-w-xl max-md:hidden xl:absolute xl:right-0 xl:top-32 2xl:top-6 2xl:max-w-3xl"
            >
              <LogoJp className="block h-auto w-full fill-current text-semantic-background-default xl:origin-bottom-right xl:-rotate-90" />
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutApp;
