'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative min-h-[80vh] pt-32 lg:pt-40 pb-0 overflow-hidden bg-[#1B1B1F]">
      {/* Clean gradient background matching hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1F] to-[#16161A]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D9CEC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FBC02D]/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
        {/* Centered CTA Content */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-6xl xl:text-7xl font-inter font-light leading-[0.95] tracking-tight text-[#F8F9FA] mb-8"
          >
            Ready to transform
            <br />
            <span className="font-lora italic text-[#5D9CEC]">
              your business?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-[#F8F9FA]/60 leading-relaxed font-inter"
          >
            Join hundreds of ghostwriters who've connected with their clients, 
            eliminated confusion, and built thriving businesses through seamless collaboration.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-12 flex justify-center mb-20"
          >
            <Link href="/signup">
              <Button className="h-14 px-12 bg-[#5D9CEC] hover:bg-[#4D8CDB] text-white font-inter font-medium text-lg rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get started free
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
} 