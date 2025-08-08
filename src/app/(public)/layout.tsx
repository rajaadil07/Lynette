import type { Metadata } from "next";
import PublicHeader from "@/components/headers/PublicHeader";

export const metadata: Metadata = {
  title: "GhostSync",
  description: "Connect your ghostwriting projects with crystal-clear client visibility and seamless workflow management. Turn satisfied authors into raving fans with our ghost link platform.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-[#1B1B1F] overflow-hidden">
      {/* Subtle gradient background for all public pages */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1F] to-[#16161A]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5D9CEC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FBC02D]/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <PublicHeader />
        {children}
      </div>
    </div>
  );
} 