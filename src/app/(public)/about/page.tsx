"use client";

import { Footer } from "@/components/sections";

export default function AboutPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-40 md:pt-48 lg:pt-56 pb-20">
        <header className="text-center mb-24 lg:mb-32">
          <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            About
            <span className="block font-lora font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] mt-3">
              GhostSync
            </span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto font-inter leading-relaxed">
            We’re a collective of seasoned ghostwriters who’ve worked with authors, experts, publishers, platforms, and public figures. Across every project, one thing was clear: <span className="text-[#5D9CEC]">the workflow needed work.</span>
          </p>
          <p className="mt-8 text-lg lg:text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto font-inter leading-relaxed">
            <span className="block text-[#FBC02D] mb-8 text-xl lg:text-2xl">So we built a better one.</span>
            From onboarding to delivery, we’ve streamlined the entire process—<span className="text-[#5D9CEC]">keeping everyone aligned and working smarter.</span>
          </p>
        </header>
      </main>
      <Footer />
    </>
  );
} 