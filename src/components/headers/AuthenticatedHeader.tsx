'use client'

interface AuthenticatedHeaderProps {
  userInitials: string
  userName?: string
  onAvatarClick?: () => void
}

export default function AuthenticatedHeader({ 
  userInitials, 
  userName,
  onAvatarClick
}: AuthenticatedHeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex justify-end items-center h-20">
          {/* Authenticated User Avatar with Modern Gray Outline */}
          <div className="flex items-center">
            <div className="group relative cursor-pointer" onClick={onAvatarClick}>
              {/* Modern gray outline container with depth */}
              <div className="relative p-0.5 rounded-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Inner shadow ring for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300/50 to-transparent"></div>
                
                {/* Avatar container with premium styling */}
                <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-inner border border-gray-100">
                  {/* Inner highlight for premium feel */}
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/80 to-transparent pointer-events-none"></div>
                  <span className="relative text-sm font-medium text-gray-800">{userInitials}</span>
                </div>
                
                {/* Subtle gray glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400/20 via-gray-300/15 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg scale-125"></div>
              </div>
              
              {/* Optional user name tooltip */}
              {userName && (
                <div className="absolute right-0 top-full mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
                  {userName}
                  <div className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 