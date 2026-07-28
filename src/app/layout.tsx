import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/dom/Navbar";
import Footer from "@/components/dom/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isman Dzaky - Fullstack Developer Portfolio",
  description: "Interactive 3D portfolio showcasing my skills as a fullstack developer with modern web technologies",
  keywords: ["fullstack developer", "next.js", "react", "three.js", "web development", "portfolio"],
  authors: [{ name: "Muhammad Isman Dzaky Ramadhian" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
