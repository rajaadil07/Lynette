'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How is this different from email and Google Docs?",
    answer: "Email threads get messy, attachments get lost, and clients get confused. GhostSync creates one organized hub where everything lives—drafts, feedback, payments, deadlines. Your clients get a professional portal, you get peace of mind."
  },
  {
    question: "Can I white-label the client experience?",
    answer: "Yes! Professional and Team plans include custom branding. Add your logo, colors, and custom domain so clients see your brand throughout their experience."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data is always yours. Export everything anytime—all documents, client info, and project history. We'll keep your account accessible for 90 days after cancellation for easy transition."
  },
  {
    question: "Do clients need to create accounts?",
    answer: "No! Clients access their projects through secure magic links—no passwords, no friction. They can view progress, leave feedback, and approve milestones without any technical hassle."
  },
  {
    question: "How does payment processing work?",
    answer: "Connect your Stripe account and accept payments directly through GhostSync. Set up milestone-based payments, automatic invoicing, and let clients pay with card, ACH, or wire transfer."
  },
  {
    question: "Is there a limit on storage or projects?",
    answer: "Free plans include 5GB storage and 2 active projects. Professional plans get 100GB and unlimited projects. Team plans include 1TB. Additional storage available if needed."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative pt-0 pb-32 lg:pb-40 bg-[#1B1B1F]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Common questions,
            <span className="block font-lora font-normal text-[#FBC02D] mt-3">
              clear answers
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0 divide-y divide-[#F8F9FA]/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left group"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-inter font-normal text-[#F8F9FA] pr-8 group-hover:text-[#5D9CEC] transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#F8F9FA]/40 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              {openIndex === index && (
                <div className="mt-4 text-[#F8F9FA]/60 font-inter text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}