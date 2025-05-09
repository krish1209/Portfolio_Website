'use client';

import React from 'react';
import Image from 'next/image';

interface Paragraph {
  title: string;
  text: string;
  images: string[];
}

interface ProjectBodyProps {
  subtitle: string;
  introduction: string;
  myRole: string;
  paragraphs: Paragraph[];
}

export default function ProjectBody({
  subtitle,
  introduction,
  myRole,
  paragraphs,
}: ProjectBodyProps) {
  return (
    <section className="py-14 text-background mix-blend-difference sm:py-20">
      <div className="mx-auto max-w-2xl space-y-6 px-8 sm:px-12 lg:max-w-7xl lg:px-16">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          {subtitle}
        </h2>
        <div className="space-y-12">
          <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            {introduction}
          </p>
          <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            {myRole}
          </p>
        </div>

        {paragraphs.map((paragraph, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2"
          >
            {/* Replace ImgTilt with a normal Image or <img> */}
            <div className="shadow-3xl z-10 m-10 overflow-hidden rounded-3xl bg-cover">
              <Image
                src={paragraph.images[0]}
                alt={paragraph.title}
                width={600}
                height={400}
                className="object-cover"
              />
            </div>

            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl font-medium tracking-tight">
                {paragraph.title}
              </h3>
              <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                {paragraph.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
