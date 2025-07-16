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
  FileText,
  CheckCircle,
  AlertCircle,
  XCircle,
  Play,
  Edit,
  Eye,
  Download,
  MessageSquare,
  Upload,
  Send,
  UserCheck,
  UserX,
  FileSignature,
  Shield,
  Lock,
  ExternalLink,
  Copy,
  Archive,
  Trash2,
  Star,
  TrendingUp,
  Activity,
  Award,
  MapPin,
  Building,
  PhoneCall,
  Mail as MailIcon,
  Globe,
  File,
  Folder,
  Image,
  Video,
  Music,
  Archive as ArchiveIcon,
  Share2,
  Link,
  BookOpen,
  PenTool,
  Type,
  Scissors,
  Palette,
  Target,
  Heart,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Smartphone,
  Monitor,
  Palette as PaletteIcon,
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

const deliverables = [
  {
    id: 1,
    title: 'Chapter 1 - The Beginning',
    project: 'The Silent Echo',
    client: 'Sarah Johnson',
    type: 'document',
    status: 'approved',
    version: 'v2.1',
    fileSize: '2.4 MB',
    uploadDate: '2024-01-15',
    lastModified: '2 hours ago',
    wordCount: '3,200',
    targetWordCount: '3,500',
    feedback: 'Great work on the opening! Minor edits needed.',
    tags: ['Chapter', 'First Draft', 'Approved'],
    fileType: 'docx',
    downloadCount: 3,
    description: 'Opening chapter establishing the protagonist\'s journey and setting the emotional tone for the memoir.',
    qualityScore: 92,
    reviewTime: '2 days',
    clientSatisfaction: 95,
    revisionHistory: [
      { version: 'v1.0', date: '2024-01-10', changes: 'Initial draft' },
      { version: 'v1.5', date: '2024-01-12', changes: 'Client feedback incorporated' },
      { version: 'v2.1', date: '2024-01-15', changes: 'Final revisions' }
    ],
    collaborators: ['Lead Writer', 'Editor', 'Client'],
    category: 'Memoir',
    estimatedCompletion: '100%',
    filePath: '/deliverables/chapter1_v2.1.docx'
  },
  {
    id: 2,
    title: 'Chapter 2 - The Journey Begins',
    project: 'The Silent Echo',
    client: 'Sarah Johnson',
    type: 'document',
    status: 'pending',
    version: 'v1.0',
    fileSize: '1.8 MB',
    uploadDate: '2024-01-18',
    lastModified: '1 day ago',
    wordCount: '2,800',
    targetWordCount: '3,500',
    feedback: 'Waiting for client review',
    tags: ['Chapter', 'First Draft', 'Pending Review'],
    fileType: 'docx',
    downloadCount: 1,
    description: 'Second chapter exploring the protagonist\'s early challenges and character development.',
    qualityScore: 88,
    reviewTime: 'In Progress',
    clientSatisfaction: 90,
    revisionHistory: [
      { version: 'v1.0', date: '2024-01-18', changes: 'Initial draft submitted' }
    ],
    collaborators: ['Lead Writer', 'Editor'],
    category: 'Memoir',
    estimatedCompletion: '75%',
    filePath: '/deliverables/chapter2_v1.0.docx'
  },
  {
    id: 3,
    title: 'Book Outline - Complete',
    project: 'Corporate Leadership Guide',
    client: 'Michael Chen',
    type: 'document',
    status: 'approved',
    version: 'v3.0',
    fileSize: '1.2 MB',
    uploadDate: '2024-01-10',
    lastModified: '3 days ago',
    wordCount: '5,600',
    targetWordCount: '6,000',
    feedback: 'Excellent structure and flow',
    tags: ['Outline', 'Approved', 'Final'],
    fileType: 'pdf',
    downloadCount: 5,
    description: 'Comprehensive book outline with chapter breakdowns and key leadership principles.',
    qualityScore: 95,
    reviewTime: '1 week',
    clientSatisfaction: 98,
    revisionHistory: [
      { version: 'v1.0', date: '2024-01-05', changes: 'Initial outline' },
      { version: 'v2.0', date: '2024-01-08', changes: 'Client feedback incorporated' },
      { version: 'v3.0', date: '2024-01-10', changes: 'Final approval' }
    ],
    collaborators: ['Lead Writer', 'Business Analyst', 'Client'],
    category: 'Business & Leadership',
    estimatedCompletion: '100%',
    filePath: '/deliverables/outline_v3.0.pdf'
  },
  {
    id: 4,
    title: 'Chapter 3 - Leadership Principles',
    project: 'Corporate Leadership Guide',
    client: 'Michael Chen',
    type: 'document',
    status: 'revision',
    version: 'v1.2',
    fileSize: '3.1 MB',
    uploadDate: '2024-01-20',
    lastModified: '5 hours ago',
    wordCount: '4,200',
    targetWordCount: '4,000',
    feedback: 'Need more examples and case studies',
    tags: ['Chapter', 'Revision', 'In Progress'],
    fileType: 'docx',
    downloadCount: 2,
    description: 'Chapter focusing on core leadership principles with practical applications.',
    qualityScore: 85,
    reviewTime: '3 days',
    clientSatisfaction: 87,
    revisionHistory: [
      { version: 'v1.0', date: '2024-01-18', changes: 'Initial draft' },
      { version: 'v1.1', date: '2024-01-19', changes: 'Minor revisions' },
      { version: 'v1.2', date: '2024-01-20', changes: 'Client feedback addressed' }
    ],
    collaborators: ['Lead Writer', 'Business Analyst'],
    category: 'Business & Leadership',
    estimatedCompletion: '85%',
    filePath: '/deliverables/chapter3_v1.2.docx'
  },
  {
    id: 5,
    title: 'Marketing Strategy Overview',
    project: 'The Art of Digital Marketing',
    client: 'Emma Rodriguez',
    type: 'presentation',
    status: 'completed',
    version: 'v1.0',
    fileSize: '8.5 MB',
    uploadDate: '2024-01-05',
    lastModified: '1 week ago',
    wordCount: '2,100',
    targetWordCount: '2,000',
    feedback: 'Perfect for our needs',
    tags: ['Presentation', 'Completed', 'Final'],
    fileType: 'pptx',
    downloadCount: 8,
    description: 'Comprehensive marketing strategy presentation with visual elements and case studies.',
    qualityScore: 98,
    reviewTime: '2 days',
    clientSatisfaction: 100,
    revisionHistory: [
      { version: 'v1.0', date: '2024-01-05', changes: 'Final version delivered' }
    ],
    collaborators: ['Lead Writer', 'Marketing Expert', 'Client'],
    category: 'Marketing & Education',
    estimatedCompletion: '100%',
    filePath: '/deliverables/marketing_strategy_v1.0.pptx'
  },
  {
    id: 6,
    title: 'Fitness Plan - Week 1',
    project: 'Fitness Transformation Journey',
    client: 'David Thompson',
    type: 'document',
    status: 'draft',
    version: 'v0.5',
    fileSize: '1.5 MB',
    uploadDate: '2024-01-22',
    lastModified: '4 hours ago',
    wordCount: '1,800',
    targetWordCount: '2,500',
    feedback: 'Still working on content',
    tags: ['Plan', 'Draft', 'In Progress'],
    fileType: 'docx',
    downloadCount: 0,
    description: 'First week fitness plan with workout routines and nutrition guidelines.',
    qualityScore: 75,
    reviewTime: 'Not Started',
    clientSatisfaction: 80,
    revisionHistory: [
      { version: 'v0.5', date: '2024-01-22', changes: 'Initial draft' }
    ],
    collaborators: ['Lead Writer', 'Fitness Expert'],
    category: 'Health & Wellness',
    estimatedCompletion: '45%',
    filePath: '/deliverables/fitness_plan_v0.5.docx'
  },
  {
    id: 7,
    title: 'Cover Design Concepts',
    project: 'Mindful Parenting in the Digital Age',
    client: 'Robert Kim',
    type: 'image',
    status: 'pending',
    version: 'v1.0',
    fileSize: '12.3 MB',
    uploadDate: '2024-01-19',
    lastModified: '2 days ago',
    wordCount: 'N/A',
    targetWordCount: 'N/A',
    feedback: 'Three design options for review',
    tags: ['Design', 'Cover', 'Pending'],
    fileType: 'jpg',
    downloadCount: 4,
    description: 'Three cover design concepts for the parenting book with modern, family-friendly aesthetics.',
    qualityScore: 90,
    reviewTime: '1 day',
    clientSatisfaction: 92,
    revisionHistory: [
      { version: 'v1.0', date: '2024-01-19', changes: 'Initial designs submitted' }
    ],
    collaborators: ['Designer', 'Lead Writer', 'Client'],
    category: 'Parenting & Family',
    estimatedCompletion: '90%',
    filePath: '/deliverables/cover_designs_v1.0.jpg'
  },
  {
    id: 8,
    title: 'Author Bio - Final',
    project: 'Tech Startup Success Stories',
    client: 'Lisa Wang',
    type: 'document',
    status: 'completed',
    version: 'v2.0',
    fileSize: '0.8 MB',
    uploadDate: '2024-01-12',
    lastModified: '1 week ago',
    wordCount: '450',
    targetWordCount: '500',
    feedback: 'Approved for publication',
    tags: ['Bio', 'Completed', 'Final'],
    fileType: 'docx',
    downloadCount: 6,
    description: 'Final author biography for the tech startup book with professional credentials.',
    qualityScore: 96,
    reviewTime: '1 day',
    clientSatisfaction: 98,
    revisionHistory: [
      { version: 'v1.0', date: '2024-01-10', changes: 'Initial draft' },
      { version: 'v2.0', date: '2024-01-12', changes: 'Final approval' }
    ],
    collaborators: ['Lead Writer', 'Tech Analyst', 'Client'],
    category: 'Technology & Business',
    estimatedCompletion: '100%',
    filePath: '/deliverables/author_bio_v2.0.docx'
  }
]

