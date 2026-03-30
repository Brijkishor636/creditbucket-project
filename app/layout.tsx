import type { Metadata } from "next";
import { Geist, Geist_Mono, Commissioner } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const commissioner = Commissioner({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-commissioner",
});

export const metadata: Metadata = {
  title: "Credit Bucket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${commissioner.variable} antialiased`}
      >
        <Navbar />
        
        {children}

        <div className="p-5 bg-[linear-gradient(#E6F3FF)]">
          <Footer />
        </div>
      </body>
    </html>
  );
}