'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const projects = [
  {
    title: 'StyleSync',
    src: 'stylesync/stylesync.png',
    href: '/projects/stylesync',
    tag: 'ML / AI',
    color: 'Black'
  },
  
  // {
  //   title: 'DAO social network',
  //   src: 'sojo/astra.png',
  //   href: '/projects/catapult-v1',
  //   tag: 'Software',
  //   color: '#303030'
  // },
  // {
  //   title: 'SOJO',
  //   src: 'sojo/astra.png',
  //   href: '/projects/sojo',
  //   tag: 'Software',
  //   color: '#303030'
  // },
  // {

];

export default function ProjectsHome() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Layout title={'My Work'}>
        <div className="m-0">
          <div className="m-0 overflow-hidden">
            {projects.map((project, index) => {
              return (
                <Link href={project.href} key={index}>
                  <ProjectLink
                    index={index}
                    title={project.title}
                    tag={project.tag}
                  />
                </Link>
              );
            })}
          </div>
          <Modal projects={projects} />
        </div>
      </Layout>
    </ModalContext.Provider>
  );
}