const statusColors = {
  approved: 'from-green-500 to-green-600',
  pending: 'from-yellow-500 to-yellow-600',
  revision: 'from-orange-500 to-orange-600',
  completed: 'from-gray-500 to-gray-600',
  draft: 'from-blue-500 to-blue-600'
}

const statusBgColors = {
  approved: 'bg-green-500/10',
  pending: 'bg-yellow-500/10',
  revision: 'bg-orange-500/10',
  completed: 'bg-gray-500/10',
  draft: 'bg-blue-500/10'
}

const fileTypeIcons = {
  docx: FileText,
  pdf: FileText,
  pptx: FileText,
  jpg: Image,
  png: Image,
  mp4: Video,
  mp3: Music
}

const fileTypeColors = {
  docx: 'from-blue-500 to-blue-600',
  pdf: 'from-red-500 to-red-600',
  pptx: 'from-orange-500 to-orange-600',
  jpg: 'from-green-500 to-green-600',
  png: 'from-green-500 to-green-600',
  mp4: 'from-purple-500 to-purple-600',
  mp3: 'from-pink-500 to-pink-600'
}

const deliverableTypes = {
  'document': { icon: FileText, color: 'from-blue-500 to-blue-600' },
  'presentation': { icon: FileText, color: 'from-orange-500 to-orange-600' },
  'image': { icon: Image, color: 'from-green-500 to-green-600' },
  'video': { icon: Video, color: 'from-purple-500 to-purple-600' },
  'audio': { icon: Music, color: 'from-pink-500 to-pink-600' }
}

