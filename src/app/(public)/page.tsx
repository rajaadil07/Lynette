'use client'

import { HeroSection } from "@/components"
import CustomerLogos from "@/components/sections/CustomerLogos"
import FeaturesSection from "@/components/sections/features"
import PricingSection from "@/components/sections/pricing"
import CTASection from "@/components/sections/cta"

export default function Page() {
  return (
    <>
      <HeroSection />
      <CustomerLogos />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </>
  )
}

