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
  Pause,
  Play,
  Edit,
  Eye,
  Download,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Star,
  BookOpen,
  PenTool,
  Target,
  Award,
  CalendarDays,
  Lightbulb,
  Sparkles,
  Rocket,
  Heart,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Zap,
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

const projects = [
  {
    id: 1,
    title: 'The Silent Echo',
    client: 'Sarah Johnson',
    type: 'Memoir',
    status: 'active',
    progress: 65,
    deadline: '2024-02-15',
    budget: '$12,000',
    wordCount: '45,000',
    targetWordCount: '70,000',
    lastActivity: '2 hours ago',
    priority: 'high',
    tags: ['Memoir', 'Personal Story', 'Inspirational'],
    description: 'A deeply personal memoir about overcoming adversity and finding inner strength through life\'s challenges.',
    milestones: [
      { name: 'Outline Approval', status: 'completed', date: '2024-01-05' },
      { name: 'First Draft', status: 'in-progress', date: '2024-01-20' },
      { name: 'Client Review', status: 'pending', date: '2024-02-01' },
      { name: 'Final Manuscript', status: 'pending', date: '2024-02-15' }
    ],
    team: ['Lead Writer', 'Editor', 'Client'],
    category: 'Personal Development',
    estimatedCompletion: '85%',
    qualityScore: 92,
    clientSatisfaction: 95
  },
  {
    id: 2,
    title: 'Corporate Leadership Guide',
    client: 'Michael Chen',
    type: 'Business Book',
    status: 'review',
    progress: 85,
    deadline: '2024-01-30',
    budget: '$18,000',
    wordCount: '65,000',
    targetWordCount: '75,000',
    lastActivity: '1 day ago',
    priority: 'medium',
    tags: ['Business', 'Leadership', 'Professional Development'],
    description: 'Comprehensive guide for corporate leaders on building effective teams and driving organizational success.',
    milestones: [
      { name: 'Project Setup', status: 'completed', date: '2024-01-10' },
      { name: 'First Draft', status: 'completed', date: '2024-01-25' },
      { name: 'Client Review', status: 'in-progress', date: '2024-01-28' },
      { name: 'Final Manuscript', status: 'pending', date: '2024-01-30' }
    ],
    team: ['Lead Writer', 'Business Analyst', 'Client'],
    category: 'Business & Leadership',
    estimatedCompletion: '90%',
    qualityScore: 88,
    clientSatisfaction: 92
  },
  {
    id: 3,
    title: 'The Art of Digital Marketing',
    client: 'Emma Rodriguez',
    type: 'Educational',
    status: 'completed',
    progress: 100,
    deadline: '2024-01-15',
    budget: '$15,000',
    wordCount: '80,000',
    targetWordCount: '80,000',
    lastActivity: '1 week ago',
    priority: 'low',
    tags: ['Marketing', 'Digital', 'Educational'],
    description: 'Comprehensive guide to modern digital marketing strategies and techniques for business growth.',
    milestones: [
      { name: 'Outline Approval', status: 'completed', date: '2023-12-01' },
      { name: 'First Draft', status: 'completed', date: '2023-12-20' },
      { name: 'Client Review', status: 'completed', date: '2024-01-05' },
      { name: 'Final Manuscript', status: 'completed', date: '2024-01-15' }
    ],
    team: ['Lead Writer', 'Marketing Expert', 'Client'],
    category: 'Marketing & Education',
    estimatedCompletion: '100%',
    qualityScore: 95,
    clientSatisfaction: 98
  },
  {
    id: 4,
    title: 'Fitness Transformation Journey',
    client: 'David Thompson',
    type: 'Self-Help',
    status: 'planning',
    progress: 15,
    deadline: '2024-03-20',
    budget: '$10,000',
    wordCount: '8,000',
    targetWordCount: '60,000',
    lastActivity: '3 days ago',
    priority: 'medium',
    tags: ['Fitness', 'Self-Help', 'Transformation'],
    description: 'Inspirational guide for personal fitness transformation with practical workout and nutrition plans.',
    milestones: [
      { name: 'Project Setup', status: 'in-progress', date: '2024-01-25' },
      { name: 'First Draft', status: 'pending', date: '2024-02-15' },
      { name: 'Client Review', status: 'pending', date: '2024-03-05' },
      { name: 'Final Manuscript', status: 'pending', date: '2024-03-20' }
    ],
    team: ['Lead Writer', 'Fitness Expert', 'Client'],
    category: 'Health & Wellness',
    estimatedCompletion: '25%',
    qualityScore: 85,
    clientSatisfaction: 90
  },
  {
    id: 5,
    title: 'Tech Startup Success Stories',
    client: 'Lisa Wang',
    type: 'Business Book',
    status: 'paused',
    progress: 40,
    deadline: '2024-02-28',
    budget: '$20,000',
    wordCount: '30,000',
    targetWordCount: '75,000',
    lastActivity: '2 weeks ago',
    priority: 'low',
    tags: ['Technology', 'Startup', 'Success Stories'],
    description: 'Collection of inspiring stories from successful tech startups and their journey to market leadership.',
    milestones: [
      { name: 'Project Setup', status: 'completed', date: '2023-12-15' },
      { name: 'First Draft', status: 'in-progress', date: '2024-01-10' },
      { name: 'Client Review', status: 'pending', date: '2024-02-10' },
      { name: 'Final Manuscript', status: 'pending', date: '2024-02-28' }
    ],
    team: ['Lead Writer', 'Tech Analyst', 'Client'],
    category: 'Technology & Business',
    estimatedCompletion: '55%',
    qualityScore: 82,
    clientSatisfaction: 87
  },
  {
    id: 6,
    title: 'Mindful Parenting in the Digital Age',
    client: 'Robert Kim',
    type: 'Parenting',
    status: 'active',
    progress: 55,
    deadline: '2024-03-10',
    budget: '$14,000',
    wordCount: '38,000',
    targetWordCount: '70,000',
    lastActivity: '5 hours ago',
    priority: 'high',
    tags: ['Parenting', 'Digital Age', 'Mindfulness'],
    description: 'Modern parenting guide addressing the challenges of raising children in today\'s digital world.',
    milestones: [
      { name: 'Outline Approval', status: 'completed', date: '2024-01-15' },
      { name: 'First Draft', status: 'in-progress', date: '2024-01-30' },
      { name: 'Client Review', status: 'pending', date: '2024-02-25' },
      { name: 'Final Manuscript', status: 'pending', date: '2024-03-10' }
    ],
    team: ['Lead Writer', 'Child Psychologist', 'Client'],
    category: 'Parenting & Family',
    estimatedCompletion: '75%',
    qualityScore: 89,
    clientSatisfaction: 93
  }
]

