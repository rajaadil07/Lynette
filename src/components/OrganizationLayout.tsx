import { ReactNode } from 'react'
import { OrganizationHeader } from './headers'

interface OrganizationLayoutProps {
  children: ReactNode
  user: {
    id: string
    email?: string
    user_metadata?: {
      full_name?: string
      avatar_url?: string
    }
  }
  organization: {
    id: string
    name: string
    description?: string
  }
  userRole: string
  currentPath: string
}

export default function OrganizationLayout({ 
  children, 
  user, 
  organization, 
  userRole, 
  currentPath 
}: OrganizationLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <OrganizationHeader 
        user={user} 
        organization={organization}
        userRole={userRole}
        currentPath={currentPath}
      />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
} 