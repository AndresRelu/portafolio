import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrés Romero | Desarrollador de Software",
  description: "Portafolio de Andrés Romero, desarrollador de software especializado en IA y machine learning. Guanajuato, México.",
  keywords: ["desarrollador", "software", "machine learning", "IA", "Next.js", "React", "Andrés Romero"],
  authors: [{ name: "Andrés Romero" }],
  openGraph: {
    title: "Andrés Romero | Desarrollador de Software",
    description: "Especializado en desarrollo de software y machine learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
