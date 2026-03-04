'use client';
import { ReactNode, FC } from 'react';
import TextRevealMotion from '@/app/_components/motions/TextRevealMotion';

interface TextRevealSectionProps {
  text: ReactNode;
}

const TextRevealSection: FC<TextRevealSectionProps> = ({ text }) => {
  return (
    <TextRevealMotion id="textSection">
      <p className="whitespace-pre-line text-[clamp(5.5rem,12vw,14rem)] uppercase leading-[0.84] tracking-wide underline-offset-8">
        {text}
      </p>
    </TextRevealMotion>
  );
};
export default TextRevealSection;
