'use client'

import * as React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useSpring, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../utils/cn'
import { FileText, Users, Calendar, CreditCard, CheckCircle } from 'lucide-react'

// Animation variants (moved inline)
const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5,
      delay: 0.2,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

// Define keyframes
const progressKeyframes = `
  @keyframes progress {
    0% { width: 0; }
    100% { width: 100%; }
  }
`;

// Move style injection into a component that uses useEffect
function StyleInjector() {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = progressKeyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return null;
}

const iconVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 0.5,
      delay: 0.3,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  })
}

const visualVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8,
      delay: 0.3,
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
}

interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: Feature
}

// Reusable components
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, ...props }) => {
  const Icon = feature.icon
  const Visual = feature.visual

  return (
    <motion.div 
      variants={featureVariants}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 items-start md:items-center"
      {...props}
    >
      {/* Left Side - Content */}
      <motion.div
        variants={contentVariants}
        className="space-y-4 md:space-y-8"
      >
        <motion.div variants={iconVariants}>
          <Icon />
        </motion.div>
        <motion.h3 
          variants={textVariants}
          custom={0.4}
          className="text-[1.75rem] md:text-[1.75rem] leading-[1.3] tracking-[-0.01em] font-semibold text-slate-800"
        >
          {feature.title}
        </motion.h3>
        <motion.p 
          variants={textVariants}
          custom={0.5}
          className="text-[1.125rem] md:text-[1.125rem] leading-[1.7] text-slate-600"
        >
          {feature.description}
        </motion.p>
      </motion.div>

      {/* Right Side - Visualization */}
      <motion.div
        variants={visualVariants}
        className="relative w-full overflow-x-hidden px-0 md:px-0"
      >
        <Visual />
      </motion.div>
    </motion.div>
  )
}

const features = [
  {
    id: 'client-dashboard',
    title: 'Client-Friendly Project Dashboard',
    icon: () => (
      <div className="w-16 h-16 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden backdrop-blur-sm group hover:bg-gray-50 transition-all duration-300">
        <div className="relative">
          <FileText className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    ),
    description: 'Give your clients crystal-clear visibility into their book project. Real-time progress tracking, milestone status, and upcoming deadlines—all in one beautiful, jargon-free interface that keeps authors informed and engaged.',
    visual: () => (
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-[480px] relative">
          <img 
            src="/dashboard.png" 
            alt="Client Dashboard Interface"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </div>
    )
  },
  {
    id: 'onboarding-wizard',
    title: 'Guided Onboarding Experience',
    icon: () => (
      <div className="w-16 h-16 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden backdrop-blur-sm group hover:bg-gray-50 transition-all duration-300">
        <div className="relative">
          <Users className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    ),
    description: 'Transform client intake from scattered emails to a smooth, professional experience. Guided questionnaires, document collection, and contract signing—all automated to get projects started faster while capturing every important detail.',
    visual: () => (
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-[480px] relative">
          <img 
            src="/onboarding.png" 
            alt="Onboarding Experience Interface"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </div>
    )
  },
  {
    id: 'document-management',
    title: 'Smart Document Hub',
    icon: () => (
      <div className="w-16 h-16 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden backdrop-blur-sm group hover:bg-gray-50 transition-all duration-300">
        <div className="relative">
          <FileText className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    ),
    description: 'Keep every draft, revision, and feedback loop organized. Automatic version control, side-by-side comparisons, and inline commenting ensure nothing gets lost while maintaining a clean audit trail of your book\'s evolution.',
    visual: () => (
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-[520px] relative">
          <img 
            src="/docs.png" 
            alt="Document Management Interface"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </div>
    )
  },
  {
    id: 'automated-timeline',
    title: 'Intelligent Project Timeline',
    icon: () => (
      <div className="w-16 h-16 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden backdrop-blur-sm group hover:bg-gray-50 transition-all duration-300">
        <div className="relative">
          <Calendar className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    ),
    description: 'Never miss another deadline. Smart reminders automatically notify the right person when tasks stall, while visual timelines keep everyone aligned on what\'s next. Your projects stay on track without constant follow-up.',
    visual: () => (
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-[520px] relative">
          <img 
            src="/timeline.png" 
            alt="Project Timeline Interface"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </div>
    )
  },
  {
    id: 'payment-integration',
    title: 'Seamless Payment System',
    icon: () => (
      <div className="w-16 h-16 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden backdrop-blur-sm group hover:bg-gray-50 transition-all duration-300">
        <div className="relative">
          <CreditCard className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    ),
    description: 'Streamline payments with milestone-based invoicing. Automatic payment requests when phases complete, multiple payment methods, and clear transaction history—so you get paid on time while clients always know what they\'re paying for.',
    visual: () => (
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-[480px] relative">
          <img 
            src="/payments.png" 
            alt="Payment System Interface"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
          />
        </div>
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
    <>
      <StyleInjector />
      <section 
        id="features" 
        ref={containerRef}
        className="relative bg-slate-50 py-8 md:py-24 px-4 md:px-6 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-[45rem] space-y-3 md:space-y-6">
            {/* <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-base md:text-base font-semibold tracking-wide text-red-600"
            >
              Professional Ghostwriting Platform
            </motion.p> */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2rem] md:text-[2.75rem] leading-[1.2] md:leading-[1.15] tracking-[-0.02em] font-semibold text-slate-800"
            >
              Transform Your Ghostwriting Business with Client-Friendly Project Management
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[1.125rem] md:text-[1.125rem] leading-[1.7] md:leading-[1.75] text-slate-600 max-w-[42rem]"
            >
              End the confusion of scattered emails and missed deadlines. Give your authors crystal-clear visibility into their book project while streamlining your entire workflow—from initial client onboarding through final manuscript delivery. Focus on what you do best: writing exceptional books.
            </motion.p>
          </div>

          {/* Features Section */}
          <div className="mt-12 md:mt-32 space-y-16 md:space-y-40 relative">
            {/* Decorative Line */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 h-[calc(100%-8rem)] top-20 w-[2px] bg-gradient-to-b from-slate-300/20 via-slate-300/60 to-slate-300/20 shadow-[0_0_8px_rgba(148,163,184,0.1)] hidden md:block"
              style={{
                scaleY: lineProgress,
                originY: 0
              }}
            />
            
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