const statusColors = {
  active: 'from-green-500 to-green-600',
  review: 'from-blue-500 to-blue-600',
  completed: 'from-gray-500 to-gray-600',
  planning: 'from-yellow-500 to-yellow-600',
  paused: 'from-red-500 to-red-600'
}

const statusBgColors = {
  active: 'bg-green-500/10',
  review: 'bg-blue-500/10',
  completed: 'bg-gray-500/10',
  planning: 'bg-yellow-500/10',
  paused: 'bg-red-500/10'
}

const priorityColors = {
  high: 'from-red-500 to-red-600',
  medium: 'from-yellow-500 to-yellow-600',
  low: 'from-green-500 to-green-600'
}

const statusIcons = {
  active: Play,
  review: AlertCircle,
  completed: CheckCircle,
  planning: Clock,
  paused: Pause
}

const projectTypes = {
  'Memoir': { icon: BookOpen, color: 'from-purple-500 to-purple-600' },
  'Business Book': { icon: BarChart3, color: 'from-blue-500 to-blue-600' },
  'Educational': { icon: BookMarked, color: 'from-green-500 to-green-600' },
  'Self-Help': { icon: Heart, color: 'from-pink-500 to-pink-600' },
  'Parenting': { icon: Users, color: 'from-indigo-500 to-indigo-600' }
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    const IconComponent = statusIcons[status as keyof typeof statusIcons]
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null
  }

  const getProjectTypeIcon = (type: string) => {
    const typeInfo = projectTypes[type as keyof typeof projectTypes]
    if (typeInfo) {
      const IconComponent = typeInfo.icon
      return <IconComponent className="w-5 h-5" />
    }
    return <FileText className="w-5 h-5" />
  }

  const getProjectTypeColor = (type: string) => {
    const typeInfo = projectTypes[type as keyof typeof projectTypes]
    return typeInfo ? typeInfo.color : 'from-gray-500 to-gray-600'
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
              <h1 className="font-inter text-4xl lg:text-5xl font-light text-[#F8F9FA] leading-tight">Projects</h1>
              <p className="text-[#F8F9FA]/70 mt-3 font-inter text-lg">Manage your ghostwriting projects and track progress</p>
            </div>
            <button className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] hover:from-[#5D9CEC]/90 hover:to-[#FBC02D]/90 text-white px-8 py-4 rounded-xl font-inter font-medium flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Plus className="w-5 h-5" />
              <span>New Project</span>
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
                <Play className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">3</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Active Projects</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Currently in development</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">1</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">In Review</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Awaiting client feedback</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">1</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Completed</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Successfully delivered</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">$89K</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Total Value</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">All active projects</p>
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
                  placeholder="Search projects..."
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
                <option value="review">In Review</option>
                <option value="completed">Completed</option>
                <option value="planning">Planning</option>
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

        {/* Projects Grid */}
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${statusBgColors[project.status as keyof typeof statusBgColors]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getProjectTypeColor(project.type)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {getProjectTypeIcon(project.type)}
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-[#F8F9FA] group-hover:text-[#FBC02D] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="font-inter text-sm text-[#F8F9FA]/60">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium border ${
                      project.priority === 'high' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                      project.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      'bg-green-500/20 text-green-400 border-green-500/30'
                    }`}>
                      {project.priority}
                    </span>
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-sm text-[#F8F9FA]/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-inter text-sm font-medium text-[#F8F9FA]">Progress</span>
                    <span className="font-inter text-sm text-[#F8F9FA]/60">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-[#F8F9FA]/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="font-inter text-xs text-[#F8F9FA]/50 mb-1">Word Count</p>
                    <p className="font-inter text-sm font-semibold text-[#F8F9FA]">{project.wordCount}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-inter text-xs text-[#F8F9FA]/50 mb-1">Budget</p>
                    <p className="font-inter text-sm font-semibold text-[#F8F9FA]">{project.budget}</p>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${statusColors[project.status as keyof typeof statusColors]} flex items-center justify-center`}>
                      {getStatusIcon(project.status)}
                    </div>
                    <span className="font-inter text-sm font-medium text-[#F8F9FA] capitalize">{project.status}</span>
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
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-[#F8F9FA]/5 text-[#F8F9FA]/60 rounded-lg text-xs font-inter">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Last Activity */}
                <div className="mt-4 pt-4 border-t border-[#F8F9FA]/10">
                  <p className="font-inter text-xs text-[#F8F9FA]/50">
                    Last activity: {project.lastActivity}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-[#F8F9FA]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-[#F8F9FA]/30" />
            </div>
            <h3 className="font-inter text-xl font-medium text-[#F8F9FA] mb-2">No projects found</h3>
            <p className="font-inter text-[#F8F9FA]/60 mb-6">Try adjusting your search or filter criteria</p>
            <button className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] hover:from-[#5D9CEC]/90 hover:to-[#FBC02D]/90 text-white px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300">
              Create New Project
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}