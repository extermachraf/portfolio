import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PortfolioNavbar from "@/components/PortfolioNavbar";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "El Kouch Achraf",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <PortfolioNavbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
