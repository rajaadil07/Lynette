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
  { icon: 'folder', label: 'Projects', active: false },
  { icon: 'users', label: 'Clients', active: false },
  { icon: 'file-text', label: 'Contracts', active: false },
  { icon: 'upload', label: 'Deliverables', active: false },
  { icon: 'credit-card', label: 'Payments', active: false },
  { icon: 'settings', label: 'Settings', active: false },
]

const quickActions = [
  {
    title: 'New Client Project',
    description: 'Start onboarding a new ghostwriting client',
  },
  {
    title: 'Upload Manuscript',
    description: 'Submit chapter draft or revision',
  },
  {
    title: 'Schedule Review',
    description: 'Set up client feedback session',
  },
  {
    title: 'Send Invoice',
    description: 'Generate milestone payment request',
  },
  {
    title: 'Contract Management',
    description: 'Upload or request contract signatures',
  },
  {
    title: 'Progress Report',
    description: 'Generate client status update',
  }
]

const projectPhases = [
  { name: 'Outline', status: 'completed', progress: 100 },
  { name: 'First Draft', status: 'current', progress: 45 },
  { name: 'Client Review', status: 'pending', progress: 0 },
  { name: 'Revisions', status: 'pending', progress: 0 },
  { name: 'Final Manuscript', status: 'pending', progress: 0 }
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
    <div className="h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
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
            <span className="font-semibold text-gray-900">GhostSync</span>
            <div className="ml-auto">
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  item.active 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <IconComponent name={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Quick Links */}
          <div className="mt-8">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <IconComponent name="file-text" />
                <span>Template Library</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <IconComponent name="users" />
                <span>Client Portal</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <IconComponent name="upload" />
                <span>Analytics</span>
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="mt-8">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Resources</h3>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <IconComponent name="file-text" />
                <span>Knowledge Base</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                <IconComponent name="users" />
                <span>Support</span>
              </a>
            </nav>
          </div>
        </div>

        {/* User Account */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">
                {getUserInitials()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                {getFullName()}
              </div>
              <div className="text-xs text-gray-500">Freelancer Plan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-medium text-gray-900">
                  Good morning, {getDisplayName()}
                </h1>
                <p className="text-gray-600 mt-1">
                  {projectData?.projectTitle ? `Working on "${projectData.projectTitle}"` : 'Welcome to your workspace'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">
                      {getUserInitials()}
                    </span>
                  </div>
                  <button className="text-gray-600 hover:text-gray-900 text-sm">
                    {getDisplayName()}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-8">
            {/* Project Timeline */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Project Timeline</h2>
              <div className="space-y-4">
                {projectPhases.map((phase, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      phase.status === 'completed' ? 'bg-gray-900 text-white' :
                      phase.status === 'current' ? 'bg-gray-900 text-white' :
                      'bg-gray-300 text-gray-600'
                    }`}>
                      {phase.status === 'completed' ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-xs font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{phase.name}</span>
                        <span className="text-sm text-gray-500">{phase.progress}%</span>
                      </div>
                      {phase.status === 'current' && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gray-900 h-2 rounded-full transition-all duration-300" 
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
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <IconComponent name="file-text" className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Project Setup Complete</h3>
                      <p className="text-sm text-gray-600">Your onboarding is finished and project timeline has been created</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <IconComponent name="upload" className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Upload First Draft</h3>
                      <p className="text-sm text-gray-600">Ready to submit your first chapter or outline draft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 