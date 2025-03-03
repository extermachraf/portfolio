"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import type React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="font-sans bg-white dark:bg-black text-black dark:text-white min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
} 