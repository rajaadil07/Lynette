'use client'

import { HeroSection } from "@/components"
import FeaturesSection from "@/components/sections/features"
import HowItWorksSection from "@/components/sections/HowItWorks"
import PricingSection from "@/components/sections/pricing"
import FAQSection from "@/components/sections/FAQ"
import CTASection from "@/components/sections/cta"
import Footer from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  )
}

