'use client';
import React, { FC } from 'react';
import FeatureCard from '@/app/(home)/_components/FeatureCard';
import FeatureSubCard from '@/app/(home)/_components/FeatureSubCard';
import Surfer01 from '@/assets/svg/surfer-1.svg';
import Surfer02 from '@/assets/svg/surfer-2.svg';
import Surfer03 from '@/assets/svg/surfer-3.svg';
import CtaButton from '@/app/(home)/_components/CtaButton';
import { CtaBase } from '@/app/(home)/_types/home';
import { FEATURE_ITEMS, FEATURE_SUB_ITEMS } from '@/app/(home)/_data/features.data';
import SurferMotion from '@/app/_components/motions/SurferMotion';
import FadeUp from '@/app/_components/motions/FadeUpMotion';
import TextMotion from '@/app/_components/motions/TextMotion';

const Features: FC<CtaBase> = ({ buttonHref, buttonLabel }) => {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="flex gap-12 max-md:flex-col-reverse">
        <h2 className="mb-6 flex-1 text-[40px] font-bold leading-tight tracking-wide max-md:text-center md:text-7xl/tight">
          波に乗る
          <TextMotion
            className="text-semantic-text-primary"
            bgColor="bg-semantic-background-primary"
          >
            <span>喜び</span>
          </TextMotion>
          <br />
          <TextMotion
            className="text-semantic-text-primary"
            bgColor="bg-semantic-background-primary"
          >
            <span className="text-semantic-text-primary">仲間</span>
          </TextMotion>
          と築く成長
        </h2>
        <SurferMotion className="flex justify-center gap-5">
          <Surfer01 className="surfer h-auto w-full max-w-48 fill-current will-change-transform" />
          <Surfer02 className="surfer h-auto w-full max-w-24 fill-current will-change-transform" />
          <Surfer03 className="surfer h-auto w-full max-w-16 fill-current will-change-transform" />
        </SurferMotion>
      </div>

      <FadeUp className="grid grid-cols-1 gap-12 md:grid-cols-2" stagger={0.3}>
        {FEATURE_ITEMS.map((item, idx) => (
          <FeatureCard key={idx} {...item} />
        ))}
      </FadeUp>

      <div className="mt-20 md:mt-36">
        <div className="text-center font-bebas text-6xl text-semantic-text-primary md:text-[6.8rem]">
          Beyond The Ride
        </div>

        <FadeUp className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURE_SUB_ITEMS.map((item, idx) => (
            <FeatureSubCard key={idx} {...item} />
          ))}
        </FadeUp>
      </div>
      {buttonHref && buttonLabel && <CtaButton href={buttonHref} label={buttonLabel} />}
    </section>
  );
};
export default Features;
