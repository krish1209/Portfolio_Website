import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const creativity = 'Innovate ';
const is = 'or ';
const my = 'become ';
const craft = 'irrelevant';
const sentence3 = '.................................';

function getRandomSpeed() {
  const randomDecimal = Math.random();
  return 0.8 + randomDecimal * (1.5 - 0.8); // Increased speed range
}
function getRandomRotation() {
  return Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5
      },
      rotation: getRandomRotation()
    });
  });
};

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <div
      key={index}
      className="letter text-4xl font-semibold xs:text-[60px] xs:leading-none md:text-[80px] lg:text-[100px] xl:text-[140px] "
      data-speed={getRandomSpeed()}
    >
      {letter}
    </div>
  ));
}

export function LetterCollision() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animateLettersOnScroll(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="ml-8 scroll-smooth">
      <div className="mt-0 md:mt-8 lg:mt-16 mb-28 flex h-[95vh] flex-col justify-center lg:mb-20">
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={creativity} />
          <div className="w-1 xs:w-3 sm:w-8"></div>
          <LetterDisplay word={is} />
        </div>
        <div className="flex flex-wrap mt-0 sm:mt-[-10px] md:mt-[-15px] lg:mt-[-20px]">
          <LetterDisplay word={my} />
          <div className="w-1 xs:w-3 sm:w-8"></div>
          <LetterDisplay word={craft} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  );
}
