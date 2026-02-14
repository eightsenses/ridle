'use client';
import { useRef, ReactNode, FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

interface SurferMotionProps {
  children: ReactNode;
  className?: string;
}

const SurferMotion: FC<SurferMotionProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const surfers = gsap.utils.toArray<HTMLElement>('.surfer', containerRef.current);

      surfers.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              once: true
            }
          }
        );

        const floatSettings = [
          { x: 5, y: -50, rotation: -10 },
          { x: -8, y: -30, rotation: 15 },
          { x: 6, y: -50, rotation: 8 }
        ];
        const config = floatSettings[i] || floatSettings[0];

        gsap.to(el, {
          x: config.x,
          y: config.y,
          rotation: config.rotation,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5
          }
        });
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div ref={containerRef} className={twMerge('is-animated', className)}>
      {children}
    </div>
  );
};
export default SurferMotion;
