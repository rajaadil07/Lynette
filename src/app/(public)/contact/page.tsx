"use client";

import { Footer } from "@/components/sections";
import { FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 md:pt-28 lg:pt-32 pb-20">
        <header className="text-center mb-24 lg:mb-32">
          <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Contact
            <span className="block font-lora font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] mt-3">
              GhostSync
            </span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto font-inter leading-relaxed">
            Have a question, partnership inquiry, or need support? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </header>
        <section className="w-full max-w-2xl space-y-10">
          {/* Email Contact */}
          <div className="bg-[#23232A] rounded-2xl p-8 shadow-lg border border-[#F8F9FA]/10">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-[#5D9CEC] w-6 h-6 mr-3" />
              <span className="font-inter text-xl text-[#F8F9FA]">Get in Touch</span>
            </div>
            <p className="text-[#F8F9FA]/70 font-inter mb-2">For all inquiries including partnerships, support, and sales:</p>
            <a href="mailto:hello@ghostsync.ai" className="text-[#5D9CEC] font-inter underline">hello@ghostsync.ai</a>
            <p className="text-[#F8F9FA]/40 text-sm mt-2">We typically respond within 24 hours.</p>
          </div>
          {/* Social Media */}
          <div className="bg-[#23232A] rounded-2xl p-8 shadow-lg border border-[#F8F9FA]/10">
            <div className="flex items-center mb-4">
              <span className="font-inter text-xl text-[#F8F9FA] mr-3">Connect With Us</span>
            </div>
            <p className="text-[#F8F9FA]/70 font-inter mb-4">Follow us on social media for the latest updates and insights:</p>
            <div className="flex items-center space-x-6">
              <a href="https://twitter.com/ghostsync" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#5D9CEC] hover:text-[#FBC02D] text-2xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/ghostsync" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#5D9CEC] hover:text-[#FBC02D] text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 