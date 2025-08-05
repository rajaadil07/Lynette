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
  seats?: string
}

const plans: PricingPlan[] = [
  {
    name: 'Solo Ghost',
    description: 'Perfect for independent ghostwriters & freelancers',
    monthlyPrice: 50,
    annualPrice: 42,
    seats: '1 seat',
    features: [
      'Free trial: 1 client dashboard',
      'Unlimited writing projects',
      'Client portal for real-time updates & approvals',
      'Live document co-editing',
      'Visual project timeline & task board',
      'Automated milestone-based invoicing',
      'Secure client messaging system',
      'Email support',
      '50GB file & media storage'
    ]
  },
  {
    name: 'Ghostwriting Agencies',
    description: 'Built for boutique to mid-sized ghostwriting agencies',
    monthlyPrice: 299,
    annualPrice: 249,
    popular: true,
    seats: '5 seats',
    features: [
      'Everything in Solo Ghost, plus:',
      'Team collaboration: Assign roles, tasks, and permissions',
      'Multi-client dashboard & organization folders',
      'Internal team notes (invisible to client)',
      'Project templates & reusable outlines',
      'Priority email & chat support',
      '500GB storage'
    ]
  },
  {
    name: 'Publishers',
    description: 'For large publishers or platforms working with multiple ghostwriters',
    monthlyPrice: 1000,
    annualPrice: 833,
    seats: '10 seats',
    features: [
      'Everything in Ghostwriting Agencies, plus:',
      'Contractor database with assignment & workload tracking',
      'White-label options for client-facing portal & emails',
      '24/7 phone & chat support',
      'Custom editorial workflows (e.g., approval chains)',
      'Unlimited document storage'
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
            All plans include a free trial with one client dashboard. No credit card required.
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
              <span className="ml-1 text-xs opacity-80">Save ~17%</span>
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
                <p className="text-sm text-[#F8F9FA]/50 font-inter mb-2">
                  {plan.description}
                </p>
                {plan.seats && (
                  <p className="text-sm text-[#5D9CEC] font-inter font-medium">
                    {plan.seats}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-inter font-light text-[#F8F9FA]">
                    ${billing === 'annual' ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-2 text-[#F8F9FA]/50 font-inter">/month</span>
                </div>
                {billing === 'annual' && (
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
                    : 'bg-transparent text-[#F8F9FA] hover:bg-[#F8F9FA]/10 border border-[#F8F9FA]/20'
                }`}
                onClick={() => window.location.href = '/waitlist'}
              >
                Join waitlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}