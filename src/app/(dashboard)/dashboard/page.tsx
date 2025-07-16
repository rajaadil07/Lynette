'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface ProjectData {
  // Personal info
  name: string
  email: string
  persona: string
  projectType: string
  // Project details
  projectTitle: string
  estimatedLength: string
  currentStage: string
  previousExperience: string
  communicationStyle: string
  feedbackFrequency: string
  targetAudience: string
}

const sidebarItems = [
  { icon: 'home', label: 'Dashboard', active: true },
  { icon: 'folder', label: 'Projects' },
  { icon: 'users', label: 'Clients' },
  { icon: 'file-text', label: 'Contracts' },
  { icon: 'upload', label: 'Deliverables' },
  { icon: 'credit-card', label: 'Payments' },
  { icon: 'settings', label: 'Settings' },
]

const quickActions = [
  {
    title: 'New Project',
    description: 'Start a new ghostwriting project',
    icon: 'plus',
  },
  {
    title: 'Upload Draft',
    description: 'Submit chapter or manuscript',
    icon: 'upload',
  },
  {
    title: 'Schedule Meeting',
    description: 'Book client review session',
    icon: 'calendar',
  },
  {
    title: 'Send Invoice',
    description: 'Generate payment request',
    icon: 'dollar',
  },
]

const metrics = [
  {
    label: 'Active Projects',
    value: '3',
    change: '+2 this month',
  },
  {
    label: 'Words Written',
    value: '47.2K',
    change: '+12.5K this week',
  },
  {
    label: 'Revenue',
    value: '$12,580',
    change: '+$3,200 this month',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
    change: '+2% from last month',
  }
]

const projectPhases = [
  { name: 'Research & Planning', status: 'completed', progress: 100, date: 'Dec 15' },
  { name: 'Outline Creation', status: 'completed', progress: 100, date: 'Dec 18' },
  { name: 'First Draft', status: 'current', progress: 65, date: 'Dec 28' },
  { name: 'Client Review', status: 'pending', progress: 0, date: 'Jan 5' },
  { name: 'Revisions', status: 'pending', progress: 0, date: 'Jan 12' },
  { name: 'Final Delivery', status: 'pending', progress: 0, date: 'Jan 20' }
]

const recentActivity = [
  {
    title: 'Chapter 3 Uploaded',
    description: 'Draft submitted for "The Entrepreneur\'s Journey"',
    time: '2 hours ago',
  },
  {
    title: 'Client Call Completed', 
    description: 'Feedback session with Sarah Johnson',
    time: '1 day ago',
  },
  {
    title: 'Payment Received',
    description: '$2,500 milestone payment processed', 
    time: '2 days ago',
  },
  {
    title: 'Contract Signed',
    description: 'New project agreement finalized',
    time: '3 days ago',
  }
]

const IconComponent = ({ name, className = "w-5 h-5" }: { name: string, className?: string }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    home: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    folder: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
    users: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
    'file-text': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    upload: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>,
    'credit-card': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    settings: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    plus: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
    calendar: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    dollar: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>,
    bell: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" /></svg>,
    search: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    sun: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    moon: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
  }
  return icons[name] || <div className={className}></div>
}

