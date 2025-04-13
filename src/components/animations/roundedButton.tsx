import React, { PropsWithChildren, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import Magnetic from '@/components/animations/magnetic';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/button';

interface Props {
  backgroundColor?: string;
  className?: string;
}

export default function RoundedButton({
  children,
  backgroundColor = 'secondary',
  className,
  ...attributes
}: PropsWithChildren<Props>) {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>();
  // Use a ref to hold the timeout ID so it's stable across renders
  const timeoutRef = useRef<number>();

  useEffect(() => {
    timeline.current = gsap
      .timeline({ paused: true })
      .to(
        circle.current,
        { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
        'enter'
      )
      .to(
        circle.current,
        { top: '-150%', width: '125%', duration: 0.25 },
        'exit'
      );
  }, []);

  const handleMouseEnter = useCallback(() => {
    // clear any pending exit animation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeline.current?.tweenFromTo('enter', 'exit');
  }, []);

  const handleMouseLeave = useCallback(() => {
    // delay the play so it doesn't feel too abrupt
    timeoutRef.current = window.setTimeout(() => {
      timeline.current?.play();
    }, 300);
  }, []);

  return (
    <Magnetic>
      <Button
        variant="rounded"
        className={clsx(
          'relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-secondary px-4 py-6',
          className
        )}
        style={{ overflow: 'hidden' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...attributes}
      >
        <div className="relative z-10 transition-colors duration-300 ease-linear hover:text-white">
          {children}
        </div>
        <div
          ref={circle}
          className={clsx(
            'absolute top-[100%] h-[20%] w-full rounded-full sm:h-[150%]',
            `bg-${backgroundColor}`
          )}
        />
      </Button>
    </Magnetic>
  );
}
