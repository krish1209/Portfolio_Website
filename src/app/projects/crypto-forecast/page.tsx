'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Image from 'next/image';

export default function CryptoForecast() {
  const heroText =
    'An advanced cryptocurrency price prediction system leveraging deep learning models ' +
    'including LSTM networks, transformer-based architectures, and sentiment analysis ' +
    'from social media to forecast crypto market movements and volatility with ' +
    'superior accuracy compared to traditional forecasting methods.';

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
        title={"Cryptocurrency Forecasting"}
        bgColour={"background"}
      />

      <div className="mx-8 sm:mx-24">
        {/* Project content will go here */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Project Overview</h2>
          <p>
            This project applies advanced machine learning techniques to the challenging domain of cryptocurrency price prediction, incorporating both technical data and market sentiment analysis.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Multi-feature time series forecasting using LSTM neural networks</li>
            <li>Sentiment analysis of Twitter, Reddit, and news sources</li>
            <li>Volatility prediction and risk assessment</li>
            <li>Market trend identification using pattern recognition</li>
            <li>Ensemble model combining multiple prediction approaches</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>TensorFlow and PyTorch for deep learning models</li>
            <li>NLP libraries including NLTK and spaCy for sentiment analysis</li>
            <li>CoinGecko and Binance APIs for market data</li>
            <li>Twitter and Reddit APIs for social sentiment</li>
            <li>Flask for API backend</li>
            <li>React with D3.js for interactive visualizations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Results and Impact</h2>
          <p>
            The model achieved prediction accuracy significantly above baseline methods, with particularly strong performance during periods of high market volatility. The sentiment analysis component proved especially valuable in anticipating major market movements triggered by external events.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Future Enhancements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Integration of on-chain data metrics</li>
            <li>Expansion to cover more altcoins and tokens</li>
            <li>Improved handling of regulatory news impacts</li>
            <li>Development of trading strategy backtesting framework</li>
          </ul>
        </section>

        <p className="conclusion mb-12">
          This cryptocurrency forecasting project demonstrates the potential of combining traditional time series analysis with sentiment data to improve prediction accuracy in highly volatile and sentiment-driven markets.
        </p>
      </div>
    </div>
  );
}
