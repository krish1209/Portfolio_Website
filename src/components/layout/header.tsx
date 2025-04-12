'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Menu from '../nav';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { isMobile } from '@/components/util';
import Magnetic from '@/components/animations/magnetic';
import Image from 'next/image';

export default function Header() {
  const header = useRef(null);
  const navLinks = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Menu button animation
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out'
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out'
          });
        }
      }
    });
  }, []);

  return (
    <>
      <div
        ref={header}
        className="absolute top-0 z-20 box-border flex w-full items-center p-4 font-light text-white mix-blend-difference lg:p-8"
      >
        <div className="flex lg:pr-56">
          <Link href={'/'} className="group z-10 flex items-center space-x-2">
            <Magnetic>
              <div className="h-8 w-8 bg-primary rounded-full"></div>
            </Magnetic>
            {!isMobile() && (
              <>
                <div className="hover:rotate-[360deg]">©</div>
                <div className="relative flex overflow-hidden">
                  <div className="ease-custom-cubic transition-transform duration-500 group-hover:translate-x-[-100%]">
                    coded by
                  </div>
                  <div className="ease-custom-cubic px-1 transition-transform duration-500 group-hover:translate-x-[-65px]">
                    Krish
                  </div>

                  <div
                    className="ease-custom-cubic
              translate-x-full transition-transform duration-500 group-hover:translate-x-[-65px]"
                  >
                    Bagga
                  </div>
                </div>
              </>
            )}
          </Link>
        </div>
        {!isMobile() && (
          <div className="flex flex-1 items-center justify-between font-semibold">
            <div 
              ref={navLinks}
              className={`group relative z-10 flex cursor-pointer gap-6 p-3 transition-all duration-300 ease-in-out ${isScrolled ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}
            >
              <Magnetic>
                <Link href={'/about'}>About</Link>
              </Magnetic>
              <Magnetic>
                <Link href={'/work-history'}>Experience</Link>
              </Magnetic>
              <Magnetic>
                <Link href={'/certifications'}>Certifications</Link>
              </Magnetic>
              <Magnetic>
                <Link href={'/projects'}>Projects</Link>
              </Magnetic>
            </div>
            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <Magnetic>
                <div className="flex">
                  <Link href={'/contact'}>Contact</Link>
                  <ArrowUpRight size={18} />
                </div>
              </Magnetic>
            </div>
          </div>
        )}
      </div>
      {!isMobile() && (
        <div ref={button} className="fixed right-0 z-20 scale-0 transform">
          <Menu />
        </div>
      )}
      {isMobile() && (
        <div className="fixed right-2 z-20 transform">
          <Menu />
        </div>
      )}
    </>
  );
}
