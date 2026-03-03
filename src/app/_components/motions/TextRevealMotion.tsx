'use client';
import { useRef, ReactNode, ComponentPropsWithoutRef, FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextRevealMotionProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  type?: 'words' | 'lines';
  start?: string;
  end?: string;
}

const TextRevealMotion: FC<TextRevealMotionProps> = ({
  children,
  className,
  type = 'words',
  start = 'top top',
  end = '+=150%',
  ...sectionProps
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current?.querySelector('.is-text-reveal-content');
      if (!el) return;

      const split = new SplitText(el, {
        type,
        wordsClass: 'word',
        linesClass: 'line'
      });

      const targets = type === 'words' ? split.words : split.lines;

      gsap.set(targets, { opacity: 0.2 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          pin: true,
          scrub: true
        }
      });

      tl.to(targets, {
        opacity: 1,
        stagger: 0.1,
        ease: 'none'
      });

      return () => {
        split.revert();
      };
    },
    { scope: containerRef, dependencies: [type, start, end] }
  );

  return (
    <section ref={containerRef} className={cn('h-screen w-full', className)} {...sectionProps}>
      <div className="flex h-full items-center px-6 md:px-12 xl:px-20">
        <div className="is-text-reveal-content font-bebas">{children}</div>
      </div>
    </section>
  );
};

export default TextRevealMotion;
