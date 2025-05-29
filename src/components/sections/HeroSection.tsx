'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative px-8 pt-48 pb-20">
        {/* Sophisticated gradient blob - Red theme */}
        <div
          className="absolute right-0 top-20 h-[650px] w-[650px] animate-pulse rounded-full bg-gradient-to-br from-[#FE8E8E]/70 via-[#FF7373]/50 to-[#FF5050]/75 blur-3xl opacity-80"
          aria-hidden="true"
        />
        <div
          className="absolute right-40 top-40 h-[350px] w-[350px] animate-pulse rounded-full bg-gradient-to-r from-[#FF6060]/45 to-[#FF5454]/35 blur-2xl"
          aria-hidden="true"
          style={{ animationDelay: '1.2s', animationDuration: '4s' }}
        />
        <div
          className="absolute right-60 top-80 h-[250px] w-[250px] animate-pulse rounded-full bg-gradient-to-br from-[#FF7373]/25 to-[#FF6A6A]/40 blur-xl"
          aria-hidden="true"
          style={{ animationDelay: '0.6s', animationDuration: '5s' }}
        />

        {/* Theme image on top of blob */}
        <div className="absolute right-0 top-20">
          <Image
            src="/ghostwriter.png"
            alt="Ghostwriter decoration"
            width={520}
            height={520}
            priority
            className="opacity-85"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="max-w-5xl">
            <h1 className="text-7xl xl:text-8xl font-extralight leading-[0.9] tracking-tighter text-gray-900 mb-8">
              Turn satisfied
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                authors into
              </span>
              <br />
              raving fans
            </h1>

            {/* Premium Subtitle */}
            <p className="mt-8 max-w-2xl text-xl text-gray-600 leading-relaxed font-light tracking-wide">
              A crystal-clear, client-friendly workspace that makes manuscripts move faster, cuts email back-and-forth, and streamlines your ghostwriting business.
            </p>

            {/* Enhanced CTA Section */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4 max-w-md">
              <Link href="/signup">
                <Button 
                  variant="hero-cta"
                >
                  START WRITING BETTER
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 