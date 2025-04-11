'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Layout from '@/components/layout';
import { useGitHub } from '@/hooks/useGithub';
import GitHubContributionsGraph from '@/app/about/githubActivity';
import Link from 'next/link';

export default function About() {
  const starsRef = useRef<HTMLDivElement>(null);

  const {
    githubData,
    isLoading: githubLoading,
    error: githubError
  } = useGitHub();

  useEffect(() => {
    // Animate stars
    if (!starsRef.current) return;
    gsap.to(starsRef.current?.children, {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-360, 360)',
      duration: 3,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      stagger: 0.1
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900">
      <Layout title="About Me" center>
        <div className="relative min-h-screen">
          <div ref={starsRef}>
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-blue-400 opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3}px`,
                  height: `${Math.random() * 3}px`
                }}
              />
            ))}
          </div>

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col gap-10">
                <div className="relative p-8">
                  <div className="bg-blue-500 absolute inset-0 rounded-xl blur-3xl opacity-20" />
                  <div className="relative z-10 p-8 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-300">Skills & Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-200">Financial Modeling</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          <li>Options Pricing Models</li>
                          <li>Portfolio Optimization</li>
                          <li>Risk Assessment</li>
                          <li>Time Series Analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-200">Machine Learning</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          <li>Predictive Modeling</li>
                          <li>Deep Learning</li>
                          <li>NLP & Computer Vision</li>
                          <li>Reinforcement Learning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="text-white space-y-8">
                  <p className="text-2xl font-semibold">
                    A data and quantitative engineer with expertise in financial modeling, machine learning, and AI systems.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I have a strong track record of developing innovative solutions for complex data and financial problems.
                  </p>
                  <p className="text-lg sm:text-xl">
                    My experience spans developing sophisticated options pricing models, portfolio optimization tools, and 
                    quantitative trading systems. I have a particular interest in applying machine learning to financial markets 
                    and creating tools that make complex financial concepts more accessible.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I've worked extensively with time series analysis, statistical modeling, and algorithmic trading strategies.
                    My work combines solid mathematical foundations with practical implementation, always focusing on delivering
                    systems that provide actionable insights from complex data.
                  </p>
                  <p className="text-lg sm:text-xl">
                    In addition to my financial work, I've developed AI systems for accessibility and human-computer interaction,
                    including platforms for American Sign Language learning and speech emotion recognition.
                  </p>
                  <p className="text-lg sm:text-xl">
                    I'm particularly interested in the intersection of AI and finance, exploring how machine learning can improve 
                    market predictions, risk assessment, and investment decisions in both traditional and cryptocurrency markets.
                  </p>
                  <p className="text-lg sm:text-xl">
                    When I'm not coding or analyzing data, I enjoy contributing to open-source projects and mentoring aspiring
                    data scientists and engineers. I believe in creating technology that has meaningful impact and empowers users.
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="flex flex-col gap-10 pt-10"
              href="https://github.com/krish1209"
            >
              {githubLoading ? (
                <div></div>
              ) : githubError ? (
                <div></div>
              ) : githubData ? (
                <GitHubContributionsGraph
                  contributions={githubData.contributions}
                  totalContributions={githubData.totalContributions}
                  restrictedContributions={githubData.restrictedContributions}
                />
              ) : null}
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
