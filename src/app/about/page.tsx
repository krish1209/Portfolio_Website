'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function About() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // More dynamic particle animation
    if (!starsRef.current) return;
    
    // Create different animation groups
    const particles = starsRef.current.children;
    const particleCount = particles.length;
    
    // Group 1: Slow drifting particles
    gsap.to(Array.from(particles).slice(0, particleCount * 0.4), {
      y: 'random(-30, 30)',
      x: 'random(-30, 30)',
      opacity: 'random(0.2, 0.7)',
      duration: 'random(5, 10)',
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.02
    });
    
    // Group 2: Gently pulsing particles
    gsap.to(Array.from(particles).slice(particleCount * 0.4, particleCount * 0.7), {
      scale: 'random(0.7, 1.3)',
      opacity: 'random(0.3, 0.8)',
      duration: 'random(3, 7)',
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.03
    });
    
    // Group 3: More active particles
    gsap.to(Array.from(particles).slice(particleCount * 0.7), {
      y: 'random(-50, 50)',
      x: 'random(-50, 50)',
      rotation: 'random(-180, 180)',
      duration: 'random(7, 12)',
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.01
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="mt-36 px-8 py-16 sm:py-20">
        <h1 className="pb-14 text-3xl font-medium lg:text-[8rem] text-white text-center">
          About Me
        </h1>
        
        <div className="relative min-h-screen">
          {/* Dynamic background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Modern gradient orbs with better contrast */}
            <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-500/15 blur-[150px] animate-pulse" style={{ animationDuration: '15s' }}></div>
            <div className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] rounded-full bg-purple-500/15 blur-[130px] animate-pulse" style={{ animationDuration: '25s' }}></div>
            <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-blue-500/15 blur-[120px] animate-pulse" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-[30%] right-[15%] w-[250px] h-[250px] rounded-full bg-cyan-400/15 blur-[100px] animate-pulse" style={{ animationDuration: '18s' }}></div>
            
            {/* Subtle noise texture */}
            <div className="absolute inset-0 opacity-[0.2]"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                  backgroundSize: '200px 200px',
                  mixBlendMode: 'overlay'
                }}>
            </div>
          </div>
          
          {/* Animated particles */}
          <div ref={starsRef} className="absolute inset-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3}px`,
                  height: `${Math.random() * 3}px`,
                  backgroundColor: i % 5 === 0 ? '#60a5fa' : 
                                  i % 5 === 1 ? '#818cf8' : 
                                  i % 5 === 2 ? '#a78bfa' : 
                                  i % 5 === 3 ? '#c084fc' : '#f0abfc',
                  opacity: 0.3 + (Math.random() * 0.4)
                }}
              />
            ))}
          </div>

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col gap-10">
                <div className="p-8">
                  <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                    <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-purple-100">Skills & Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-indigo-900/30 p-6 rounded-xl border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/30 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-white">Financial Modeling</h3>
                        </div>
                        <ul className="space-y-2 text-white">
                          {['Options Pricing Models', 'Portfolio Optimization', 'Risk Assessment', 'Time Series Analysis'].map((skill, i) => (
                            <li key={i} className="flex items-center">
                              <span className="mr-2 text-indigo-300 font-bold">•</span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-white">Machine Learning</h3>
                        </div>
                        <ul className="space-y-2 text-white">
                          {['Predictive Modeling', 'Deep Learning', 'NLP & Computer Vision', 'Reinforcement Learning'].map((skill, i) => (
                            <li key={i} className="flex items-center">
                              <span className="mr-2 text-purple-300 font-bold">•</span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="space-y-6 text-white">
                    <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                      A data and quantitative engineer with expertise in financial modeling, machine learning, and AI systems.
                    </h2>
                    
                    <div className="bg-indigo-900/30 p-6 rounded-lg border-l-4 border-indigo-400 mb-6">
                      <p className="text-lg sm:text-xl font-medium text-white">
                        I have a strong track record of developing innovative solutions for complex data and financial problems.
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-white">
                      <p className="text-lg sm:text-xl leading-relaxed">
                        My experience spans developing sophisticated options pricing models, portfolio optimization tools, and 
                        quantitative trading systems. I have a particular interest in applying machine learning to financial markets 
                        and creating tools that make complex financial concepts more accessible.
                      </p>
                      
                      <p className="text-lg sm:text-xl leading-relaxed">
                        I've worked extensively with time series analysis, statistical modeling, and algorithmic trading strategies.
                        My work combines solid mathematical foundations with practical implementation, always focusing on delivering
                        systems that provide actionable insights from complex data.
                      </p>
                      
                      <div className="flex items-center space-x-4 py-4">
                        <div className="w-1/3 h-[2px] bg-gradient-to-r from-indigo-400 to-transparent"></div>
                        <div className="text-indigo-300 font-bold">Additional Interests</div>
                        <div className="w-1/3 h-[2px] bg-gradient-to-l from-indigo-400 to-transparent"></div>
                      </div>
                      
                      <p className="text-lg sm:text-xl leading-relaxed">
                        In addition to my financial work, I've developed AI systems for accessibility and human-computer interaction,
                        including platforms for American Sign Language learning and speech emotion recognition.
                      </p>
                      
                      <p className="text-lg sm:text-xl leading-relaxed">
                        I'm particularly interested in the intersection of AI and finance, exploring how machine learning can improve 
                        market predictions, risk assessment, and investment decisions in both traditional and cryptocurrency markets.
                      </p>
                      
                      <p className="text-lg sm:text-xl leading-relaxed bg-purple-900/30 p-4 rounded-lg border-r-4 border-purple-400 mt-6">
                        When I'm not coding or analyzing data, I enjoy contributing to open-source projects and mentoring aspiring
                        data scientists and engineers. I believe in creating technology that has meaningful impact and empowers users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}