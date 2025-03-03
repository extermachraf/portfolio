import "./globals.css";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";
import type React from "react";

// Load fonts with display swap and proper subsets
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Achraf El Kouch - Software Engineer Portfolio" />
        <title>Achraf El Kouch | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased font-poppins">
        <Providers>
          <NavBar />
          <main className="h-screen overflow-y-auto pt-20 scroll-smooth">
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
