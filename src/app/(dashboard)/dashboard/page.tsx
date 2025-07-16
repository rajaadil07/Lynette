'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Clock, 
  FileText, 
  Users, 
  DollarSign, 
  Calendar,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Upload,
  MessageSquare,
  CreditCard,
  Settings,
  BarChart3,
  Activity,
  Target,
  Award,
  Zap,
  BookOpen,
  PenTool,
  Star,
  CalendarDays,
  Target as TargetIcon,
  Lightbulb,
  Sparkles,
  Rocket,
  Heart,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Palette
} from 'lucide-react'

interface ProjectData {
  name: string
  email: string
  persona: string
  projectType: string
  projectTitle: string
  estimatedLength: string
  currentStage: string
  previousExperience: string
  communicationStyle: string
  feedbackFrequency: string
  targetAudience: string
}

const sidebarItems = [
  { icon: 'home', label: 'Dashboard', active: true, href: '/dashboard' },
  { icon: 'folder', label: 'Projects', active: false, href: '/dashboard/projects' },
  { icon: 'users', label: 'Clients', active: false, href: '/dashboard/clients' },
  { icon: 'file-text', label: 'Contracts', active: false, href: '/dashboard/contracts' },
  { icon: 'upload', label: 'Deliverables', active: false, href: '/dashboard/deliverables' },
  { icon: 'credit-card', label: 'Payments', active: false, href: '/dashboard/payments' },
  { icon: 'settings', label: 'Settings', active: false, href: '/dashboard/settings' },
]

const quickActions = [
  {
    title: 'New Client Project',
    description: 'Start onboarding a new ghostwriting client with our streamlined process',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    gradient: 'from-blue-500/20 to-blue-600/20',
    href: '/dashboard/projects/new',
    features: ['Smart Onboarding', 'Template Library', 'Client Portal Setup']
  },
  {
    title: 'Upload Manuscript',
    description: 'Submit chapter draft or revision with version control and feedback tracking',
    icon: Upload,
    color: 'from-green-500 to-green-600',
    gradient: 'from-green-500/20 to-green-600/20',
    href: '/dashboard/deliverables/upload',
    features: ['Version Control', 'Inline Comments', 'Progress Tracking']
  },
  {
    title: 'Schedule Review',
    description: 'Set up client feedback session with video integration and screen sharing',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600',
    gradient: 'from-purple-500/20 to-purple-600/20',
    href: '/dashboard/projects/review',
    features: ['Video Calls', 'Screen Sharing', 'Recording']
  },
  {
    title: 'Send Invoice',
    description: 'Generate milestone payment request with automated payment processing',
    icon: CreditCard,
    color: 'from-orange-500 to-orange-600',
    gradient: 'from-orange-500/20 to-orange-600/20',
    href: '/dashboard/payments/invoice',
    features: ['Milestone Tracking', 'Auto Payments', 'Tax Reports']
  },
  {
    title: 'Contract Management',
    description: 'Upload or request contract signatures with legal compliance tools',
    icon: FileText,
    color: 'from-indigo-500 to-indigo-600',
    gradient: 'from-indigo-500/20 to-indigo-600/20',
    href: '/dashboard/contracts',
    features: ['E-Signatures', 'Legal Templates', 'Compliance']
  },
  {
    title: 'Progress Report',
    description: 'Generate comprehensive client status update with analytics',
    icon: BarChart3,
    color: 'from-teal-500 to-teal-600',
    gradient: 'from-teal-500/20 to-teal-600/20',
    href: '/dashboard/projects/report',
    features: ['Analytics', 'Timeline Views', 'Performance Metrics']
  }
]

const projectPhases = [
  { 
    name: 'Project Discovery', 
    status: 'completed', 
    progress: 100, 
    daysLeft: 0,
    description: 'Client needs analysis and project scope defined',
    icon: Lightbulb,
    color: 'from-green-500 to-green-600'
  },
  { 
    name: 'Outline Development', 
    status: 'completed', 
    progress: 100, 
    daysLeft: 0,
    description: 'Comprehensive book structure and chapter breakdown',
    icon: BookOpen,
    color: 'from-green-500 to-green-600'
  },
  { 
    name: 'First Draft', 
    status: 'current', 
    progress: 65, 
    daysLeft: 8,
    description: 'Initial manuscript development with client feedback integration',
    icon: PenTool,
    color: 'from-blue-500 to-blue-600'
  },
  { 
    name: 'Client Review', 
    status: 'pending', 
    progress: 0, 
    daysLeft: 15,
    description: 'Comprehensive client feedback and revision planning',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600'
  },
  { 
    name: 'Final Revisions', 
    status: 'pending', 
    progress: 0, 
    daysLeft: 22,
    description: 'Incorporating feedback and polishing final manuscript',
    icon: TargetIcon,
    color: 'from-orange-500 to-orange-600'
  },
  { 
    name: 'Publication Ready', 
    status: 'pending', 
    progress: 0, 
    daysLeft: 30,
    description: 'Final formatting, proofreading, and delivery preparation',
    icon: Star,
    color: 'from-indigo-500 to-indigo-600'
  }
]

