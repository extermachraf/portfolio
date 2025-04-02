"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize intersection observer to track which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (sections) {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav
        className={`fixed top-3 rounded-full border border-gray-700/20 left-5 md:left-40 md:right-40 z-[100] py-2 backdrop-blur-xl shadow-lg right-5 transition-all duration-300 ${
          isScrolled ? "bg-[#1a1a2e]/80" : "bg-[#1a1a2e]/40"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#ffd700]">
              AEK
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <motion.div
                  key={item.label}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`text-base font-medium ${
                      activeSection === item.href.slice(1)
                        ? "text-[#ffd700]"
                        : "text-gray-300 hover:text-[#ffd700] transition-colors duration-300"
                    }`}
                    onClick={() => handleNavLinkClick(item.href.slice(1))}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ffd700]"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden relative p-2 rounded-full backdrop-blur-xl border border-gray-700/20 text-gray-300 shadow-sm transition-all duration-300 ${
                isScrolled ? "bg-[#1a1a2e]/80" : "bg-[#1a1a2e]/40"
              }`}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a1a2e]/90 backdrop-blur-2xl z-[90] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((item) => (
                <motion.div
                  key={item.label}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      handleNavLinkClick(item.href.slice(1));
                      closeMenu();
                    }}
                    className={`text-2xl font-medium ${
                      activeSection === item.href.slice(1)
                        ? "text-[#ffd700]"
                        : "text-gray-300 hover:text-[#ffd700] transition-colors duration-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSectionMobile"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ffd700]"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
