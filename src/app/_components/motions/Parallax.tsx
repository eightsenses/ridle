'use client';
import { useRef, ReactNode, FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  scrub?: number;
}

const Parallax: FC<ParallaxProps> = ({
  children,
  className,
  y = 0,
  x = 0,
  scale = 1,
  scrub = 1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        const animationProps: gsap.TweenVars = {};

        if (y !== 0) animationProps.y = y;
        if (x !== 0) animationProps.x = x;
        if (scale !== 1) animationProps.scale = scale;

        if (Object.keys(animationProps).length > 0) {
          gsap.to(containerRef.current, {
            ...animationProps,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: scrub
            }
          });
        }
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [y, x, scale, scrub] }
  );

  return (
    <div ref={containerRef} className={twMerge(className)}>
      {children}
    </div>
  );
};

export default Parallax;
