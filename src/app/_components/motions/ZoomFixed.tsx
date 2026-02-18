'use client';
import { useRef, ReactNode, FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

interface ZoomFixedProps {
  children: ReactNode;
  className?: string;
  initialWidth?: string;
  scrub?: number;
  initialScale?: number;
}

const ZoomFixed: FC<ZoomFixedProps> = ({
  children,
  className,
  initialWidth = '40%',
  scrub = 1.2,
  initialScale = 2
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const wrapper = containerRef.current.querySelector<HTMLElement>('.is-zoom-wrapper');
      const mask = containerRef.current.querySelector<HTMLElement>('.is-zoom-mask');
      const img = containerRef.current.querySelector<HTMLElement>('.is-zoom-img');
      const content = containerRef.current.querySelector<HTMLElement>('.is-zoom-content');

      if (wrapper && mask && img && content) {
        const zoomTrigger: ScrollTrigger.Vars = {
          trigger: wrapper,
          start: 'top top',
          end: '65% top',
          scrub: scrub,
          invalidateOnRefresh: true
        };

        gsap.fromTo(
          mask,
          { width: initialWidth },
          {
            width: '100%',
            height: () => window.innerHeight + 'px',
            scrollTrigger: zoomTrigger
          }
        );

        gsap.fromTo(
          img,
          { scale: initialScale },
          {
            scale: 1,
            scrollTrigger: zoomTrigger
          }
        );

        const contentChildren = content.children;

        gsap.fromTo(
          contentChildren,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapper,
              start: '65% top',
              end: '80% top',
              scrub: scrub,
              invalidateOnRefresh: true
            }
          }
        );
      }
    },
    { scope: containerRef, dependencies: [initialWidth, scrub, initialScale] }
  );

  return (
    <div ref={containerRef} className={twMerge(className)}>
      {children}
    </div>
  );
};

export default ZoomFixed;
