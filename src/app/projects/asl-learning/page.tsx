'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Image from 'next/image';

export default function ASLLearning() {
  const heroText =
    'An interactive education platform that uses computer vision and machine learning ' +
    'to teach American Sign Language (ASL). The system provides real-time feedback on users\' ' +
    'signing technique through a webcam, offering an accessible and engaging way to learn ASL ' +
    'with personalized guidance and progress tracking.';

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="pt-10">
      <ProjectHero
        description={heroText}
        media={"/images/stylesync/stylesync.png"} // Placeholder image
        isImage={true}
        title={"ASL Learning Platform"}
        bgColour={"background"}
      />

      <div className="mx-8 sm:mx-24">
        {/* Project content will go here */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Project Overview</h2>
          <p>
            This platform leverages computer vision technology to create an engaging and effective learning environment for American Sign Language, making ASL education more accessible and interactive.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-time hand pose estimation and gesture recognition</li>
            <li>Progressive learning curriculum from basic signs to complex phrases</li>
            <li>Immediate feedback on signing accuracy with correction guidance</li>
            <li>Interactive lessons with gamification elements</li>
            <li>Progress tracking and personalized learning paths</li>
            <li>Community features for practice with other learners</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>TensorFlow.js for client-side machine learning</li>
            <li>MediaPipe for hand tracking and pose estimation</li>
            <li>React for the front-end user interface</li>
            <li>WebRTC for video processing</li>
            <li>Node.js and Express for the backend</li>
            <li>MongoDB for user data and progress tracking</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Impact and Accessibility</h2>
          <p>
            The platform was designed with accessibility as a core principle, supporting learning for individuals with various needs. User testing showed significantly faster learning rates compared to traditional methods, with higher retention of sign vocabulary over time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Future Enhancements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Expansion to include other sign languages beyond ASL</li>
            <li>Mobile app development for learning on-the-go</li>
            <li>Integration with AR/VR for immersive learning experiences</li>
            <li>AI conversation partners for practice without human partners</li>
          </ul>
        </section>

        <p className="conclusion mb-12">
          The ASL Learning Platform represents a significant step forward in accessible language education, demonstrating how AI and computer vision can create more effective and engaging learning experiences for sign languages.
        </p>
      </div>
    </div>
  );
}