const recentActivity = [
  {
    type: 'project',
    title: 'Project Setup Complete',
    description: 'Your onboarding is finished and project timeline has been created with all milestones defined',
    time: '2 hours ago',
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    status: 'completed'
  },
  {
    type: 'upload',
    title: 'Chapter 3 Draft Uploaded',
    description: 'First draft of Chapter 3 submitted with 3,200 words and inline comments',
    time: '1 day ago',
    icon: Upload,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    status: 'pending'
  },
  {
    type: 'payment',
    title: 'Milestone Invoice Sent',
    description: 'Second milestone payment request sent to client for $4,000',
    time: '2 days ago',
    icon: CreditCard,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    status: 'completed'
  },
  {
    type: 'review',
    title: 'Client Feedback Received',
    description: 'Detailed feedback available for Chapter 2 with 5 revision requests',
    time: '3 days ago',
    icon: MessageSquare,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    status: 'pending'
  },
  {
    type: 'contract',
    title: 'Contract Signed',
    description: 'New project contract signed and activated for "Mindful Parenting"',
    time: '1 week ago',
    icon: FileText,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    status: 'completed'
  }
]

const stats = [
  {
    title: 'Active Projects',
    value: '3',
    change: '+12%',
    changeType: 'positive',
    icon: FileText,
    color: 'from-blue-500 to-blue-600',
    description: 'Projects in active development',
    trend: 'Up from last month'
  },
  {
    title: 'Monthly Revenue',
    value: '$8,420',
    change: '+8.2%',
    changeType: 'positive',
    icon: DollarSign,
    color: 'from-green-500 to-green-600',
    description: 'Total revenue this month',
    trend: 'Consistent growth'
  },
  {
    title: 'Avg. Project Time',
    value: '28 days',
    change: '-5.1%',
    changeType: 'positive',
    icon: Clock,
    color: 'from-purple-500 to-purple-600',
    description: 'Average completion time',
    trend: 'Faster delivery'
  },
  {
    title: 'Client Satisfaction',
    value: '98%',
    change: '+2.3%',
    changeType: 'positive',
    icon: Award,
    color: 'from-orange-500 to-orange-600',
    description: 'Client satisfaction score',
    trend: 'Excellent ratings'
  }
]

const insights = [
  {
    title: 'Writing Efficiency',
    value: '87%',
    description: 'Your writing efficiency is above average',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    trend: 'up 5% this month'
  },
  {
    title: 'Client Retention',
    value: '92%',
    description: 'Excellent client retention rate',
    icon: Heart,
    color: 'from-pink-500 to-red-500',
    trend: 'up 3% this month'
  },
  {
    title: 'Project Success',
    value: '96%',
    description: 'High project completion success rate',
    icon: Target,
    color: 'from-green-500 to-emerald-500',
    trend: 'up 2% this month'
  }
]

const IconComponent = ({ name, className = "w-4 h-4" }: { name: string, className?: string }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    home: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    folder: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
    users: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
    'file-text': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    upload: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>,
    'credit-card': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    settings: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  }
  return icons[name] || <div className={className}></div>
}

