import { ComponentType, ComponentPropsWithoutRef } from 'react';

export interface CtaBase {
  buttonLabel?: string;
  buttonHref?: string;
}

export interface FeatureBase {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  title: string;
  text: string;
}
