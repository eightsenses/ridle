'use client';
import { useRef, ReactNode, FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}

const FadeUp: FC<FadeUpProps> = ({
  children,
  className,
  y = 30,
  duration = 1,
  stagger = 0.2,
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current?.children;

      if (items && items.length > 0) {
        ScrollTrigger.refresh();
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: y
          },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: stagger,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              once: true
            }
          }
        );
      }
    },
    { scope: containerRef, dependencies: [y, duration, stagger, delay] }
  );

  return (
    <div className={twMerge('is-animated', className)} ref={containerRef}>
      {children}
    </div>
  );
};
export default FadeUp;
