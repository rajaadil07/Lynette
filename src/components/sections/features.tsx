'use client'

import * as React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useSpring, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../utils/cn'
import { FileText, Users, Calendar, CreditCard, CheckCircle, ArrowRight } from 'lucide-react'

// Enhanced animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.7,
      delay: 0.2,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

const visualVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { 
      duration: 0.8,
      delay: 0.3,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 0.6,
      delay: 0.1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

// Types
interface Feature {
  id: string
  title: string
  description: string
  icon: () => React.ReactNode
  visual: () => React.ReactNode
  color: 'blue' | 'yellow'
}

interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: Feature
  index: number
}

// Enhanced FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, ...props }) => {
  const Icon = feature.icon
  const Visual = feature.visual
  const isEven = index % 2 === 0

  return (
    <motion.div 
      variants={featureVariants}
      className={cn(
        "relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
        "py-16 lg:py-24",
        isEven ? "lg:grid-flow-col" : "lg:grid-flow-col-dense"
      )}
      {...props}
    >
      {/* Content Side */}
      <motion.div
        variants={contentVariants}
        className={cn(
          "space-y-8",
          !isEven && "lg:col-start-2"
        )}
      >
        <motion.div variants={iconVariants}>
          <Icon />
        </motion.div>
        
        <div className="space-y-6">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-inter font-light leading-[1.1] tracking-[-0.02em] text-brand-light">
            {feature.title}
          </h3>
          
          <p className="text-lg lg:text-xl text-brand-gray/90 leading-relaxed font-inter font-light max-w-2xl">
            {feature.description}
          </p>
          
          {/* Learn More Link */}
          <div className="pt-4">
            <button className="group inline-flex items-center gap-3 text-brand-blue hover:text-brand-yellow transition-colors duration-300 font-inter font-medium">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Visual Side */}
      <motion.div
        variants={visualVariants}
        className={cn(
          "relative",
          !isEven && "lg:col-start-1 lg:row-start-1"
        )}
      >
        <div className="relative">
          {/* Elegant backdrop */}
          <div className={cn(
            "absolute -inset-8 rounded-3xl blur-2xl opacity-20",
            feature.color === 'blue' ? "bg-brand-blue" : "bg-brand-yellow"
          )} />
          
          {/* Visual container */}
          <div className="relative bg-brand-gray/5 backdrop-blur-sm rounded-2xl p-6 border border-brand-gray/10">
            <Visual />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Updated features data
const features: Feature[] = [
  {
    id: 'client-dashboard',
    title: 'Client-Friendly Project Dashboard',
    color: 'yellow',
    icon: () => (
      <div className="relative group">
        <div className="absolute -inset-2 bg-brand-yellow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative w-20 h-20 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-yellow/15 transition-all duration-300">
          <FileText className="w-10 h-10 text-brand-yellow" />
        </div>
      </div>
    ),
    description: 'Give your clients crystal-clear visibility into their book project. Real-time progress tracking, milestone status, and upcoming deadlines—all in one beautiful, jargon-free interface that keeps authors informed and engaged.',
    visual: () => (
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src="/dashboard.png" 
          alt="Client Dashboard Interface"
          className="w-full h-auto rounded-xl shadow-2xl border border-brand-gray/20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent rounded-xl" />
      </div>
    )
  },
  {
    id: 'onboarding-wizard',
    title: 'Guided Onboarding Experience',
    color: 'blue',
    icon: () => (
      <div className="relative group">
        <div className="absolute -inset-2 bg-brand-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative w-20 h-20 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-blue/15 transition-all duration-300">
          <Users className="w-10 h-10 text-brand-blue" />
        </div>
      </div>
    ),
    description: 'Transform client intake from scattered emails to a smooth, professional experience. Guided questionnaires, document collection, and contract signing—all automated to get projects started faster.',
    visual: () => (
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src="/onboarding.png" 
          alt="Onboarding Experience Interface"
          className="w-full h-auto rounded-xl shadow-2xl border border-brand-gray/20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent rounded-xl" />
      </div>
    )
  },
  {
    id: 'document-management',
    title: 'Smart Document Hub',
    color: 'yellow',
    icon: () => (
      <div className="relative group">
        <div className="absolute -inset-2 bg-brand-yellow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative w-20 h-20 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-yellow/15 transition-all duration-300">
          <FileText className="w-10 h-10 text-brand-yellow" />
        </div>
      </div>
    ),
    description: 'Keep every draft, revision, and feedback loop organized. Automatic version control, side-by-side comparisons, and inline commenting ensure nothing gets lost while maintaining a clean audit trail.',
    visual: () => (
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src="/docs.png" 
          alt="Document Management Interface"
          className="w-full h-auto rounded-xl shadow-2xl border border-brand-gray/20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent rounded-xl" />
      </div>
    )
  },
  {
    id: 'automated-timeline',
    title: 'Intelligent Project Timeline',
    color: 'blue',
    icon: () => (
      <div className="relative group">
        <div className="absolute -inset-2 bg-brand-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative w-20 h-20 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-blue/15 transition-all duration-300">
          <Calendar className="w-10 h-10 text-brand-blue" />
        </div>
      </div>
    ),
    description: 'Never miss another deadline. Smart reminders automatically notify the right person when tasks stall, while visual timelines keep everyone aligned on what\'s next without constant follow-up.',
    visual: () => (
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src="/timeline.png" 
          alt="Project Timeline Interface"
          className="w-full h-auto rounded-xl shadow-2xl border border-brand-gray/20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent rounded-xl" />
      </div>
    )
  },
  {
    id: 'payment-integration',
    title: 'Seamless Payment System',
    color: 'yellow',
    icon: () => (
      <div className="relative group">
        <div className="absolute -inset-2 bg-brand-yellow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative w-20 h-20 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-yellow/15 transition-all duration-300">
          <CreditCard className="w-10 h-10 text-brand-yellow" />
        </div>
      </div>
    ),
    description: 'Streamline payments with milestone-based invoicing. Automatic payment requests, multiple payment methods, and clear transaction history—so you get paid on time while clients know what they\'re paying for.',
    visual: () => (
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src="/payments.png" 
          alt="Payment System Interface"
          className="w-full h-auto rounded-xl shadow-2xl border border-brand-gray/20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent rounded-xl" />
      </div>
    )
  }
]

export default function Features() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section 
      id="features" 
      ref={containerRef}
      className="relative bg-brand-dark py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-gray/5" />
        
        {/* Subtle animated orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-brand-yellow/4 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="text-center max-w-4xl mx-auto mb-20 lg:mb-32"
        >
          <motion.div
            variants={featureVariants}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-inter font-extralight leading-[1.1] tracking-[-0.02em] text-brand-light">
              The Ghost Link That
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-blue to-brand-yellow bg-clip-text text-transparent font-light">
                Connects You to Success
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-brand-gray/85 leading-relaxed font-inter font-light max-w-3xl mx-auto">
              Bridge the gap between you and your clients with professional project management. 
              Crystal-clear visibility, seamless collaboration, and automated workflows that turn 
              satisfied authors into raving fans.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
          variants={sectionVariants}
          className="relative"
        >
          {/* Elegant connecting line */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent hidden lg:block"
            style={{
              scaleY: lineProgress,
              originY: 0
            }}
          />
          
          <div className="space-y-0">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
