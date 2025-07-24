'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#1B1B1F] overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1F] to-[#16161A]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D9CEC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FBC02D]/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 md:pt-48 lg:pt-56 pb-20 lg:px-8">
        <div className="text-center">
          {/* Tagline */}
          <div className={`mb-6 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[#FBC02D] font-inter text-sm font-medium uppercase tracking-[0.1em]">
              Where Ghostwriters Connect & Deliver Like Pros
            </p>
          </div>

          {/* Main headline */}
          <h1 className={`font-inter text-5xl md:text-6xl lg:text-7xl font-normal text-[#F8F9FA] leading-[1.1] transition-opacity duration-700 delay-100 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}>
            The Professional Platform for
            <br />
            <span className="font-lora italic text-[#5D9CEC]">
              Ghostwriters
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`mt-8 text-lg md:text-xl text-[#F8F9FA]/60 max-w-2xl mx-auto leading-relaxed font-inter transition-opacity duration-700 delay-200 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}>
            Transform scattered client communications into streamlined workflows. 
            The only software built by ghostwriters for ghostwriters.
          </p>

          {/* CTA section */}
          <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-opacity duration-700 delay-300 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}>
            <Link href="/waitlist">
              <Button className="h-12 px-8 bg-[#5D9CEC] hover:bg-[#4D8CDB] text-white font-inter font-medium rounded-lg transition-colors duration-200">
                Join waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button 
                variant="outline" 
                className="h-12 px-8 border-[#F8F9FA]/20 text-[#F8F9FA] hover:bg-[#F8F9FA]/5 font-inter font-medium rounded-lg transition-colors duration-200"
              >
                Watch demo
              </Button>
            </Link>
          </div>

          {/* Trust indicator */}
          <p className={`mt-12 text-sm text-[#F8F9FA]/40 font-inter transition-opacity duration-700 delay-400 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}>
            Trusted by <span className="text-[#FBC02D] font-medium">500+ ghostwriters</span> worldwide
          </p>
        </div>
      </div>
    </section>
  );
}