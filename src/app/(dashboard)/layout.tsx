import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - GhostSync",
  description: "Connect and manage your ghostwriting projects and clients with crystal-clear visibility",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white min-h-screen">
      {children}
    </div>
  );
} 