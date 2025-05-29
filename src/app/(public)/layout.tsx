import type { Metadata } from "next";
import { PublicHeader } from "@/components";

export const metadata: Metadata = {
  title: "Ghostwriter",
  description: "Effortlessly manage your email and calendar with natural conversation. Whether you're at your desk, on your commute, or mid-flight—unlock your freedom with AI-powered productivity.",
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