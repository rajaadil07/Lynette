import Link from 'next/link'
import Image from 'next/image'

export default function LogoOnly() {
  return (
    <Link href="/" className="relative group cursor-pointer">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="GhostSync"
          width={64}
          height={64}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
} 