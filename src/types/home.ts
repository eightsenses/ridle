import { StaticImageData } from 'next/image';
import { ComponentType, ComponentPropsWithoutRef, ReactNode } from 'react';

/* Base */

interface CtaBase {
  buttonLabel?: string;
  buttonHref?: string;
}

interface FeatureBase {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  title: string;
  text: string;
}

/* Standalone */

export interface HeroVisualProps {
  heading: ReactNode;
  subtitle?: ReactNode;
  imagePc: StaticImageData;
  imageSp: StaticImageData;
}

export interface CtaButtonProps {
  label: string;
  href: string;
  className?: string;
}

export interface ConceptProps {
  title: ReactNode;
  texts: string[];
  imageBg: StaticImageData;
}

/* Extends */

export interface AboutAppProps extends CtaBase {
  title: string;
  caption: string;
  imageLight: StaticImageData;
  imageDark: StaticImageData;
}

export interface FeatureCardProps extends FeatureBase {
  imageSrc: StaticImageData;
}

export interface FeatureSubCardProps extends FeatureBase {
  subtitle: string;
}

/* Type */

export type FeaturesProps = CtaBase;
