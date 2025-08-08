"use client";

import { Footer } from "@/components/sections";

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 md:pt-28 lg:pt-32 pb-20">
        <header className="text-center mb-24 lg:mb-32">
          <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Privacy
            <span className="block font-lora font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] mt-3">
              Policy
            </span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto font-inter leading-relaxed">
            Your privacy is important to us. This policy explains how GhostSync collects, uses, and protects your information.
          </p>
        </header>
        <section className="w-full max-w-2xl space-y-8 text-left">
          <div>
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-2">Information We Collect</h2>
            <p className="text-[#F8F9FA]/70 font-inter text-base leading-relaxed">We collect information you provide directly, such as your name, email, and project details, as well as data generated through your use of our platform.</p>
          </div>
          <div>
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-2">How We Use Information</h2>
            <p className="text-[#F8F9FA]/70 font-inter text-base leading-relaxed">We use your information to provide, improve, and secure our services, communicate with you, and comply with legal obligations.</p>
          </div>
          <div>
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-2">Your Rights</h2>
            <p className="text-[#F8F9FA]/70 font-inter text-base leading-relaxed">You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:privacy@ghostsync.ai" className="text-[#5D9CEC] underline">privacy@ghostsync.ai</a> for any privacy-related requests.</p>
          </div>
          <div>
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-2">Contact</h2>
            <p className="text-[#F8F9FA]/70 font-inter text-base leading-relaxed">If you have questions about this policy, email us at <a href="mailto:privacy@ghostsync.ai" className="text-[#5D9CEC] underline">privacy@ghostsync.ai</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 