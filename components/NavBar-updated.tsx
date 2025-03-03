"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Logo from "./Logo";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-3 rounded-full border border-white/20 dark:border-gray-700/20 left-5 md:left-40 md:right-40 z-[100] transition-all duration-500 py-2  dark:bg-gray-900/30 backdrop-blur-2xl shadow-lg right-5`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center px-6 md:px-8">
            <Link 
              href="/" 
              className="relative group"
            >
              <Logo />
            </Link>

            <div className="hidden md:flex items-center gap-4">
              <div className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-full px-2 py-1 border border-white/20 dark:border-gray-700/20 shadow-sm">
                <div className="flex items-center">
                  {navLinks.map((link) => (
                    <div key={link.href} className="relative">
                      <Link 
                        href={link.href} 
                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                          activeSection === link.href.substring(1) 
                            ? "text-white" 
                            : "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={() => handleNavLinkClick(link.href.substring(1))}
                      >
                        <span className="relative z-10">{link.label}</span>
                      </Link>
                      {activeSection === link.href.substring(1) && (
                        <motion.div 
                          layoutId="activeBackground"
                          className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent rounded-full -z-0 shadow-md"
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Download CV button */}
              <motion.a
                href="/achrafelkouchcv.pdf"
                download="Achraf_El_Kouch_CV.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-accent text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 border border-white/10 text-sm font-medium"
              >
                <HiOutlineDocumentDownload className="text-white text-lg" />
                <span>CV</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 shadow-sm"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Download CV button */}
              <motion.a
                href="/achrafelkouchcv.pdf"
                download="Achraf_El_Kouch_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-accent text-white p-2 rounded-full flex items-center shadow-md hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <HiOutlineDocumentDownload className="text-white text-lg" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 shadow-sm"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="relative p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 shadow-sm"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-2xl z-[90] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <motion.ul 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                className="text-center space-y-8"
              >
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      className={`relative text-2xl font-playfair ${
                        activeSection === link.href.substring(1)
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-gray-600 dark:text-gray-300"
                      } hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300`}
                      onClick={() => handleNavLinkClick(link.href.substring(1))}
                    >
                      <span className="relative">
                        {link.label}
                        {activeSection === link.href.substring(1) && (
                          <motion.div 
                            layoutId="activeMobileIndicator"
                            className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-primary-600 to-accent"
                          />
                        )}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 