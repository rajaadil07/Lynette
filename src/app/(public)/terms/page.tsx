"use client";

import { Footer } from "@/components/sections";

export default function TermsPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-40 md:pt-48 lg:pt-56 pb-20">
        <header className="text-center mb-24 lg:mb-32">
          <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Terms of
            <span className="block font-lora font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] mt-3">
              Service
            </span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto font-inter leading-relaxed">
            Please read these terms carefully before using GhostSync. By accessing or using our platform, you agree to these terms.
          </p>
        </header>
        <section className="w-full max-w-2xl space-y-8 text-left">
          <div>
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-2">Use of Service</h2>
            <p className="text-[#F8F9FA]/70 font-inter text-base leading-relaxed">You agree to use GhostSync in compliance with all applicable laws and not for any unlawful or harmful purpose.</p>
          </div>
          <div>
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-2">Account Responsibility</h2>
            <p className="text-[#F8F9FA]/70 font-inter text-base leading-relaxed">You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.</p>
          </div>
          <div>
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-2">Limitation of Liability</h2>
            <p className="text-[#F8F9FA]/70 font-inter text-base leading-relaxed">GhostSync is provided &quot;as is&quot; without warranties of any kind. We are not liable for any damages arising from your use of the platform.</p>
          </div>
          <div>
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-2">Contact</h2>
            <p className="text-[#F8F9FA]/70 font-inter text-base leading-relaxed">If you have questions about these terms, email us at <a href="mailto:legal@ghostsync.ai" className="text-[#5D9CEC] underline">legal@ghostsync.ai</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 