'use client'

import { HiOutlinePencilAlt } from 'react-icons/hi'
import { TiMessages } from 'react-icons/ti'
import { useState } from 'react'

interface SidebarProps {
  onMessagesClick?: () => void
  onWriteClick?: () => void
}

export default function Sidebar({ 
  onMessagesClick,
  onWriteClick
}: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };
  
  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  
  return (
    <aside 
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-40 flex flex-col items-center py-4 transition-all duration-300 ease-in-out ${isExpanded ? 'w-48' : 'w-16'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Icons */}
      <div className="flex flex-col space-y-3 w-full">
        {/* Messages Icon */}
        <button 
          onClick={onMessagesClick}
          className="relative w-full h-12 flex items-center px-4 hover:bg-gray-50 transition-all duration-300"
          title="Chats"
        >
          <TiMessages className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors duration-200 flex-shrink-0" />
          <span className={`ml-3 text-gray-700 whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Chats</span>
        </button>

        {/* Write Icon */}
        <button 
          onClick={onWriteClick}
          className="relative w-full h-12 flex items-center px-4 hover:bg-gray-50 transition-all duration-300"
          title="New Chat"
        >
          <HiOutlinePencilAlt className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors duration-200 flex-shrink-0" />
          <span className={`ml-3 text-gray-700 whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>New Chat</span>
        </button>
      </div>
    </aside>
  )
} 