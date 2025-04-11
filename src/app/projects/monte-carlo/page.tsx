'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Image from 'next/image';

export default function MonteCarlo() {
  const heroText =
    'A sophisticated portfolio optimization and risk analysis system using Monte Carlo simulations ' +
    'to generate thousands of potential future scenarios. This tool helps investors understand ' +
    'portfolio risk characteristics, optimize asset allocation, and evaluate the probability of ' +
    'meeting financial goals under different market conditions.';

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
        title={"Monte Carlo Portfolio Simulations"}
        bgColour={"background"}
      />

      <div className="mx-8 sm:mx-24">
        {/* Project content will go here */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Project Overview</h2>
          <p>
            This system employs Monte Carlo simulation techniques to model potential portfolio outcomes over time, providing investors with a probabilistic view of expected returns and potential risks.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Generation of thousands of potential portfolio pathways based on historical data and statistical properties</li>
            <li>Value-at-Risk (VaR) and Conditional Value-at-Risk (CVaR) calculations</li>
            <li>Portfolio optimization using efficient frontier analysis</li>
            <li>Stress testing under various market scenarios</li>
            <li>Retirement planning and goal-based investment analysis</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Python with NumPy and SciPy for statistical calculations</li>
            <li>Pandas for time-series data processing</li>
            <li>PyPortfolioOpt for portfolio optimization</li>
            <li>D3.js for interactive data visualizations</li>
            <li>Flask for API endpoints</li>
            <li>React for the front-end dashboard</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Future Enhancements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Integration of machine learning for improved return predictions</li>
            <li>Addition of alternative asset classes and complex derivatives</li>
            <li>Real-time market data integration</li>
            <li>Personalized risk profiling and recommendation system</li>
          </ul>
        </section>

        <p className="conclusion mb-12">
          The Monte Carlo Portfolio Simulation tool bridges the gap between complex financial theories and practical investment decision-making, providing investors with powerful insights into potential portfolio outcomes.
        </p>
      </div>
    </div>
  );
}