export default function DashboardPage() {
  const [projectData, setProjectData] = useState<ProjectData | null>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    // Load all onboarding data from localStorage
    const loadOnboardingData = () => {
      try {
        // Load main onboarding data
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

  // Get display name with proper fallback
  const getDisplayName = () => {
    if (projectData?.name) {
      return projectData.name.split(' ')[0]
    }
    return 'Writer'
  }

  // Get full name for account section
  const getFullName = () => {
    return projectData?.name || 'My Account'
  }

  // Get user initials for avatar
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
    <div className={`h-screen ${theme === 'dark' ? 'bg-[#1B1B1F]' : 'bg-[#F8F9FA]'} flex`}>
      {/* Sidebar */}
      <div className={`w-64 ${theme === 'dark' ? 'bg-[#1B1B1F] border-r border-white/10' : 'bg-white border-r border-[#F8F9FA]/20'} flex flex-col`}>
        {/* Logo */}
        <div className={`p-6 border-b ${theme === 'dark' ? 'border-white/10' : 'border-[#F8F9FA]/10'}`}>
          <div className="flex items-center space-x-3">
            <Image 
              src="/icon.png" 
              alt="GhostSync" 
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div>
              <h1 className={`font-inter font-semibold ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>GhostSync</h1>
              <p className={`text-xs ${theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}`}>Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.active 
                    ? 'bg-[#5D9CEC] text-white' 
                    : theme === 'dark' 
                      ? 'text-[#F8F9FA]/70 hover:bg-white/10 hover:text-[#F8F9FA]'
                      : 'text-[#1B1B1F]/70 hover:bg-[#F8F9FA]/60 hover:text-[#1B1B1F]'
                }`}
              >
                <IconComponent name={item.icon} className="w-5 h-5 mr-3" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className={`p-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-[#F8F9FA]/10'}`}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">
                {getUserInitials()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-sm font-medium truncate ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>
                {getFullName()}
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}`}>Pro Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className={`text-2xl font-inter font-semibold mb-2 ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>
                Good morning, {getDisplayName()}
              </h1>
              <p className={theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}>
                {projectData?.projectTitle ? `Working on "${projectData.projectTitle}"` : 'Welcome to your dashboard'}
              </p>
            </div>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' 
                  ? 'bg-white/10 hover:bg-white/20 text-[#F8F9FA]' 
                  : 'bg-[#1B1B1F]/5 hover:bg-[#1B1B1F]/10 text-[#1B1B1F]'
              }`}
            >
              <IconComponent name={theme === 'light' ? 'moon' : 'sun'} className="w-5 h-5" />
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-[#1B1B1F] border border-white/10' : 'bg-white border border-[#F8F9FA]/20'} rounded-lg p-6`}>
                <div className="mb-2">
                  <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>{metric.value}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}`}>{metric.label}</p>
                </div>
                <p className="text-xs text-[#5D9CEC]">{metric.change}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className={`text-lg font-inter font-semibold mb-4 ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>Quick Actions</h2>
            <div className="grid grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-[#1B1B1F] border border-white/10 hover:border-[#5D9CEC]/50 hover:bg-[#5D9CEC]/10' 
                      : 'bg-white border border-[#F8F9FA]/20 hover:border-[#5D9CEC]/20 hover:bg-[#5D9CEC]/5'
                  } rounded-lg p-4 text-left transition-colors`}
                >
                  <div className="w-8 h-8 bg-[#5D9CEC]/10 rounded-lg flex items-center justify-center mb-3">
                    <IconComponent name={action.icon} className="w-4 h-4 text-[#5D9CEC]" />
                  </div>
                  <h3 className={`text-sm font-medium mb-1 ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>{action.title}</h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}`}>{action.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-3 gap-8">
            {/* Project Timeline */}
            <div className={`col-span-2 ${theme === 'dark' ? 'bg-[#1B1B1F] border border-white/10' : 'bg-white border border-[#F8F9FA]/20'} rounded-lg p-6`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-lg font-inter font-semibold ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>Project Timeline</h2>
                <span className={`text-sm ${theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}`}>
                  {projectData?.projectTitle || 'Current Project'}
                </span>
              </div>
              
              <div className="space-y-4">
                {projectPhases.map((phase, index) => (
                  <div key={index} className={`flex items-center justify-between py-3 border-b ${theme === 'dark' ? 'border-white/10' : 'border-[#F8F9FA]/10'} last:border-0`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                        phase.status === 'completed' 
                          ? 'bg-[#5D9CEC] text-white' :
                        phase.status === 'current' 
                          ? 'bg-[#FBC02D] text-[#1B1B1F]' :
                          theme === 'dark' ? 'bg-white/10 text-[#F8F9FA]/60' : 'bg-[#F8F9FA]/60 text-[#1B1B1F]/60'
                      }`}>
                        {phase.status === 'completed' ? '✓' : index + 1}
                      </div>
                      <div>
                        <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>{phase.name}</h3>
                        <p className={`text-xs ${theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}`}>{phase.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm ${theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}`}>{phase.progress}%</span>
                      {phase.status === 'current' && (
                        <div className={`w-24 ${theme === 'dark' ? 'bg-white/20' : 'bg-[#F8F9FA]/60'} rounded-full h-1 mt-1`}>
                          <div 
                            className="bg-[#FBC02D] h-1 rounded-full" 
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className={`${theme === 'dark' ? 'bg-[#1B1B1F] border border-white/10' : 'bg-white border border-[#F8F9FA]/20'} rounded-lg p-6`}>
              <h2 className={`text-lg font-inter font-semibold mb-4 ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>Recent Activity</h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className={`pb-4 border-b ${theme === 'dark' ? 'border-white/10' : 'border-[#F8F9FA]/10'} last:border-0 last:pb-0`}>
                    <h3 className={`text-sm font-medium mb-1 ${theme === 'dark' ? 'text-[#F8F9FA]' : 'text-[#1B1B1F]'}`}>{activity.title}</h3>
                    <p className={`text-xs mb-2 ${theme === 'dark' ? 'text-[#F8F9FA]/60' : 'text-[#1B1B1F]/60'}`}>{activity.description}</p>
                    <span className={`text-xs ${theme === 'dark' ? 'text-[#F8F9FA]/40' : 'text-[#1B1B1F]/40'}`}>{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 