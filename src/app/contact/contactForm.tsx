'use client';
import React from 'react';
import { useToast } from '@/components/ui/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const email = 'krish.bagga10@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      
      // Show success toast notification
      toast({
        title: "Copied!",
        description: "Email address copied to clipboard",
        duration: 3000,
        className: "bg-gradient-to-r from-green-400 to-blue-500 text-white border-none"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy email. Please try manually.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Let&apos;s talk!
          </h2>
          <p className="text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl">
            To use and expand my skills.
          </p>
        </div>
        <div className="col-span-2">
          <div className="flex items-center justify-center h-full">
            <div className="mr-4 text-3xl">→</div>
            <button 
              onClick={copyToClipboard}
              className="group relative flex items-center text-2xl font-medium transition-colors hover:text-primary-500"
            >
              {email}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-500 transition-all group-hover:w-full"></span>
              <span className="ml-2 text-sm opacity-70">(click to copy)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
