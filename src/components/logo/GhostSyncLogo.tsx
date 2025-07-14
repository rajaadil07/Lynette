import Link from 'next/link'

// Chain Link Icon Component
const ChainLinkIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 32 32" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Chain link design */}
    <path
      d="M12 8L8 12C6.34315 13.6569 6.34315 16.3431 8 18L12 22"
      stroke="#FBC02D"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 8L24 12C25.6569 13.6569 25.6569 16.3431 24 18L20 22"
      stroke="#FBC02D"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 13L19 19"
      stroke="#FBC02D"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface GhostSyncLogoProps {
  showTagline?: boolean;
  className?: string;
  linkClassName?: string;
}

export default function GhostSyncLogo({ 
  showTagline = true, 
  className = "",
  linkClassName = "" 
}: GhostSyncLogoProps) {
  return (
    <Link href="/" className={`relative group cursor-pointer ${linkClassName}`}>
      <div className={`relative flex items-center space-x-3 ${className}`}>
        {/* Chain Link Icon */}
        <div className="relative">
          <ChainLinkIcon className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
        </div>
        
        {/* Logo Text and Tagline */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-brand-light group-hover:text-brand-yellow transition-colors duration-300 font-inter">
            Ghost Sync
          </span>
          {showTagline && (
            <span className="text-sm text-brand-gray font-lora italic font-medium -mt-1">
              Where Ghostwriters Connect & Deliver Like Pros
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

// Compact version for headers
export function GhostSyncLogoCompact() {
  return (
    <GhostSyncLogo 
      showTagline={false}
      className="items-center"
      linkClassName="flex items-center"
    />
  )
}

// Full version for landing pages
export function GhostSyncLogoFull() {
  return (
    <GhostSyncLogo 
      showTagline={true}
      className="items-start"
      linkClassName="inline-block"
    />
  )
} 