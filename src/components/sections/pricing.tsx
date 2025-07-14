'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import { cn } from '../../utils/cn'

interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  features: {
    name: string
    included: boolean
  }[]
  highlighted?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'For individuals getting started',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      { name: '2 active projects', included: true },
      { name: 'Basic templates', included: true },
      { name: 'Email support', included: true },
      { name: 'Client portal', included: false },
      { name: 'Team collaboration', included: false },
      { name: 'API access', included: false },
    ]
  },
  {
    name: 'Professional',
    description: 'For freelance ghostwriters',
    monthlyPrice: 29,
    annualPrice: 24,
    highlighted: true,
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'All templates', included: true },
      { name: 'Priority support', included: true },
      { name: 'Client portal', included: true },
      { name: 'Team collaboration', included: false },
      { name: 'API access', included: false },
    ]
  },
  {
    name: 'Team',
    description: 'For growing writing studios',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'All templates', included: true },
      { name: '24/7 phone support', included: true },
      { name: 'Client portal', included: true },
      { name: 'Team collaboration', included: true },
      { name: 'API access', included: true },
    ]
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <section id="pricing" className="relative bg-brand-dark py-32 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-inter font-extralight text-brand-light mb-4">
            Pricing
          </h2>
          <p className="text-lg text-brand-gray/70 max-w-md mx-auto">
            Simple, transparent pricing that scales with your business
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center p-1 bg-brand-gray/10 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                !isAnnual 
                  ? "bg-brand-light text-brand-dark" 
                  : "text-brand-gray/70 hover:text-brand-light"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                isAnnual 
                  ? "bg-brand-light text-brand-dark" 
                  : "text-brand-gray/70 hover:text-brand-light"
              )}
            >
              Annual
            </button>
          </div>
          {isAnnual && (
            <span className="ml-3 text-xs text-brand-yellow self-center">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={cn(
                "relative rounded-xl p-8",
                "bg-brand-gray/5 backdrop-blur-sm",
                "border border-brand-gray/10",
                "hover:border-brand-gray/20 transition-all duration-300",
                plan.highlighted && "border-brand-blue/30 scale-105"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-brand-blue text-white text-xs font-medium rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium text-brand-light mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-brand-gray/60">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-light text-brand-light">
                    ${plan.monthlyPrice === 0 ? '0' : isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice !== 0 && (
                    <span className="ml-2 text-sm text-brand-gray/60">/month</span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    ) : (
                      <Minus className="w-4 h-4 text-brand-gray/30 flex-shrink-0" />
                    )}
                    <span className={cn(
                      "text-sm",
                      feature.included ? "text-brand-gray/80" : "text-brand-gray/40"
                    )}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-3 rounded-lg font-medium text-sm transition-all duration-200",
                plan.highlighted
                  ? "bg-brand-blue text-white hover:bg-[#4A8BE8]"
                  : "bg-brand-gray/10 text-brand-light hover:bg-brand-gray/20"
              )}>
                {plan.monthlyPrice === 0 ? 'Start free trial' : 'Get started'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-32">
          <h3 className="text-2xl font-light text-brand-light text-center mb-12">
            Compare features
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-brand-gray/10">
                  <th className="text-left py-4 pr-4 text-sm font-normal text-brand-gray/70">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center px-4 py-4">
                      <div className="text-sm font-medium text-brand-light">{plan.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-gray/10">
                  <td className="py-4 pr-4 text-sm text-brand-gray/70">Active projects</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">2</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">Unlimited</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">Unlimited</td>
                </tr>
                <tr className="border-b border-brand-gray/10">
                  <td className="py-4 pr-4 text-sm text-brand-gray/70">Team members</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">1</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">1</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">Unlimited</td>
                </tr>
                <tr className="border-b border-brand-gray/10">
                  <td className="py-4 pr-4 text-sm text-brand-gray/70">Storage</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">5 GB</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">50 GB</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">500 GB</td>
                </tr>
                <tr className="border-b border-brand-gray/10">
                  <td className="py-4 pr-4 text-sm text-brand-gray/70">Support</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">Email</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">Priority</td>
                  <td className="text-center px-4 py-4 text-sm text-brand-gray/80">24/7 Phone</td>
                </tr>
                <tr className="border-b border-brand-gray/10">
                  <td className="py-4 pr-4 text-sm text-brand-gray/70">Client portal</td>
                  <td className="text-center px-4 py-4">
                    <Minus className="w-4 h-4 text-brand-gray/30 mx-auto" />
                  </td>
                  <td className="text-center px-4 py-4">
                    <Check className="w-4 h-4 text-brand-blue mx-auto" />
                  </td>
                  <td className="text-center px-4 py-4">
                    <Check className="w-4 h-4 text-brand-blue mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-brand-gray/10">
                  <td className="py-4 pr-4 text-sm text-brand-gray/70">API access</td>
                  <td className="text-center px-4 py-4">
                    <Minus className="w-4 h-4 text-brand-gray/30 mx-auto" />
                  </td>
                  <td className="text-center px-4 py-4">
                    <Minus className="w-4 h-4 text-brand-gray/30 mx-auto" />
                  </td>
                  <td className="text-center px-4 py-4">
                    <Check className="w-4 h-4 text-brand-blue mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-20">
          <p className="text-sm text-brand-gray/60 mb-4">
            Questions? Check our <a href="#" className="text-brand-blue hover:underline">pricing FAQ</a> or{' '}
            <a href="#" className="text-brand-blue hover:underline">contact sales</a>
          </p>
        </div>
      </div>
    </section>
  )
}