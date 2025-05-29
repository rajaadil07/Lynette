export const SITE_CONFIG = {
  name: 'SagentaAI',
  title: 'AI Multi-Agent Communication Platform',
  description: 'Build and manage specialized AI agents for 24/7/365 engagement via calls, texts, and emails. Retain full control over your agents\' actions and communications with granular customization options.',
  url: 'http://localhost:3000',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://x.com/radil32',
    linkedin: 'https://www.linkedin.com/in/rajaadil/',
    email: 'raja@buildalytic.com'
  }
}

export const NAVIGATION = {
  legal: [
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy policy', href: '/privacy' },
    { name: 'Contact', href: '/contact' }
  ]
}

export const LEAD_STATUS = {
  NEW: 'New',
  CONTACTED: 'Contacted',
  QUALIFIED: 'Qualified',
  PROPOSAL: 'Proposal',
  NEGOTIATION: 'Negotiation',
  WON: 'Won',
  LOST: 'Lost'
} as const

export const LEAD_SOURCES = {
  WEBSITE: 'Website',
  LINKEDIN: 'LinkedIn',
  REFERRAL: 'Referral',
  CONFERENCE: 'Conference',
  EMAIL_CAMPAIGN: 'Email Campaign',
  PARTNER: 'Partner Referral',
  COLD_OUTREACH: 'Cold Outreach',
  INBOUND_CALL: 'Inbound Call',
  OTHER: 'Other'
} as const

export const COMMUNICATION_CHANNELS = {
  EMAIL: 'email',
  CALL: 'call',
  TEXT: 'text'
} as const

export const AGENT_TYPES = {
  INBOUND_CALLS: 'Inbound Calls',
  OUTBOUND_CALLS: 'Outbound Calls',
  EMAIL_SPECIALIST: 'Email Specialist',
  TEXT_SPECIALIST: 'Text Specialist',
  MULTI_CHANNEL: 'Multi-Channel'
} as const

export const AGENT_STATUS = {
  AVAILABLE: 'Available',
  BUSY: 'Busy',
  OFFLINE: 'Offline',
  MAINTENANCE: 'Maintenance'
} as const

export const AGENT_EXPERTISE = {
  SALES: 'Sales',
  SUPPORT: 'Support',
  SCHEDULING: 'Scheduling',
  FOLLOW_UP: 'Follow-up',
  LEAD_QUALIFICATION: 'Lead Qualification',
  CUSTOMER_SUCCESS: 'Customer Success'
} as const

export const TASK_PRIORITY = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
} as const

export const TASK_STATUS = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  FAILED: 'Failed',
  CANCELLED: 'Cancelled'
} as const

export const INTEGRATION_TYPES = {
  CRM: {
    SALESFORCE: 'Salesforce',
    HUBSPOT: 'HubSpot',
    ZOHO: 'Zoho',
    DYNAMICS: 'Microsoft Dynamics'
  },
  COMMUNICATION: {
    TWILIO: 'Twilio',
    SENDGRID: 'SendGrid',
    PLIVO: 'Plivo'
  },
  CALENDAR: {
    GOOGLE: 'Google Calendar',
    OUTLOOK: 'Outlook Calendar',
    CALENDLY: 'Calendly'
  }
} as const

export const COMPLIANCE_LEVELS = {
  STANDARD: 'Standard',
  HIPAA: 'HIPAA Compliant',
  PCI: 'PCI DSS Compliant',
  GDPR: 'GDPR Compliant',
  CCPA: 'CCPA Compliant'
} as const

export const ANALYTICS_METRICS = {
  RESPONSE_TIME: 'Response Time',
  COMPLETION_RATE: 'Completion Rate',
  SATISFACTION_SCORE: 'Satisfaction Score',
  CONVERSION_RATE: 'Conversion Rate',
  ENGAGEMENT_RATE: 'Engagement Rate',
  RESOLUTION_TIME: 'Resolution Time'
} as const

export const TIME_INTERVALS = {
  REAL_TIME: 'Real-time',
  HOURLY: 'Hourly',
  DAILY: 'Daily',
  WEEKLY: 'Weekly',
  MONTHLY: 'Monthly',
  QUARTERLY: 'Quarterly',
  YEARLY: 'Yearly'
} as const

export const USER_ROLES = {
  ADMIN: 'Admin',
  MANAGER: 'Manager',
  AGENT_SUPERVISOR: 'Agent Supervisor',
  ANALYST: 'Analyst',
  VIEWER: 'Viewer'
} as const

export const NOTIFICATION_TYPES = {
  TASK_ASSIGNED: 'Task Assigned',
  TASK_COMPLETED: 'Task Completed',
  LEAD_UPDATED: 'Lead Updated',
  AGENT_STATUS_CHANGE: 'Agent Status Change',
  SYSTEM_ALERT: 'System Alert',
  COMPLIANCE_ALERT: 'Compliance Alert'
} as const 