import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function MessageLogo() {
  return (
    <Link href="/" className="relative group cursor-pointer">
      <div className="relative">
        <ChatBubbleOvalLeftIcon 
          className="w-8 h-8 text-gray-800 transition-all duration-300 group-hover:text-gray-600 group-hover:scale-110" 
        />
        {/* Blue accent lines inside the chat bubble */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-0.5 pointer-events-none">
          <div className="w-3 h-0.5 bg-gradient-to-r from-[#8EBEFE] to-[#5087FF] rounded-full opacity-80 transition-all duration-300 group-hover:opacity-100"></div>
          <div className="w-2 h-0.5 bg-gradient-to-r from-[#73A5FF] to-[#6095FF] rounded-full opacity-70 transition-all duration-300 group-hover:opacity-90"></div>
        </div>
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8EBEFE]/20 to-[#5087FF]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl scale-150"></div>
      </div>
    </Link>
  );
} 