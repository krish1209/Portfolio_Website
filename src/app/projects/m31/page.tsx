'use client';
import ProjectHero from '@/app/projects/project/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

export default function M31Project() {
  // Create properly typed placeholder images
  const placeholderImage: StaticImageData = { 
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='500' viewBox='0 0 700 500'%3E%3Crect width='700' height='500' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23333333'%3EPlaceholder Image%3C/text%3E%3C/svg%3E",
    height: 500,
    width: 700
  };
  
  // Empty but properly typed array
  const researchAssets: string[] = [];
  
  const introduction =
    'Andromeda is a new audio-tactile gaming system that promotes socially inclusive play between visually impaired and sighted individuals. ' +
    'It expands the non-visual output of existing games, opening up the possibility for ' +
    'people with severe visual impairments to explore digital spaces and experience games.';

  const description = 'Explore Worlds Through Feel and Sound';
  const myRole =
    'As a designer and full stack software engineer, I was involved in the project,' +
    'from the initial concept to the final launch. I worked closely with the team to develop the overall aesthetics,' +
    'brand identity, and UI/UX design of the product, as well as the engineering behind the audio-tactile gaming system.';

  return (
    <div className="bg-foreground">
      <ProjectHero
        description={myRole}
        media={'https://www.youtube.com/embed/bXaLimCtK50'}
        isImage={false}
        title={'M31'}
      />
      <PageScrollParallax
        title={'Expanding the Non-Visual Output of Games'}
        body={introduction}
        word={description}
        staticImgs={[placeholderImage, placeholderImage, placeholderImage]} 
      />
      {/* Only render images if they exist */}
      {researchAssets.length > 0 && (
        <div>
          {researchAssets.map((asset, index) => (
            <Image
              key={index}
              src={asset}
              alt="Project specs"
              width={700}
              height={500}
              quality={100}
              layout="responsive"
            />
          ))}
        </div>
      )}
    </div>
  );
}