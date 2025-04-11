'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Prompt Engineer',
    company: 'Outlier.ai',
    period: 'Oct 2024 - Jan 2025',
    description: [
      'Engineered prompts to strategically induce controlled errors in multimodal LLM models, applying mathematical frameworks to identify and address weaknesses in model accuracy',
      'Designed and implemented adversarial testing protocols to evaluate model robustness across diverse input scenarios'
    ],
    skills: ['LLM Prompt Engineering', 'GPT-4', 'Claude', 'Multimodal Models', 'Python', 'Adversarial Testing', 'NLP']
  },
  {
    id: 2,
    role: 'Research Consultant',
    company: 'WorldQuant LLC',
    period: 'Apr 2024 - Aug 2024',
    description: [
      'Ranked 23rd globally in IQC 2024 on the WorldQuant Brain platform, validating strategic model efficacy',
      'Developed and implemented 15+ quantitative models using Python, achieving a 20% ROI and simulating 1000+ models',
      'Utilized libraries like NumPy, Pandas, and statistical tools for data analysis, outperforming traditional fixed deposits by 14%'
    ],
    skills: ['Python', 'Quantitative Modeling', 'NumPy', 'Pandas', 'Statistical Analysis', 'Financial Modeling', 'WorldQuant Brain']
  }
];

const education = {
  degree: 'Bachelor of Technology in Computer Science (AI & ML)',
  institution: 'Vellore Institute of Technology',
  period: 'Apr 2020 - Aug 2024',
  location: 'Vellore, India',
  description: 'Specialized in Artificial Intelligence and Machine Learning with a focus on deep learning, computer vision, and natural language processing. Developed strong foundations in data structures, algorithms, and software development methodologies.',
  achievements: [],
  courses: ['Data Structures & Algorithms', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Probability & Statistics', 'Stochastic Calculus', 'Linear Algebra', 'Reinforcement Learning', 'Neural Networks', 'Big Data Analytics', 'Time Series Analysis', 'Optimization Methods']
};

export default function WorkHistory() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Simple effects for education section
    gsap.set('.education-card', { opacity: 1 });
    gsap.set('.decoration-element', { opacity: 0.6 });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-foreground pt-40 md:pt-48 pb-24 px-4 md:px-8 lg:px-16">
      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary mb-4">
          Work Experience
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A journey through my professional career and the impact I&apos;ve made
        </p>
      </motion.div>

      <div ref={timelineRef} className="max-w-6xl mx-auto relative mb-32">
        {/* Vertical Timeline Line - simple div with fixed styling */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '0',
          marginLeft: '-2px',
          width: '4px',
          height: '100%',
          backgroundColor: 'purple',
          minHeight: '500px'
        }}></div>
        
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            id={`experience-${exp.id}`}
            className={`flex flex-col md:flex-row md:items-start gap-8 mb-32 relative`}
          >
            {/* Left side content */}
            <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-1 md:pl-12'}`}>
              {index % 2 === 0 ? (
                <div className="space-y-4 bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/5">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-xl font-semibold text-primary mb-1">{exp.company}</h4>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 pl-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative pl-2 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-[-12px] before:top-[8px]">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 justify-end mt-3">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-black/40 text-primary text-xs font-medium rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            
            {/* Mobile view */}
            <div className="md:hidden flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-secondary/20">
                {exp.id}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-primary">{exp.company}</h4>
              </div>
            </div>
            
            {/* Right side content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1 md:pl-12' : 'md:pr-12'}`}>
              {index % 2 === 0 ? null : (
                <div className="space-y-4 bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/5">
                  <div>
                    <h3 className="md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="md:text-xl font-semibold text-primary mb-1">{exp.company}</h4>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 pl-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative pl-2 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-[-12px] before:top-[8px]">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-black/40 text-primary text-xs font-medium rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Timeline node (small circle) */}
            <div 
              style={{
                position: 'absolute',
                left: '50%',
                top: '24px',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '3px solid purple',
                zIndex: 2
              }}
            />
            
            {/* Number circle */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                transform: 'translateX(-50%)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'purple',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                zIndex: 3
              }}
            >
              {exp.id}
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-secondary mb-4">
          Education
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Academic background and learning journey
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Education Card */}
          <div className="education-card bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-secondary/20 shadow-xl shadow-secondary/5 overflow-hidden">
            {/* Floating decoration elements */}
            <div className="decoration-element absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="decoration-element absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            
            {/* Header with logo */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 relative">
              <div className="education-content mb-4 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{education.degree}</h2>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary/30 backdrop-blur-sm flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-xl font-medium text-secondary">{education.institution}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="bg-black/40 px-4 py-2 rounded-xl border border-secondary/20">
                  <div className="text-sm text-gray-400">Specialization</div>
                  <div className="text-xl font-bold text-white">AI & ML</div>
                </div>
              </div>
            </div>
            
            {/* Detail section */}
            <div className="grid md:grid-cols-5 gap-8">
              {/* Left column - main info */}
              <div className="md:col-span-3 space-y-6">
                <div className="education-content">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{education.period}</span>
                    <span className="mx-2 text-gray-600">•</span>
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{education.location}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{education.description}</p>
                </div>
                
              </div>
              
              {/* Right column - courses */}
              <div className="md:col-span-2">
                <div className="education-content bg-black/40 p-4 rounded-xl border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    Relevant Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, idx) => (
                      <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}