import type { Metadata } from "next";
import { PublicHeader } from "@/components";

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
    <div className="bg-white min-h-screen">
      <PublicHeader />
      {children}
    </div>
  );
} 