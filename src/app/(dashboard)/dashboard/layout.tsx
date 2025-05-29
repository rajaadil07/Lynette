import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Ghostwrite Pro",
  description: "Manage your ghostwriting projects and clients",
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