import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "BeginOS - The First New Country Operating System",
  description: "BeginOS unifies banking, cross-border payments, and legal support in one AI-native app. Built for the 281 million people seeking a better life. Build US credit from day one.",
  keywords: ["international students", "banking for students", "immigration legal help", "cross-border payments", "US credit building", "student banking"],
  authors: [{ name: "ThinkARC Inc" }],
  openGraph: {
    title: "BeginOS - The First New Country Operating System",
    description: "Banking, payments, and legal support for international students. Build US credit from day one.",
    type: "website",
    locale: "en_US",
    siteName: "BeginOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeginOS - The First New Country Operating System",
    description: "Banking, Credit Building and Compliance for international students from day one.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://beginos.co"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
