"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import type React from "react"; // Added import for React

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}
      >
        <ThemeProvider attribute="class">
          <NavBar />
          <main className="snap-y snap-mandatory h-screen overflow-y-auto pt-20">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
