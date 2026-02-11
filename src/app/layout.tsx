import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrés Romero | Software Developer",
  description: "Portfolio of Andrés Romero, software developer specializing in AI and machine learning. Guanajuato, Mexico.",
  keywords: ["developer", "software", "machine learning", "AI", "Next.js", "React", "Andrés Romero"],
  authors: [{ name: "Andrés Romero" }],
  openGraph: {
    title: "Andrés Romero | Software Developer",
    description: "Specializing in software development and machine learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