export default function DashboardPage() {
  const [projectData, setProjectData] = useState<ProjectData | null>(null)

  useEffect(() => {
    const loadOnboardingData = () => {
      try {
        const mainData = localStorage.getItem('ghostsync-onboarding-data')
        const personalData = localStorage.getItem('ghostsync-onboarding-personal')
        const projectDetailsData = localStorage.getItem('ghostsync-onboarding-project')
        
        let combinedData: Partial<ProjectData> = {}
        
        if (mainData) {
          combinedData = { ...combinedData, ...JSON.parse(mainData) }
        }
        
        if (personalData) {
          combinedData = { ...combinedData, ...JSON.parse(personalData) }
        }
        
        if (projectDetailsData) {
          combinedData = { ...combinedData, ...JSON.parse(projectDetailsData) }
        }
        
        setProjectData(combinedData as ProjectData)
      } catch (error) {
        console.error('Failed to parse project data:', error)
      }
    }
    
    loadOnboardingData()
  }, [])

  const getDisplayName = () => {
    if (projectData?.name) {
      return projectData.name.split(' ')[0]
    }
    return 'Writer'
  }

  const getFullName = () => {
    return projectData?.name || 'My Account'
  }

  const getUserInitials = () => {
    if (projectData?.name) {
      const nameParts = projectData.name.split(' ')
      if (nameParts.length >= 2) {
        return `${nameParts[0].charAt(0)}${nameParts[1].charAt(0)}`.toUpperCase()
      }
      return nameParts[0].charAt(0).toUpperCase()
    }
    return 'U'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B1B1F] via-[#1B1B1F] to-[#2A2A2E]">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-[#1B1B1F]/95 backdrop-blur-xl border-r border-[#F8F9FA]/10 shadow-2xl z-50">
        {/* Logo */}
        <div className="p-6 border-b border-[#F8F9FA]/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <Image 
                src="/2.svg" 
                alt="GhostSync" 
                width={32}
                height={32}
                className="w-full h-full"
              />
            </div>
            <span className="font-inter font-semibold text-[#F8F9FA]">GhostSync</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                  item.active 
                    ? 'bg-gradient-to-r from-[#5D9CEC] to-[#5D9CEC]/80 text-white shadow-lg shadow-[#5D9CEC]/25' 
                    : 'text-[#F8F9FA]/70 hover:bg-[#F8F9FA]/5 hover:text-[#F8F9FA]'
                }`}
              >
                <IconComponent name={item.icon} />
                <span className="font-inter">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Quick Links */}
          <div className="mt-8">
            <h3 className="text-xs font-inter font-medium text-[#F8F9FA]/50 uppercase tracking-widest mb-3">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-sm text-[#F8F9FA]/70 hover:bg-[#F8F9FA]/5 hover:text-[#F8F9FA] transition-all duration-300">
                <IconComponent name="file-text" />
                <span className="font-inter">Template Library</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-sm text-[#F8F9FA]/70 hover:bg-[#F8F9FA]/5 hover:text-[#F8F9FA] transition-all duration-300">
                <IconComponent name="users" />
                <span className="font-inter">Client Portal</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-sm text-[#F8F9FA]/70 hover:bg-[#F8F9FA]/5 hover:text-[#F8F9FA] transition-all duration-300">
                <IconComponent name="upload" />
                <span className="font-inter">Analytics</span>
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="mt-8">
            <h3 className="text-xs font-inter font-medium text-[#F8F9FA]/50 uppercase tracking-widest mb-3">Resources</h3>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-sm text-[#F8F9FA]/70 hover:bg-[#F8F9FA]/5 hover:text-[#F8F9FA] transition-all duration-300">
                <IconComponent name="file-text" />
                <span className="font-inter">Knowledge Base</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded-lg text-sm text-[#F8F9FA]/70 hover:bg-[#F8F9FA]/5 hover:text-[#F8F9FA] transition-all duration-300">
                <IconComponent name="users" />
                <span className="font-inter">Support</span>
              </a>
            </nav>
          </div>
        </div>

        {/* User Account */}
        <div className="p-4 border-t border-[#F8F9FA]/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#5D9CEC] to-[#FBC02D] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-inter font-medium">
                {getUserInitials()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-inter font-medium text-[#F8F9FA] truncate">
                {getFullName()}
              </div>
              <div className="text-xs text-[#F8F9FA]/50 font-inter">Professional Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <div className="p-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-inter text-4xl lg:text-5xl font-light text-[#F8F9FA] leading-tight">
                  Good morning, {getDisplayName()}
                </h1>
                <p className="text-[#F8F9FA]/70 mt-3 font-inter text-lg">
                  {projectData?.projectTitle ? `Working on "${projectData.projectTitle}"` : 'Welcome to your professional workspace'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-3 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-xl hover:bg-[#F8F9FA]/5 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button className="p-3 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-xl hover:bg-[#F8F9FA]/5 transition-all duration-300 relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#5D9CEC] to-[#FBC02D] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-inter font-medium">
                      {getUserInitials()}
                    </span>
                  </div>
                  <button className="text-[#F8F9FA] hover:text-[#FBC02D] text-sm font-inter font-medium transition-colors duration-300">
                    {getDisplayName()}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-sm font-inter font-medium ml-1 ${
                      stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-inter font-medium text-[#F8F9FA]/70 mb-1">{stat.title}</p>
                  <p className="text-2xl font-inter font-bold text-[#F8F9FA] mb-2">{stat.value}</p>
                  <p className="text-xs font-inter text-[#F8F9FA]/50">{stat.description}</p>
                  <p className="text-xs font-inter text-[#F8F9FA]/40 mt-1">{stat.trend}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Actions Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-inter text-2xl font-light text-[#F8F9FA]">Quick Actions</h2>
              <p className="font-inter text-[#F8F9FA]/60">Streamline your workflow</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-inter font-semibold text-[#F8F9FA] mb-2 group-hover:text-[#FBC02D] transition-colors duration-300">
                          {action.title}
                        </h3>
                        <p className="font-inter text-sm text-[#F8F9FA]/70 leading-relaxed">{action.description}</p>
                      </div>
                    </div>
                    
                    {/* Features list */}
                    <div className="space-y-2">
                      {action.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#5D9CEC] rounded-full" />
                          <span className="font-inter text-xs text-[#F8F9FA]/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Timeline */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-inter text-xl font-light text-[#F8F9FA] mb-2">Project Timeline</h2>
                  <p className="font-inter text-[#F8F9FA]/60 text-sm">Current project progress and milestones</p>
                </div>
                <button className="text-[#5D9CEC] hover:text-[#FBC02D] font-inter text-sm font-medium transition-colors duration-300">View All</button>
              </div>
              <div className="space-y-4">
                {projectPhases.map((phase, index) => (
                  <div key={index} className="group relative p-4 bg-[#1B1B1F]/30 rounded-xl border border-[#F8F9FA]/5 hover:border-[#F8F9FA]/20 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {phase.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : phase.status === 'current' ? (
                          <phase.icon className="w-6 h-6 text-white" />
                        ) : (
                          <phase.icon className="w-6 h-6 text-white/60" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-inter font-medium text-[#F8F9FA]">{phase.name}</span>
                          <span className="font-inter text-sm text-[#F8F9FA]/60">{phase.progress}%</span>
                        </div>
                        <p className="font-inter text-xs text-[#F8F9FA]/50 mb-3">{phase.description}</p>
                        {phase.status === 'current' && (
                          <div className="w-full bg-[#F8F9FA]/10 rounded-full h-2 mb-2">
                            <div 
                              className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${phase.progress}%` }}
                            ></div>
                          </div>
                        )}
                        {phase.daysLeft > 0 && (
                          <p className="font-inter text-xs text-[#F8F9FA]/40">{phase.daysLeft} days remaining</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-inter text-xl font-light text-[#F8F9FA] mb-2">Recent Activity</h2>
                  <p className="font-inter text-[#F8F9FA]/60 text-sm">Latest updates and notifications</p>
                </div>
                <button className="text-[#5D9CEC] hover:text-[#FBC02D] font-inter text-sm font-medium transition-colors duration-300">View All</button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="group relative p-4 bg-[#1B1B1F]/30 rounded-xl border border-[#F8F9FA]/5 hover:border-[#F8F9FA]/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-lg ${activity.bgColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <activity.icon className={`w-5 h-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-inter font-medium text-[#F8F9FA] mb-1">{activity.title}</h3>
                        <p className="font-inter text-sm text-[#F8F9FA]/70 mb-2 leading-relaxed">{activity.description}</p>
                        <div className="flex items-center justify-between">
                          <p className="font-inter text-xs text-[#F8F9FA]/50">{activity.time}</p>
                          <span className={`font-inter text-xs px-2 py-1 rounded-full ${
                            activity.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            activity.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Performance Insights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-inter text-2xl font-light text-[#F8F9FA] mb-2">Performance Insights</h2>
                <p className="font-inter text-[#F8F9FA]/60">Your writing efficiency and client satisfaction metrics</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <div key={index} className="group relative bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${insight.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <insight.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-inter text-2xl font-bold text-[#F8F9FA]">{insight.value}</span>
                  </div>
                  <h3 className="font-inter font-semibold text-[#F8F9FA] mb-2">{insight.title}</h3>
                  <p className="font-inter text-sm text-[#F8F9FA]/70 mb-3">{insight.description}</p>
                  <p className="font-inter text-xs text-[#F8F9FA]/50">{insight.trend}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 