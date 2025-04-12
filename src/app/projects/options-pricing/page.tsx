'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Image from 'next/image';

export default function OptionsPricing() {
  const heroText =
    'A comprehensive tool for pricing options using various mathematical models including Black-Scholes, ' + 
    'Binomial, and Monte Carlo simulations. The application provides interactive visualizations of option ' +
    'pricing dynamics, Greeks, and volatility surfaces to aid in financial decision-making.';

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
        title={"Options Pricing Tool"}
        bgColour={"background"}
      />

      <div className="mx-8 sm:mx-24">
        {/* Project content will go here */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Project Overview</h2>
          <p>
            This tool was designed to provide traders and analysts with a powerful platform for pricing and analyzing options contracts using multiple valuation models.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Implementation of Black-Scholes, Binomial, and Monte Carlo pricing models</li>
            <li>Interactive visualization of option value across different parameters</li>
            <li>Greek calculations (Delta, Gamma, Theta, Vega, Rho)</li>
            <li>Volatility surface modeling and analysis</li>
            <li>Comparative model analysis to highlight differences between approaches</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Python with NumPy and SciPy for numerical computations</li>
            <li>Pandas for data manipulation and analysis</li>
            <li>Matplotlib and Plotly for interactive visualizations</li>
            <li>React for the front-end user interface</li>
            <li>Flask for the API backend</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Future Enhancements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Integration with real-time market data</li>
            <li>Expansion to include exotic options pricing</li>
            <li>Portfolio-level risk analysis</li>
            <li>Machine learning-based volatility prediction</li>
          </ul>
        </section>

        <p className="conclusion mb-12">
          The Options Pricing Tool demonstrates the practical application of financial mathematics and computational methods to create a valuable resource for options traders and financial analysts.
        </p>
      </div>
    </div>
  );
}
