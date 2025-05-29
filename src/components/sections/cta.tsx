'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative px-8">
        {/* Centered Sophisticated gradient blob - Red theme */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] animate-pulse rounded-full bg-gradient-to-br from-[#FE8E8E]/60 via-[#FF7373]/40 to-[#FF5050]/65 blur-3xl opacity-70"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] animate-pulse rounded-full bg-gradient-to-r from-[#FF6060]/35 to-[#FF5454]/25 blur-2xl"
          aria-hidden="true"
          style={{ animationDelay: '1.5s', animationDuration: '4s' }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-[#FF7373]/20 to-[#FF6A6A]/30 blur-xl"
          aria-hidden="true"
          style={{ animationDelay: '0.8s', animationDuration: '5s' }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Centered CTA Content */}
          <div className="text-center max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-6xl md:text-7xl xl:text-8xl font-extralight leading-[0.9] tracking-tighter text-gray-900 mb-8"
            >
              Ready to transform
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                your business?
              </span>
            </motion.h2>

            {/* Premium Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed font-light tracking-wide"
            >
              Join hundreds of ghostwriters who've eliminated client confusion, 
              streamlined their workflow, and built thriving businesses.
            </motion.p>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/signup" className="group">
                <Button 
                  variant="hero-cta"
                  className="transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                >
                  START YOUR FREE TRIAL
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-500 font-light"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 