'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '../../utils/cn'

const pricingPlans = [
  {
    name: 'Free Trial',
    description: 'Perfect for testing the waters',
    price: 0,
    period: '14 days',
    features: [
      '1 writer, 1 client',
      '1 active project',
      'Complete onboarding flow',
      'Project dashboard',
      'Basic file uploads',
      'Email support'
    ],
    cta: 'Start Free Trial',
    popular: false,
    highlight: false
  },
  {
    name: 'Freelancer',
    description: 'For independent ghostwriters',
    price: 50,
    period: 'month',
    features: [
      '1 seat included',
      '5 active projects',
      '5 GB storage',
      'Client-friendly dashboards',
      'Automated reminders',
      'Contract management',
      'Payment integrations',
      'Priority email support'
    ],
    cta: 'Get Started',
    popular: true,
    highlight: false
  },
  {
    name: 'Studio',
    description: 'For growing writing teams',
    price: 299,
    period: 'month',
    features: [
      '5 seats included',
      '30 active projects',
      '50 GB storage',
      'Team collaboration tools',
      'Advanced project tracking',
      'Custom workflows',
      'API access',
      'Phone & email support'
    ],
    cta: 'Scale Your Business',
    popular: false,
    highlight: true
  },
  {
    name: 'Publisher',
    description: 'For publishing companies',
    price: 1000,
    period: 'month',
    features: [
      '10 seats included',
      '100 active projects',
      '250 GB storage',
      'SSO integration',
      'Audit logs & compliance',
      'Custom branding',
      'Dedicated account manager',
      '24/7 premium support'
    ],
    cta: 'Contact Sales',
    popular: false,
    highlight: false
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  })
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-20 md:py-32 px-4 md:px-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter text-gray-900 mb-6"
          >
            Choose Your Perfect Plan
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            From solo freelancers to publishing houses—find the right fit for your ghostwriting business
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "relative rounded-xl p-8 border transition-all duration-300 hover:shadow-md flex flex-col h-full",
                plan.highlight 
                  ? "border-gray-300 bg-gray-50/50 shadow-sm" 
                  : "border-gray-200 bg-white hover:border-gray-300"
              )}
            >
              {/* Simple Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6 font-light">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  {plan.price === 0 ? (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">Free</span>
                      <span className="text-gray-500 ml-2 text-sm font-medium">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-500 text-sm font-medium">/{plan.period}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features - flex-grow to push button to bottom */}
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button - aligned at bottom */}
              <div className="mt-auto">
                <button
                  className={cn(
                    "w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm",
                    plan.highlight
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200"
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 