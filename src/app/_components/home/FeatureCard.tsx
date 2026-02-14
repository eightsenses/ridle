'use client';
import { FC } from 'react';
import Image from 'next/image';
import { FeatureCardProps } from '@/types/home';

const FeatureCard: FC<FeatureCardProps> = ({ imageSrc, icon: Icon, title, text }) => {
  return (
    <div>
      <Image src={imageSrc} alt={title} />
      <div className="mb-4 mt-6 flex items-center gap-4">
        <Icon className="text-primary h-20 w-20 fill-current md:h-24 md:w-24" />
        <h3 className="flex-1 text-3xl font-bold md:text-4xl">{title}</h3>
      </div>
      <p className="text-base/loose">{text}</p>
    </div>
  );
};
export default FeatureCard;
