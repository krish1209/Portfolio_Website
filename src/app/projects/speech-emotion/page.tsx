'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Image from 'next/image';

export default function SpeechEmotion() {
  const heroText =
    'An advanced system for detecting and analyzing emotions in human speech using ' +
    'deep learning techniques. By extracting acoustic features and leveraging neural ' +
    'networks, the system can identify emotions such as happiness, sadness, anger, and ' +
    'fear with high accuracy, with applications in customer service, mental health monitoring, ' +
    'and human-computer interaction.';

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
        title={"Speech Emotion Recognition"}
        bgColour={"background"}
      />

      <div className="mx-8 sm:mx-24">
        {/* Project content will go here */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Project Overview</h2>
          <p>
            This system applies deep learning techniques to the challenging task of recognizing human emotions from speech signals, creating a robust model that works across different speakers and acoustic environments.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Extraction of acoustic features including MFCC, chroma, and spectral contrast</li>
            <li>Deep learning model combining CNN and LSTM architectures</li>
            <li>Multi-language support for emotion detection</li>
            <li>Real-time processing capabilities</li>
            <li>Emotion intensity measurement and confidence scoring</li>
            <li>Speaker-independent emotion recognition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Python with librosa for audio feature extraction</li>
            <li>TensorFlow and Keras for deep learning model development</li>
            <li>RAVDESS, TESS, and CREMA-D datasets for training</li>
            <li>Flask for API integration</li>
            <li>React for the demonstration interface</li>
            <li>WebRTC for in-browser audio processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Results and Performance</h2>
          <p>
            The model achieved 89% accuracy on test datasets, with particularly strong performance in detecting happiness and anger. Cross-validation across different datasets demonstrated robust generalization capabilities across diverse speakers and recording conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Customer service quality monitoring and improvement</li>
            <li>Mental health applications for mood tracking</li>
            <li>Enhanced voice assistants with emotional awareness</li>
            <li>Educational tools for children with autism to help recognize emotions</li>
            <li>Market research and focus group analysis</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Future Enhancements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Integration with facial expression analysis for multimodal emotion detection</li>
            <li>Expansion to recognize more subtle emotional states</li>
            <li>Adaptation for specific industry applications</li>
            <li>Mobile SDK development for widespread integration</li>
          </ul>
        </section>

        <p className="conclusion mb-12">
          The Speech Emotion Recognition system demonstrates the potential of deep learning to extract and interpret the emotional content of human speech, opening new possibilities for more natural and empathetic human-computer interaction.
        </p>
      </div>
    </div>
  );
}
