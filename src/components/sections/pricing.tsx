'use client'

import * as React from 'react'
import { Check } from 'lucide-react'

interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  popular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for solo ghostwriters getting started',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      '2 active projects',
      'Client dashboard',
      'Basic templates',
      'Email support',
      '5GB storage'
    ]
  },
  {
    name: 'Professional',
    description: 'Everything you need to scale your business',
    monthlyPrice: 29,
    annualPrice: 24,
    popular: true,
    features: [
      'Unlimited projects',
      'Premium templates',
      'Priority support',
      'Client portal',
      '100GB storage',
      'Custom branding',
      'Payment processing',
      'Advanced analytics'
    ]
  },
  {
    name: 'Team',
    description: 'For agencies and collaborative studios',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      'Everything in Professional',
      'Unlimited team members',
      '24/7 phone support',
      'White-label options',
      'API access',
      '1TB storage',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
]

export default function Pricing() {
  const [billing, setBilling] = React.useState<'monthly' | 'annual'>('annual')

  return (
    <section id="pricing" className="relative pt-0 pb-32 lg:pb-40 bg-[#1B1B1F]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Simple, transparent
            <span className="block font-lora font-normal text-[#5D9CEC] mt-3">
              pricing
            </span>
          </h2>
          <p className="mt-6 text-lg text-[#F8F9FA]/60 max-w-2xl mx-auto font-inter">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center p-1 bg-[#F8F9FA]/5 rounded-lg">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 text-sm font-inter font-medium rounded-md transition-all duration-200 ${
                billing === 'monthly'
                  ? 'bg-[#5D9CEC] text-white'
                  : 'text-[#F8F9FA]/60 hover:text-[#F8F9FA]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-6 py-2 text-sm font-inter font-medium rounded-md transition-all duration-200 ${
                billing === 'annual'
                  ? 'bg-[#5D9CEC] text-white'
                  : 'text-[#F8F9FA]/60 hover:text-[#F8F9FA]'
              }`}
            >
              Annual
              <span className="ml-1 text-xs opacity-80">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? 'bg-[#F8F9FA]/10 border-2 border-[#5D9CEC]/50'
                  : 'bg-[#F8F9FA]/5 border border-[#F8F9FA]/10'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#FBC02D] text-[#1B1B1F] text-sm font-inter font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <h3 className="text-2xl font-inter font-normal text-[#F8F9FA] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#F8F9FA]/50 font-inter">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-inter font-light text-[#F8F9FA]">
                    ${billing === 'annual' ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice !== 0 && (
                    <span className="ml-2 text-[#F8F9FA]/50 font-inter">/month</span>
                  )}
                </div>
                {billing === 'annual' && plan.monthlyPrice !== 0 && (
                  <p className="mt-1 text-sm text-[#FBC02D] font-inter">
                    ${(plan.monthlyPrice - plan.annualPrice) * 12} saved annually
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5D9CEC] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#F8F9FA]/70 font-inter">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-lg font-inter font-medium text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#5D9CEC] text-white hover:bg-[#4D8CDB]'
                    : plan.monthlyPrice === 0
                    ? 'bg-[#F8F9FA]/10 text-[#F8F9FA] hover:bg-[#F8F9FA]/20 border border-[#F8F9FA]/20'
                    : 'bg-transparent text-[#F8F9FA] hover:bg-[#F8F9FA]/10 border border-[#F8F9FA]/20'
                }`}
              >
                {plan.monthlyPrice === 0 ? 'Start free' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}