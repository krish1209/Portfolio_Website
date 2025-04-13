'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import { StaticImageData } from 'next/image';
import PageScrollParallax from '@/components/pageScrollParallax';
import TextGradient from '@/components/animations/textAnimations/textGradient';

export default function StackersProject() {
  // Create placeholder image with correct typing
  const placeholderImage: StaticImageData = { 
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='500' viewBox='0 0 700 500'%3E%3Crect width='700' height='500' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23333333'%3EStackers Placeholder%3C/text%3E%3C/svg%3E",
    height: 500,
    width: 700
  };

  const phrase =
    'By 2050, there will be more plastic than fish in the ocean by weight. ' +
    'Approximately 100,000 marine mammals and 1 million seabirds die each year' +
    ' from plastic pollution. Only about 9% of all plastic waste ever produced has been recycled.';

  const heroText =
    'Sustainable solutions for the lifecycle of baby care products. [2018 university project]';
  const introduction = `
    As a design engineer, I tackled the environmental impact of single-use plastics in baby care packaging by designing StackeRs, an innovative solution that reduces waste and provides value to end-users. Leveraging my skills in design thinking, 3D modeling (CAD), and sustainable design principles, I developed a packaging concept that transforms into a set of versatile, safe building blocks post-use.

    Through iterative prototyping and material exploration, I refined the design for optimal functionality and manufacturability, opting for 95% recycled plastics. I also devised a closed-loop system for collection and recycling of the blocks.\n

    StackeRs demonstrate my ability to apply a user-centric, sustainability-focused approach to product design, combining research, creativity, and technical skills to address real-world challenges. This project highlights my proficiency in:\n\n

    - Design thinking and problem-solving
    - 3D modeling and rapid prototyping
    - Material selection and sustainable design principles
    - Iterative design and testing
    - Designing for manufacturability and end-of-life
  `;

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <ProjectHero
        description={heroText}
        media={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='500' viewBox='0 0 700 500'%3E%3Crect width='700' height='500' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23333333'%3EStackers Hero%3C/text%3E%3C/svg%3E"}
        isImage={true}
        title={'StackeRs'}
        bgColour={'background'}
      />
      <TextGradient phrase={phrase} colour={'primary'} />
      <PageScrollParallax
        title={'StackeRs'}
        body={introduction}
        word={''}
        staticImgs={[placeholderImage, placeholderImage, placeholderImage]}
      />
      <div className="h-10 w-full p-24"></div>
      {/* Image gallery section removed */}
    </div>
  );
}