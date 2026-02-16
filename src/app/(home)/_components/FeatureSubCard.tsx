'use client';
import { FC } from 'react';
import { FeatureBase } from '@/app/(home)/_types/home';

export interface FeatureSubCardProps extends FeatureBase {
  subtitle: string;
}

const FeatureSubCard: FC<FeatureSubCardProps> = ({ icon: Icon, title, subtitle, text }) => {
  return (
    <div className="flex flex-col items-center bg-semantic-background-default p-10">
      <Icon className="text-primary h-auto w-44 fill-[var(--colors-semantic-background-thin)]" />
      <div className="mb-4 mt-6 flex flex-col items-center gap-1">
        <h3 className="font-bebas text-6xl text-semantic-background-thin">{title}</h3>
        <div className="text-xs font-semibold text-semantic-text-primary">{subtitle}</div>
      </div>
      <p className="text-base/relaxed text-semantic-text-thin">{text}</p>
    </div>
  );
};
export default FeatureSubCard;
