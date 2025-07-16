'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Calendar,
  Clock,
  DollarSign,
  Users,
  FileText,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Star,
  TrendingUp,
  UserPlus,
  Activity,
  Award,
  MapPin,
  Building,
  PhoneCall,
  Mail as MailIcon,
  ExternalLink,
  Edit,
  Eye,
  Trash2,
  Heart,
  Shield,
  Globe as GlobeIcon,
  Smartphone,
  Monitor,
  Palette,
  Zap,
  Target,
  BookOpen,
  PenTool,
  CalendarDays,
  Lightbulb,
  Sparkles,
  Rocket,
  Target as TargetIcon,
  BookMarked,
  FileCheck,
  FileX,
  FileClock,
  FileEdit,
  FileSearch,
  FileBarChart,
  FileHeart,
  FileShield,
  FileZap,
  FileStar,
  FileTrendingUp,
  FileActivity,
  FileAward,
  FileGlobe,
  FileSmartphone,
  FileMonitor,
  FilePalette
} from 'lucide-react'

const clients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    company: 'Independent Author',
    location: 'New York, NY',
    avatar: 'SJ',
    status: 'active',
    totalProjects: 3,
    totalRevenue: '$36,000',
    lastContact: '2 days ago',
    nextFollowUp: '2024-01-25',
    communicationStyle: 'Email',
    preferredContact: 'email',
    tags: ['Memoir', 'High Priority', 'Regular Client'],
    recentProjects: ['The Silent Echo', 'Life Lessons', 'Personal Journey'],
    description: 'Experienced author seeking professional ghostwriting services for personal memoir projects.',
    satisfactionScore: 95,
    responseTime: '2 hours',
    projectSuccessRate: 100,
    averageProjectValue: '$12,000',
    communicationHistory: [
      { type: 'email', date: '2024-01-20', subject: 'Chapter 3 Feedback' },
      { type: 'call', date: '2024-01-18', subject: 'Project Timeline Discussion' },
      { type: 'meeting', date: '2024-01-15', subject: 'Outline Review' }
    ],
    preferences: {
      communicationFrequency: 'Weekly',
      preferredTime: 'Afternoons',
      timezone: 'EST',
      specialRequirements: 'Detailed progress reports'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@techcorp.com',
    phone: '+1 (555) 234-5678',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    avatar: 'MC',
    status: 'active',
    totalProjects: 2,
    totalRevenue: '$33,000',
    lastContact: '1 day ago',
    nextFollowUp: '2024-01-28',
    communicationStyle: 'Video Call',
    preferredContact: 'phone',
    tags: ['Business', 'Leadership', 'Corporate'],
    recentProjects: ['Corporate Leadership Guide', 'Startup Success'],
    description: 'Tech executive looking to share leadership insights and startup success strategies.',
    satisfactionScore: 92,
    responseTime: '4 hours',
    projectSuccessRate: 100,
    averageProjectValue: '$16,500',
    communicationHistory: [
      { type: 'video', date: '2024-01-22', subject: 'Leadership Principles Review' },
      { type: 'email', date: '2024-01-20', subject: 'Chapter Outline Approval' },
      { type: 'call', date: '2024-01-18', subject: 'Project Scope Discussion' }
    ],
    preferences: {
      communicationFrequency: 'Bi-weekly',
      preferredTime: 'Mornings',
      timezone: 'PST',
      specialRequirements: 'Video calls preferred'
    }
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@marketingpro.com',
    phone: '+1 (555) 345-6789',
    company: 'Marketing Pro Solutions',
    location: 'Miami, FL',
    avatar: 'ER',
    status: 'completed',
    totalProjects: 1,
    totalRevenue: '$15,000',
    lastContact: '1 week ago',
    nextFollowUp: '2024-02-15',
    communicationStyle: 'Email',
    preferredContact: 'email',
    tags: ['Marketing', 'Educational', 'Completed'],
    recentProjects: ['The Art of Digital Marketing'],
    description: 'Marketing professional seeking to create educational content for industry professionals.',
    satisfactionScore: 98,
    responseTime: '1 hour',
    projectSuccessRate: 100,
    averageProjectValue: '$15,000',
    communicationHistory: [
      { type: 'email', date: '2024-01-10', subject: 'Final Manuscript Delivery' },
      { type: 'email', date: '2024-01-05', subject: 'Marketing Strategy Review' },
      { type: 'call', date: '2024-01-01', subject: 'Project Kickoff' }
    ],
    preferences: {
      communicationFrequency: 'As needed',
      preferredTime: 'Flexible',
      timezone: 'EST',
      specialRequirements: 'Quick turnaround preferred'
    }
  },
  {
    id: 4,
    name: 'David Thompson',
    email: 'david.thompson@fitnesscoach.com',
    phone: '+1 (555) 456-7890',
    company: 'Fitness Coach Pro',
    location: 'Austin, TX',
    avatar: 'DT',
    status: 'active',
    totalProjects: 1,
    totalRevenue: '$10,000',
    lastContact: '3 days ago',
    nextFollowUp: '2024-01-30',
    communicationStyle: 'Phone',
    preferredContact: 'phone',
    tags: ['Fitness', 'Self-Help', 'New Client'],
    recentProjects: ['Fitness Transformation Journey'],
    description: 'Fitness coach wanting to share transformation stories and workout methodologies.',
    satisfactionScore: 90,
    responseTime: '6 hours',
    projectSuccessRate: 100,
    averageProjectValue: '$10,000',
    communicationHistory: [
      { type: 'call', date: '2024-01-20', subject: 'Fitness Plan Discussion' },
      { type: 'email', date: '2024-01-18', subject: 'Project Requirements' },
      { type: 'call', date: '2024-01-15', subject: 'Initial Consultation' }
    ],
    preferences: {
      communicationFrequency: 'Weekly',
      preferredTime: 'Evenings',
      timezone: 'CST',
      specialRequirements: 'Phone calls preferred'
    }
  },
  {
    id: 5,
    name: 'Lisa Wang',
    email: 'lisa.wang@startupventures.com',
    phone: '+1 (555) 567-8901',
    company: 'Startup Ventures',
    location: 'Seattle, WA',
    avatar: 'LW',
    status: 'paused',
    totalProjects: 1,
    totalRevenue: '$20,000',
    lastContact: '2 weeks ago',
    nextFollowUp: '2024-02-10',
    communicationStyle: 'Video Call',
    preferredContact: 'video',
    tags: ['Technology', 'Startup', 'On Hold'],
    recentProjects: ['Tech Startup Success Stories'],
    description: 'Startup founder looking to document entrepreneurial journey and lessons learned.',
    satisfactionScore: 87,
    responseTime: '24 hours',
    projectSuccessRate: 75,
    averageProjectValue: '$20,000',
    communicationHistory: [
      { type: 'video', date: '2024-01-05', subject: 'Project Pause Discussion' },
      { type: 'email', date: '2024-01-03', subject: 'Timeline Adjustment' },
      { type: 'call', date: '2024-01-01', subject: 'Startup Stories Planning' }
    ],
    preferences: {
      communicationFrequency: 'Monthly',
      preferredTime: 'Flexible',
      timezone: 'PST',
      specialRequirements: 'Flexible scheduling needed'
    }
  },
  {
    id: 6,
    name: 'Robert Kim',
    email: 'robert.kim@parentingexpert.com',
    phone: '+1 (555) 678-9012',
    company: 'Parenting Expert LLC',
    location: 'Chicago, IL',
    avatar: 'RK',
    status: 'active',
    totalProjects: 1,
    totalRevenue: '$14,000',
    lastContact: '5 hours ago',
    nextFollowUp: '2024-01-27',
    communicationStyle: 'Email',
    preferredContact: 'email',
    tags: ['Parenting', 'Digital Age', 'Regular Client'],
    recentProjects: ['Mindful Parenting in the Digital Age'],
    description: 'Parenting expert seeking to create content about modern parenting challenges.',
    satisfactionScore: 93,
    responseTime: '3 hours',
    projectSuccessRate: 100,
    averageProjectValue: '$14,000',
    communicationHistory: [
      { type: 'email', date: '2024-01-22', subject: 'Chapter 2 Feedback' },
      { type: 'call', date: '2024-01-20', subject: 'Digital Parenting Discussion' },
      { type: 'email', date: '2024-01-18', subject: 'Outline Approval' }
    ],
    preferences: {
      communicationFrequency: 'Weekly',
      preferredTime: 'Mornings',
      timezone: 'CST',
      specialRequirements: 'Detailed research required'
    }
  }
]

