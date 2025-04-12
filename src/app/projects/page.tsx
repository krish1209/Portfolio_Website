'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const projects = [
  {
    title: 'Options Pricing Tool',
    src: '',
    href: 'https://pricingoptions.in',
    tag: 'Finance / Data',
    color: '#2C3E50'
  },
  {
    title: 'Monte Carlo Portfolio Simulations',
    src: '',
    href: 'https://github.com/krish1209/MonteCarloSims',
    tag: 'Finance / ML',
    color: '#34495E'
  },
  {
    title: 'Cryptocurrency forecasting',
    src: '',
    href: 'https://github.com/krish1209/Crypto-Forecasting',
    tag: 'ML / Finance',
    color: '#1A5276'
  },
  {
    title: 'ASL Learning platform',
    src: '',
    href: 'https://github.com/krish1209/ASLdetect',
    tag: 'AI / Accessibility',
    color: '#1ABC9C'
  },
  {
    title: 'Speech emotion recognition',
    src: '',
    href: 'https://github.com/krish1209/Speech-emotion-recognition',
    tag: 'ML / AI',
    color: '#8E44AD'
  }
];

export default function ProjectsHome() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Layout title={'My Work'} center={true}>
        <div className="mt-16 relative">
          
          <div className="m-0 overflow-hidden relative z-10">
            {projects.map((project, index) => {
              return (
                <Link href={project.href} key={index} target="_blank" rel="noopener noreferrer">
                  <ProjectLink
                    index={index}
                    title={project.title}
                    tag={project.tag}
                    color={project.color}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </Layout>
    </ModalContext.Provider>
  );
}
