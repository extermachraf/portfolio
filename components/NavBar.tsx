"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 bg-white dark:bg-black shadow-md rounded-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold">
              Your Name
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6">
                <li>
                  <Link href="#home" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 mr-2"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="text-center space-y-8">
            <li>
              <Link
                href="#home"
                className="text-2xl font-semibold hover:underline"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-2xl font-semibold hover:underline"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-2xl font-semibold hover:underline"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
