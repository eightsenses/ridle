'use client';
import { useRef, ReactNode, FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

interface TextMotionProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
  duration?: number;
  delay?: number;
  direction?: 'left' | 'right';
}

const TextMotion: FC<TextMotionProps> = ({
  children,
  className,
  bgColor = 'bg-semantic-background-black',
  duration = 1.2,
  delay = 0,
  direction = 'left'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const overlay = containerRef.current.querySelector<HTMLSpanElement>('.is-text-overlay');
      const text = containerRef.current.querySelector<HTMLSpanElement>('.is-text');

      if (overlay && text) {
        gsap.set(overlay, {
          scaleX: 0,
          transformOrigin: direction === 'left' ? 'left' : 'right'
        });
        gsap.set(text, { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true
          }
        });

        tl.to(overlay, {
          scaleX: 1,
          duration: duration * 0.5,
          ease: 'power3.out',
          delay: delay
        })
          .set(text, { opacity: 1 })
          .to(overlay, {
            scaleX: 0,
            transformOrigin: direction === 'left' ? 'right' : 'left',
            duration: duration * 0.5,
            ease: 'power2.inOut'
          });
      }
    },
    { scope: containerRef, dependencies: [bgColor, duration, delay, direction] }
  );

  return (
    <div ref={containerRef} className={twMerge('relative inline-grid overflow-hidden', className)}>
      <span className="is-text relative block opacity-0">{children}</span>
      <span
        className={`is-text-overlay absolute inset-0 z-10 ${bgColor}`}
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
export default TextMotion;