const statusColors = {
  active: 'from-green-500 to-green-600',
  completed: 'from-gray-500 to-gray-600',
  paused: 'from-red-500 to-red-600'
}

const statusBgColors = {
  active: 'bg-green-500/10',
  completed: 'bg-gray-500/10',
  paused: 'bg-red-500/10'
}

const contactIcons = {
  email: MailIcon,
  phone: PhoneCall,
  video: MessageSquare
}

const communicationStyles = {
  'Email': { icon: MailIcon, color: 'from-blue-500 to-blue-600' },
  'Phone': { icon: PhoneCall, color: 'from-green-500 to-green-600' },
  'Video Call': { icon: MessageSquare, color: 'from-purple-500 to-purple-600' }
}

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getContactIcon = (type: string) => {
    const IconComponent = contactIcons[type as keyof typeof contactIcons]
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null
  }

  const getCommunicationStyleIcon = (style: string) => {
    const styleInfo = communicationStyles[style as keyof typeof communicationStyles]
    if (styleInfo) {
      const IconComponent = styleInfo.icon
      return <IconComponent className="w-5 h-5" />
    }
    return <MailIcon className="w-5 h-5" />
  }

  const getCommunicationStyleColor = (style: string) => {
    const styleInfo = communicationStyles[style as keyof typeof communicationStyles]
    return styleInfo ? styleInfo.color : 'from-gray-500 to-gray-600'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B1B1F] via-[#1B1B1F] to-[#2A2A2E]">
      <div className="ml-64 p-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-inter text-4xl lg:text-5xl font-light text-[#F8F9FA] leading-tight">Clients</h1>
              <p className="text-[#F8F9FA]/70 mt-3 font-inter text-lg">Manage your client relationships and communication</p>
            </div>
            <button className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] hover:from-[#5D9CEC]/90 hover:to-[#FBC02D]/90 text-white px-8 py-4 rounded-xl font-inter font-medium flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <UserPlus className="w-5 h-5" />
              <span>Add Client</span>
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">4</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Active Clients</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Currently engaged</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">$128K</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Total Revenue</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">All time earnings</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">94%</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Satisfaction</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Average rating</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">9</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Total Projects</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Completed successfully</p>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#F8F9FA]/50" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#1B1B1F]/50 backdrop-blur-xl border border-[#F8F9FA]/10 rounded-xl text-[#F8F9FA] placeholder-[#F8F9FA]/50 font-inter focus:outline-none focus:border-[#5D9CEC] transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 bg-[#1B1B1F]/50 backdrop-blur-xl border border-[#F8F9FA]/10 rounded-xl text-[#F8F9FA] font-inter focus:outline-none focus:border-[#5D9CEC] transition-all duration-300"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
              </select>
              
              <div className="flex items-center space-x-2 bg-[#1B1B1F]/50 backdrop-blur-xl border border-[#F8F9FA]/10 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-[#5D9CEC] text-white' 
                      : 'text-[#F8F9FA]/50 hover:text-[#F8F9FA]'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-[#5D9CEC] text-white' 
                      : 'text-[#F8F9FA]/50 hover:text-[#F8F9FA]'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clients Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredClients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${statusBgColors[client.status as keyof typeof statusBgColors]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm font-inter font-medium">
                        {client.avatar}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-[#F8F9FA] group-hover:text-[#FBC02D] transition-colors duration-300">
                        {client.name}
                      </h3>
                      <p className="font-inter text-sm text-[#F8F9FA]/60">{client.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium border ${
                      client.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      client.status === 'completed' ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' :
                      'bg-red-500/20 text-red-400 border-red-500/30'
                    }`}>
                      {client.status}
                    </span>
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-sm text-[#F8F9FA]/70 mb-4 leading-relaxed">
                  {client.description}
                </p>

                {/* Contact Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getCommunicationStyleColor(client.communicationStyle)} flex items-center justify-center`}>
                    {getCommunicationStyleIcon(client.communicationStyle)}
                  </div>
                  <div className="flex-1">
                    <p className="font-inter text-sm text-[#F8F9FA]">{client.email}</p>
                    <p className="font-inter text-xs text-[#F8F9FA]/60">{client.phone}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="font-inter text-xs text-[#F8F9FA]/50 mb-1">Projects</p>
                    <p className="font-inter text-sm font-semibold text-[#F8F9FA]">{client.totalProjects}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-inter text-xs text-[#F8F9FA]/50 mb-1">Revenue</p>
                    <p className="font-inter text-sm font-semibold text-[#F8F9FA]">{client.totalRevenue}</p>
                  </div>
                </div>

                {/* Satisfaction Score */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-inter text-sm font-medium text-[#F8F9FA]">Satisfaction</span>
                    <span className="font-inter text-sm text-[#F8F9FA]/60">{client.satisfactionScore}%</span>
                  </div>
                  <div className="w-full bg-[#F8F9FA]/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${client.satisfactionScore}%` }}
                    ></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${statusColors[client.status as keyof typeof statusColors]} flex items-center justify-center`}>
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-inter text-sm font-medium text-[#F8F9FA] capitalize">{client.status}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {client.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-[#F8F9FA]/5 text-[#F8F9FA]/60 rounded-lg text-xs font-inter">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Last Contact */}
                <div className="mt-4 pt-4 border-t border-[#F8F9FA]/10">
                  <p className="font-inter text-xs text-[#F8F9FA]/50">
                    Last contact: {client.lastContact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredClients.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-[#F8F9FA]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-[#F8F9FA]/30" />
            </div>
            <h3 className="font-inter text-xl font-medium text-[#F8F9FA] mb-2">No clients found</h3>
            <p className="font-inter text-[#F8F9FA]/60 mb-6">Try adjusting your search or filter criteria</p>
            <button className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] hover:from-[#5D9CEC]/90 hover:to-[#FBC02D]/90 text-white px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300">
              Add New Client
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}