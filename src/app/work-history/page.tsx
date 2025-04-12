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
    
    // Add subtle mouse parallax effect to background elements
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const orbs = document.querySelectorAll('.bg-primary\\/10, .bg-secondary\\/10, .bg-primary\\/5');
      orbs.forEach((orb, index) => {
        const depth = 0.05 + (index * 0.01);
        const moveX = (mouseX - 0.5) * 50 * depth;
        const moveY = (mouseY - 0.5) * 50 * depth;
        
        gsap.to(orb, {
          x: moveX,
          y: moveY,
          duration: 1,
          ease: 'power2.out'
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-40 md:pt-48 pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] animate-float-slow"></div>
        <div className="absolute top-[60%] right-[5%] w-[250px] h-[250px] rounded-full bg-secondary/10 blur-[60px] animate-float"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[200px] h-[200px] rounded-full bg-primary/5 blur-[50px] animate-float-reverse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMDIwMjAiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDAgaDYwIHY2MCBIMHoiLz48cGF0aCBkPSJNMzAgMCB2NjAiIHN0cm9rZT0iIzIwMjAyMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48cGF0aCBkPSJNMCAwIGg2MCIgc3Ryb2tlPSIjMjAyMDIwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
                animationDuration: `${10 + Math.random() * 40}s`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `float ${8 + Math.random() * 7}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>
      {/* Work Experience Section */}
      <div className="mb-20 text-center">
        <h1 className="pb-14 text-3xl font-medium lg:text-[8rem] text-white">
          Work Experience
        </h1>
      </div>

      <div ref={timelineRef} className="max-w-6xl mx-auto relative mb-32">
        {/* Vertical Timeline Line with animated gradient */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '0',
          marginLeft: '-2px',
          width: '4px',
          height: '100%',
          background: 'linear-gradient(180deg, #8b5cf6, #ec4899)',
          minHeight: '500px',
          boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)',
          animation: 'pulse 4s infinite'
        }}>
          {/* Animated glow for the timeline */}
          <style jsx>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
            }
          `}</style>
        </div>
        
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            id={`experience-${exp.id}`}
            className={`experience-card flex flex-col md:flex-row md:items-start gap-8 mb-32 relative`}
          >
            {/* Left side content */}
            <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-1 md:pl-12'}`}>
              {index % 2 === 0 ? (
                <div className="space-y-4 bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/5 relative">
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-xl font-semibold text-primary mb-1">{exp.company}</h4>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 pl-5 relative z-10">
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative pl-2 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-[-12px] before:top-[8px]">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 justify-end mt-3 relative z-10">
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
                <div className="space-y-4 bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/5 relative">
                  
                  <div className="relative z-10">
                    <h3 className="md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="md:text-xl font-semibold text-primary mb-1">{exp.company}</h4>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 text-gray-300 pl-5 relative z-10">
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative pl-2 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-[-12px] before:top-[8px]">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3 relative z-10">
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
                border: '3px solid #8b5cf6',
                zIndex: 2,
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
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
                background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                zIndex: 3,
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
                animation: 'pulse 2s infinite'
              }}
            >
              {exp.id}
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mb-12 text-center">
        <h1 className="pb-14 text-3xl font-medium lg:text-[8rem] text-white">
          Education
        </h1>
      </div>

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