export default function DeliverablesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredDeliverables = deliverables.filter(deliverable => {
    const matchesSearch = deliverable.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deliverable.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deliverable.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || deliverable.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    const statusIcons = {
      approved: CheckCircle,
      pending: AlertCircle,
      revision: Edit,
      completed: CheckCircle,
      draft: FileText
    }
    const IconComponent = statusIcons[status as keyof typeof statusIcons]
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null
  }

  const getFileTypeIcon = (fileType: string) => {
    const IconComponent = fileTypeIcons[fileType as keyof typeof fileTypeIcons]
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null
  }

  const getFileTypeColor = (fileType: string) => {
    return fileTypeColors[fileType as keyof typeof fileTypeColors] || 'from-gray-500 to-gray-600'
  }

  const getDeliverableTypeIcon = (type: string) => {
    const typeInfo = deliverableTypes[type as keyof typeof deliverableTypes]
    if (typeInfo) {
      const IconComponent = typeInfo.icon
      return <IconComponent className="w-5 h-5" />
    }
    return <FileText className="w-5 h-5" />
  }

  const getDeliverableTypeColor = (type: string) => {
    const typeInfo = deliverableTypes[type as keyof typeof deliverableTypes]
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
              <h1 className="font-inter text-4xl lg:text-5xl font-light text-[#F8F9FA] leading-tight">Deliverables</h1>
              <p className="text-[#F8F9FA]/70 mt-3 font-inter text-lg">Manage your project deliverables and file versions</p>
            </div>
            <button className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] hover:from-[#5D9CEC]/90 hover:to-[#FBC02D]/90 text-white px-8 py-4 rounded-xl font-inter font-medium flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Upload className="w-5 h-5" />
              <span>Upload File</span>
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
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">3</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Approved</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Ready for delivery</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">2</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Pending Review</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Awaiting feedback</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">8</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Total Files</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">All deliverables</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Download className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">29</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Downloads</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">This month</p>
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
                  placeholder="Search deliverables..."
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
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="revision">Revision</option>
                <option value="completed">Completed</option>
                <option value="draft">Draft</option>
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

        {/* Deliverables Grid */}
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
          {filteredDeliverables.map((deliverable, index) => (
            <motion.div
              key={deliverable.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${statusBgColors[deliverable.status as keyof typeof statusBgColors]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getDeliverableTypeColor(deliverable.type)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {getDeliverableTypeIcon(deliverable.type)}
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-[#F8F9FA] group-hover:text-[#FBC02D] transition-colors duration-300">
                        {deliverable.title}
                      </h3>
                      <p className="font-inter text-sm text-[#F8F9FA]/60">{deliverable.project}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium border ${
                      deliverable.status === 'approved' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      deliverable.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      deliverable.status === 'revision' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                      deliverable.status === 'completed' ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' :
                      'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}>
                      {deliverable.status}
                    </span>
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-sm text-[#F8F9FA]/70 mb-4 leading-relaxed">
                  {deliverable.description}
                </p>

                {/* File Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getFileTypeColor(deliverable.fileType)} flex items-center justify-center`}>
                    {getFileTypeIcon(deliverable.fileType)}
                  </div>
                  <div className="flex-1">
                    <p className="font-inter text-sm text-[#F8F9FA]">{deliverable.fileSize}</p>
                    <p className="font-inter text-xs text-[#F8F9FA]/60">v{deliverable.version}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="font-inter text-xs text-[#F8F9FA]/50 mb-1">Word Count</p>
                    <p className="font-inter text-sm font-semibold text-[#F8F9FA]">{deliverable.wordCount}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-inter text-xs text-[#F8F9FA]/50 mb-1">Downloads</p>
                    <p className="font-inter text-sm font-semibold text-[#F8F9FA]">{deliverable.downloadCount}</p>
                  </div>
                </div>

                {/* Quality Score */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-inter text-sm font-medium text-[#F8F9FA]">Quality Score</span>
                    <span className="font-inter text-sm text-[#F8F9FA]/60">{deliverable.qualityScore}%</span>
                  </div>
                  <div className="w-full bg-[#F8F9FA]/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${deliverable.qualityScore}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${statusColors[deliverable.status as keyof typeof statusColors]} flex items-center justify-center`}>
                      {getStatusIcon(deliverable.status)}
                    </div>
                    <span className="font-inter text-sm font-medium text-[#F8F9FA] capitalize">{deliverable.status}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {deliverable.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-[#F8F9FA]/5 text-[#F8F9FA]/60 rounded-lg text-xs font-inter">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Last Modified */}
                <div className="mt-4 pt-4 border-t border-[#F8F9FA]/10">
                  <p className="font-inter text-xs text-[#F8F9FA]/50">
                    Last modified: {deliverable.lastModified}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredDeliverables.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-[#F8F9FA]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-[#F8F9FA]/30" />
            </div>
            <h3 className="font-inter text-xl font-medium text-[#F8F9FA] mb-2">No deliverables found</h3>
            <p className="font-inter text-[#F8F9FA]/60 mb-6">Try adjusting your search or filter criteria</p>
            <button className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] hover:from-[#5D9CEC]/90 hover:to-[#FBC02D]/90 text-white px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300">
              Upload New File
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}