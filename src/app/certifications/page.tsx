'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { cubicBezier } from 'framer-motion';
// Define certificate type
interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  credentialLink: string; 
  color: string;
}

// Certificate data
const certificates: Certificate[] = [
  {
    id: 1,
    title: 'NISM Series XV: Research Analyst Certification',
    organization: 'NISM',
    date: 'March 2025',
    credentialLink: 'https://drive.google.com/file/d/1wqCd-1Z8ZPB8WXrKzPA6r8uzgjNsPqfC/view?usp=sharing',
    color: '#4285F4'
  },
  {
    id: 2,
    title: 'Quantitative Research Job Simulation',
    organization: 'Forage',
    date: 'Feb 2025',
    credentialLink: 'https://drive.google.com/file/d/1_s6x3ILfFpd8gOo46r6vg2ohTFVjwzaV/view?usp=sharing',
    color: '#EA4335'
  },
  {
    id: 3,
    title: 'Investment Banking Job Simulation',
    organization: 'Forage',
    date: 'July 2024',
    credentialLink: 'https://drive.google.com/file/d/1xlc6W7sQJV9zWrt2S1UaJLlWhLC7HYOM/view?usp=sharing',
    color: '#34A853'
  },
  {
    id: 4,
    title: 'Python for Trading',
    organization: 'QuantInsti',
    date: 'Aug 2024',
    credentialLink: 'https://drive.google.com/file/d/1dhCgtjMhmftKwdUfM22hreNIf_XoU__H/view?usp=drive_linkS',
    color: '#FBBC05'
  },
  {
    id: 5,
    title: 'WorldQuant Gold',
    organization: 'WorldQuant LLC',
    date: 'July 2024',
    credentialLink: 'https://drive.google.com/file/d/1sl1jqQP3i3Nt0EIeNCKxXRke2WeCjcey/view?usp=sharing',
    color: '#6200EE'
  }
];

export default function Certifications() {
  const certificatesRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only run animations on the client side
    if (typeof window === 'undefined') return;
    
    let ctx: gsap.Context;
    
    try {
      // Register ScrollTrigger plugin
      if (!gsap.registerPlugin) {
        console.error("GSAP registerPlugin not found");
        return;
      }
      
      gsap.registerPlugin(ScrollTrigger);
      
      // Create a GSAP context for proper cleanup
      ctx = gsap.context(() => {
        // Background parallax effect
        if (pageRef.current) {
          const bgElements = document.querySelectorAll('.bg-gradient-to-b, .bg-gradient-to-t');
          bgElements.forEach(element => {
            gsap.to(element, {
              y: () => Math.random() * 40 - 20,
              scrollTrigger: {
                trigger: pageRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              }
            });
          });
        }
        // A safer animation setup that checks for element existence
        if (!certificatesRef.current) return;
        
        // Alternating slide animations for certificates
        const certificateItems = certificatesRef.current.querySelectorAll('.certificate-item');
        if (certificateItems.length > 0) {
          certificateItems.forEach((item, index) => {
            // Alternate between slide from left and slide from right
            const direction = index % 2 === 0 ? -1 : 1;
            const xOffset = direction * 100;
            
            gsap.set(item, { 
              opacity: 0, 
              x: xOffset 
            });
            
            gsap.to(item, {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 60%',
                scrub: false,
                toggleActions: 'play none none reverse'
              }
            });
          });
        }
        
        
        // Verification indicator animations
        const verificationIndicators = certificatesRef.current.querySelectorAll('.verify-indicator');
        if (verificationIndicators.length > 0) {
          gsap.set(verificationIndicators, { opacity: 0 });
          gsap.to(verificationIndicators, {
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
            scrollTrigger: {
              trigger: certificatesRef.current,
              start: 'top 75%',
            }
          });
        }
      });
    } catch (error) {
      console.error("Error setting up GSAP animations:", error);
    }
    
    return () => {
      // Properly clean up with context
      if (ctx) {
        ctx.revert(); // This automatically cleans up all ScrollTrigger instances
      }
    };
  }, []);
  
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#070707] to-[#030303] pt-40 md:pt-48 pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden antialiased">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Modern gradient effect */}
        <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-blue-600/15 via-indigo-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-purple-600/15 via-fuchsia-500/10 to-transparent"></div>
        
        {/* Floating orbs with subtle animations */}
        <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-indigo-500/15 blur-[130px] animate-pulse" 
             style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-violet-500/15 blur-[120px] animate-pulse" 
             style={{ animationDuration: '25s' }}></div>
        <div className="absolute top-[40%] left-[25%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse" 
             style={{ animationDuration: '30s' }}></div>
        <div className="absolute top-[30%] right-[30%] w-[250px] h-[250px] rounded-full bg-fuchsia-500/10 blur-[90px] animate-pulse" 
             style={{ animationDuration: '22s' }}></div>
        <div className="absolute bottom-[30%] right-[20%] w-[220px] h-[220px] rounded-full bg-cyan-500/10 blur-[80px] animate-pulse" 
             style={{ animationDuration: '18s' }}></div>
        
        {/* Minimal dot grid with noise texture */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
               backgroundSize: '50px 50px',
               transform: 'translateZ(0)'
             }}>
        </div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.2]"
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
               backgroundSize: '200px 200px',
               mixBlendMode: 'overlay'
             }}>
        </div>
      </div>
      
      {/* Page header */}
      <div className="mb-16 md:mb-24 text-center">
        <h1 className="pb-14 text-3xl font-medium lg:text-[8rem] text-white">
          Certifications
        </h1>
      </div>
      
      {/* Certificates container */}
      <div ref={certificatesRef} className="max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id}
            className="certificate-item mb-12 opacity-0"
          >
            <div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{ 
                background: `linear-gradient(135deg, rgba(20,20,20,0.7), rgba(0,0,0,0.85))`,
                boxShadow: `0 15px 40px -15px ${cert.color}40, inset 0 0 0 1px ${cert.color}15`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    {/* Certificate status indicator */}
                    <div className="verify-indicator w-3 h-3 rounded-full bg-green-400 relative">
                      <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-75"></span>
                    </div>
                    <div className="font-semibold text-gray-200">Verified</div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#f0f0f0] transition-colors duration-300 tracking-tight">{cert.title}</h2>
                    <p className="text-xl font-semibold" style={{ color: cert.color }}>{cert.organization}</p>
                    <p className="text-gray-300 mt-2 font-medium">{cert.date}</p>
                  </div>
                  
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-4">
                  <Link 
                    href={cert.credentialLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-black/30 border border-white/20 text-sm font-semibold transition-all duration-300 flex items-center gap-2 group-hover:border-white/30 hover:scale-105 hover:shadow-md"
                    style={{ 
                      background: `linear-gradient(to right, rgba(0,0,0,0.5), ${cert.color}40)`,
                      color: 'white',
                      boxShadow: `0 4px 15px -2px ${cert.color}20`
                    }}
                  >
                    <span>View Credential</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}