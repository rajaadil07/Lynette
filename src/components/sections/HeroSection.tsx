'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-brand-dark relative overflow-hidden">
      {/* Premium multi-layered gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1B1B1F]/95 to-brand-gray/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(93,156,236,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,192,45,0.08),transparent_50%)]" />
      </div>
      
      {/* Advanced animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[80px] animate-pulse opacity-50" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-yellow/8 rounded-full blur-[60px] animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-brand-blue/10 to-brand-yellow/10 rounded-full blur-[40px] animate-pulse opacity-30" style={{ animationDelay: '4s' }} />
      </div>

      {/* Premium dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23F8F9FA'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header spacing */}
        <div className="h-40" />

        {/* Main Hero Content */}
        <div className="text-center max-w-7xl mx-auto">
          {/* Enhanced Primary Headline */}
          <div className="mb-14 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-inter font-thin leading-[0.8] tracking-[-0.03em] text-brand-light mb-8">
              Connect, create,
            </h1>
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-inter font-extralight italic leading-[0.8] tracking-[-0.03em] bg-gradient-to-r from-brand-blue via-[#7DB0F0] to-brand-yellow bg-clip-text text-transparent animate-gradient-x">
                like the pros
              </h1>
              {/* Animated underline accent */}
              <div className="absolute -bottom-6 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-brand-blue/80 to-transparent rounded-full animate-pulse" />
              <div className="absolute -bottom-6 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-brand-yellow/60 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Clean Subtitle */}
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <p className="max-w-4xl mx-auto text-xl md:text-2xl lg:text-3xl text-brand-gray/90 leading-relaxed font-inter font-light tracking-normal">
              The ghost link between you and your clients. Crystal-clear project visibility, 
              seamless collaboration, and professional delivery—all in one platform.
            </p>
          </div>

          {/* Professional CTA Section */}
          <div className="mb-24 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/signup">
                <Button variant="hero-cta" className="min-w-[280px]">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" className="min-w-[280px]">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>

      {/* Premium bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent" />
      
      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </div>
  );
} 