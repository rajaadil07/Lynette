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
  FileText,
  CheckCircle,
  AlertCircle,
  XCircle,
  Play,
  Edit,
  Eye,
  Download,
  MessageSquare,
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
  Heart,
  Shield as ShieldIcon,
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

const contracts = [
  {
    id: 1,
    title: 'The Silent Echo - Memoir Contract',
    client: 'Sarah Johnson',
    type: 'Memoir',
    status: 'signed',
    value: '$12,000',
    startDate: '2024-01-01',
    endDate: '2024-03-15',
    lastActivity: '2 days ago',
    priority: 'high',
    signatures: {
      client: true,
      writer: true
    },
    milestones: [
      { name: 'Outline Approval', amount: '$3,000', status: 'completed' },
      { name: 'First Draft', amount: '$4,000', status: 'completed' },
      { name: 'Final Manuscript', amount: '$5,000', status: 'pending' }
    ],
    tags: ['Memoir', 'High Value', 'Signed'],
    description: 'Comprehensive memoir writing contract with detailed milestone payments and delivery schedule.',
    contractType: 'Fixed Price',
    paymentTerms: 'Milestone-based',
    legalCompliance: 'Verified',
    riskLevel: 'Low',
    estimatedCompletion: '85%',
    clientSatisfaction: 95,
    contractHistory: [
      { action: 'Contract Created', date: '2024-01-01', user: 'Writer' },
      { action: 'Client Signed', date: '2024-01-02', user: 'Sarah Johnson' },
      { action: 'Writer Signed', date: '2024-01-03', user: 'Writer' },
      { action: 'First Milestone Completed', date: '2024-01-15', user: 'Writer' }
    ]
  },
  {
    id: 2,
    title: 'Corporate Leadership Guide - Business Book',
    client: 'Michael Chen',
    type: 'Business Book',
    status: 'pending',
    value: '$18,000',
    startDate: '2024-01-10',
    endDate: '2024-02-28',
    lastActivity: '1 day ago',
    priority: 'medium',
    signatures: {
      client: true,
      writer: false
    },
    milestones: [
      { name: 'Project Setup', amount: '$4,500', status: 'completed' },
      { name: 'First Draft', amount: '$6,000', status: 'in-progress' },
      { name: 'Final Manuscript', amount: '$7,500', status: 'pending' }
    ],
    tags: ['Business', 'Leadership', 'Pending Signature'],
    description: 'Business leadership book contract with corporate client requiring executive approval.',
    contractType: 'Fixed Price',
    paymentTerms: 'Milestone-based',
    legalCompliance: 'Pending Review',
    riskLevel: 'Medium',
    estimatedCompletion: '65%',
    clientSatisfaction: 92,
    contractHistory: [
      { action: 'Contract Created', date: '2024-01-10', user: 'Writer' },
      { action: 'Client Signed', date: '2024-01-12', user: 'Michael Chen' },
      { action: 'Legal Review Requested', date: '2024-01-15', user: 'Legal Team' }
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing Guide - Educational',
    client: 'Emma Rodriguez',
    type: 'Educational',
    status: 'completed',
    value: '$15,000',
    startDate: '2023-11-01',
    endDate: '2024-01-15',
    lastActivity: '1 week ago',
    priority: 'low',
    signatures: {
      client: true,
      writer: true
    },
    milestones: [
      { name: 'Outline Approval', amount: '$3,750', status: 'completed' },
      { name: 'First Draft', amount: '$5,250', status: 'completed' },
      { name: 'Final Manuscript', amount: '$6,000', status: 'completed' }
    ],
    tags: ['Marketing', 'Educational', 'Completed'],
    description: 'Educational content contract for digital marketing professionals and industry experts.',
    contractType: 'Fixed Price',
    paymentTerms: 'Milestone-based',
    legalCompliance: 'Verified',
    riskLevel: 'Low',
    estimatedCompletion: '100%',
    clientSatisfaction: 98,
    contractHistory: [
      { action: 'Contract Created', date: '2023-11-01', user: 'Writer' },
      { action: 'Client Signed', date: '2023-11-02', user: 'Emma Rodriguez' },
      { action: 'Writer Signed', date: '2023-11-03', user: 'Writer' },
      { action: 'Project Completed', date: '2024-01-15', user: 'Writer' }
    ]
  },
  {
    id: 4,
    title: 'Fitness Transformation - Self-Help',
    client: 'David Thompson',
    type: 'Self-Help',
    status: 'draft',
    value: '$10,000',
    startDate: '2024-01-20',
    endDate: '2024-03-20',
    lastActivity: '3 days ago',
    priority: 'medium',
    signatures: {
      client: false,
      writer: false
    },
    milestones: [
      { name: 'Project Setup', amount: '$2,500', status: 'pending' },
      { name: 'First Draft', amount: '$3,500', status: 'pending' },
      { name: 'Final Manuscript', amount: '$4,000', status: 'pending' }
    ],
    tags: ['Fitness', 'Self-Help', 'Draft'],
    description: 'Self-help fitness book contract with motivational content and transformation stories.',
    contractType: 'Fixed Price',
    paymentTerms: 'Milestone-based',
    legalCompliance: 'Draft',
    riskLevel: 'Medium',
    estimatedCompletion: '15%',
    clientSatisfaction: 90,
    contractHistory: [
      { action: 'Contract Created', date: '2024-01-20', user: 'Writer' },
      { action: 'Draft Sent to Client', date: '2024-01-22', user: 'Writer' }
    ]
  },
  {
    id: 5,
    title: 'Tech Startup Stories - Business Book',
    client: 'Lisa Wang',
    type: 'Business Book',
    status: 'expired',
    value: '$20,000',
    startDate: '2023-10-01',
    endDate: '2024-01-31',
    lastActivity: '2 weeks ago',
    priority: 'low',
    signatures: {
      client: true,
      writer: true
    },
    milestones: [
      { name: 'Project Setup', amount: '$5,000', status: 'completed' },
      { name: 'First Draft', amount: '$7,000', status: 'completed' },
      { name: 'Final Manuscript', amount: '$8,000', status: 'pending' }
    ],
    tags: ['Technology', 'Startup', 'Expired'],
    description: 'Business book contract for tech startup success stories and entrepreneurial insights.',
    contractType: 'Fixed Price',
    paymentTerms: 'Milestone-based',
    legalCompliance: 'Verified',
    riskLevel: 'High',
    estimatedCompletion: '75%',
    clientSatisfaction: 87,
    contractHistory: [
      { action: 'Contract Created', date: '2023-10-01', user: 'Writer' },
      { action: 'Client Signed', date: '2023-10-02', user: 'Lisa Wang' },
      { action: 'Writer Signed', date: '2023-10-03', user: 'Writer' },
      { action: 'Contract Expired', date: '2024-01-31', user: 'System' }
    ]
  },
  {
    id: 6,
    title: 'Mindful Parenting - Parenting Guide',
    client: 'Robert Kim',
    type: 'Parenting',
    status: 'signed',
    value: '$14,000',
    startDate: '2024-01-15',
    endDate: '2024-03-10',
    lastActivity: '5 hours ago',
    priority: 'high',
    signatures: {
      client: true,
      writer: true
    },
    milestones: [
      { name: 'Outline Approval', amount: '$3,500', status: 'completed' },
      { name: 'First Draft', amount: '$4,900', status: 'in-progress' },
      { name: 'Final Manuscript', amount: '$5,600', status: 'pending' }
    ],
    tags: ['Parenting', 'Digital Age', 'Active'],
    description: 'Parenting guide contract focusing on modern parenting challenges in the digital age.',
    contractType: 'Fixed Price',
    paymentTerms: 'Milestone-based',
    legalCompliance: 'Verified',
    riskLevel: 'Low',
    estimatedCompletion: '75%',
    clientSatisfaction: 93,
    contractHistory: [
      { action: 'Contract Created', date: '2024-01-15', user: 'Writer' },
      { action: 'Client Signed', date: '2024-01-16', user: 'Robert Kim' },
      { action: 'Writer Signed', date: '2024-01-17', user: 'Writer' },
      { action: 'First Milestone Completed', date: '2024-01-25', user: 'Writer' }
    ]
  }
]

const statusColors = {
  signed: 'from-green-500 to-green-600',
  pending: 'from-yellow-500 to-yellow-600',
  completed: 'from-gray-500 to-gray-600',
  draft: 'from-blue-500 to-blue-600',
  expired: 'from-red-500 to-red-600'
}

const statusBgColors = {
  signed: 'bg-green-500/10',
  pending: 'bg-yellow-500/10',
  completed: 'bg-gray-500/10',
  draft: 'bg-blue-500/10',
  expired: 'bg-red-500/10'
}

const priorityColors = {
  high: 'from-red-500 to-red-600',
  medium: 'from-yellow-500 to-yellow-600',
  low: 'from-green-500 to-green-600'
}

const statusIcons = {
  signed: CheckCircle,
  pending: AlertCircle,
  completed: CheckCircle,
  draft: FileText,
  expired: XCircle
}

const contractTypes = {
  'Memoir': { icon: BookOpen, color: 'from-purple-500 to-purple-600' },
  'Business Book': { icon: BarChart3, color: 'from-blue-500 to-blue-600' },
  'Educational': { icon: BookMarked, color: 'from-green-500 to-green-600' },
  'Self-Help': { icon: Heart, color: 'from-pink-500 to-pink-600' },
  'Parenting': { icon: Users, color: 'from-indigo-500 to-indigo-600' }
}

export default function ContractsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || contract.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    const IconComponent = statusIcons[status as keyof typeof statusIcons]
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null
  }

  const getSignatureStatus = (signatures: { client: boolean; writer: boolean }) => {
    if (signatures.client && signatures.writer) {
      return { status: 'complete', text: 'Fully Signed', color: 'from-green-500 to-green-600' }
    } else if (signatures.client || signatures.writer) {
      return { status: 'partial', text: 'Partially Signed', color: 'from-yellow-500 to-yellow-600' }
    } else {
      return { status: 'pending', text: 'Pending Signatures', color: 'from-red-500 to-red-600' }
    }
  }

  const getContractTypeIcon = (type: string) => {
    const typeInfo = contractTypes[type as keyof typeof contractTypes]
    if (typeInfo) {
      const IconComponent = typeInfo.icon
      return <IconComponent className="w-5 h-5" />
    }
    return <FileText className="w-5 h-5" />
  }

  const getContractTypeColor = (type: string) => {
    const typeInfo = contractTypes[type as keyof typeof contractTypes]
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
              <h1 className="font-inter text-4xl lg:text-5xl font-light text-[#F8F9FA] leading-tight">Contracts</h1>
              <p className="text-[#F8F9FA]/70 mt-3 font-inter text-lg">Manage your legal agreements and payment terms</p>
            </div>
            <button className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] hover:from-[#5D9CEC]/90 hover:to-[#FBC02D]/90 text-white px-8 py-4 rounded-xl font-inter font-medium flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Plus className="w-5 h-5" />
              <span>New Contract</span>
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
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Signed Contracts</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Legally binding</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">1</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Pending Review</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Awaiting signatures</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">$89K</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Total Value</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">All contracts</p>
          </div>

          <div className="bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-inter text-2xl font-bold text-[#F8F9FA]">5</span>
            </div>
            <p className="font-inter text-sm font-medium text-[#F8F9FA]/70 mb-1">Compliant</p>
            <p className="font-inter text-xs text-[#F8F9FA]/50">Legal verified</p>
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
                  placeholder="Search contracts..."
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
                <option value="signed">Signed</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="draft">Draft</option>
                <option value="expired">Expired</option>
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

        {/* Contracts Grid */}
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
          {filteredContracts.map((contract, index) => {
            const signatureStatus = getSignatureStatus(contract.signatures)
            
            return (
              <motion.div
                key={contract.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative bg-[#1B1B1F]/50 backdrop-blur-xl rounded-2xl border border-[#F8F9FA]/10 hover:border-[#F8F9FA]/20 transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${statusBgColors[contract.status as keyof typeof statusBgColors]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getContractTypeColor(contract.type)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {getContractTypeIcon(contract.type)}
                      </div>
                      <div>
                        <h3 className="font-inter font-semibold text-[#F8F9FA] group-hover:text-[#FBC02D] transition-colors duration-300">
                          {contract.title}
                        </h3>
                        <p className="font-inter text-sm text-[#F8F9FA]/60">{contract.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium border ${
                        contract.priority === 'high' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                        contract.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        'bg-green-500/20 text-green-400 border-green-500/30'
                      }`}>
                        {contract.priority}
                      </span>
                      <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-inter text-sm text-[#F8F9FA]/70 mb-4 leading-relaxed">
                    {contract.description}
                  </p>

                  {/* Contract Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className="font-inter text-xs text-[#F8F9FA]/50 mb-1">Value</p>
                      <p className="font-inter text-sm font-semibold text-[#F8F9FA]">{contract.value}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-inter text-xs text-[#F8F9FA]/50 mb-1">Type</p>
                      <p className="font-inter text-sm font-semibold text-[#F8F9FA]">{contract.contractType}</p>
                    </div>
                  </div>

                  {/* Signature Status */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-inter text-sm font-medium text-[#F8F9FA]">Signatures</span>
                      <span className="font-inter text-sm text-[#F8F9FA]/60">{signatureStatus.text}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${signatureStatus.color} flex items-center justify-center`}>
                        <FileSignature className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${contract.signatures.client ? 'bg-green-500' : 'bg-gray-400'}`} />
                        <span className="font-inter text-xs text-[#F8F9FA]/60">Client</span>
                        <div className={`w-2 h-2 rounded-full ${contract.signatures.writer ? 'bg-green-500' : 'bg-gray-400'}`} />
                        <span className="font-inter text-xs text-[#F8F9FA]/60">Writer</span>
                      </div>
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="mb-4">
                    <p className="font-inter text-sm font-medium text-[#F8F9FA] mb-2">Milestones</p>
                    <div className="space-y-2">
                      {contract.milestones.map((milestone, milestoneIndex) => (
                        <div key={milestoneIndex} className="flex items-center justify-between">
                          <span className="font-inter text-xs text-[#F8F9FA]/70">{milestone.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="font-inter text-xs text-[#F8F9FA]/60">{milestone.amount}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-inter ${
                              milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                              milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {milestone.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${statusColors[contract.status as keyof typeof statusColors]} flex items-center justify-center`}>
                        {getStatusIcon(contract.status)}
                      </div>
                      <span className="font-inter text-sm font-medium text-[#F8F9FA] capitalize">{contract.status}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-[#F8F9FA]/50 hover:text-[#F8F9FA] rounded-lg hover:bg-[#F8F9FA]/5 transition-all duration-300">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {contract.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-[#F8F9FA]/5 text-[#F8F9FA]/60 rounded-lg text-xs font-inter">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Last Activity */}
                  <div className="mt-4 pt-4 border-t border-[#F8F9FA]/10">
                    <p className="font-inter text-xs text-[#F8F9FA]/50">
                      Last activity: {contract.lastActivity}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Empty State */}
        {filteredContracts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-[#F8F9FA]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-[#F8F9FA]/30" />
            </div>
            <h3 className="font-inter text-xl font-medium text-[#F8F9FA] mb-2">No contracts found</h3>
            <p className="font-inter text-[#F8F9FA]/60 mb-6">Try adjusting your search or filter criteria</p>
            <button className="bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] hover:from-[#5D9CEC]/90 hover:to-[#FBC02D]/90 text-white px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300">
              Create New Contract
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}