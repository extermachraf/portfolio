"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";
import { motion } from "motion/react";
import { scrollToSection, getActiveSection } from "@/lib/scrollUtils";

const PortfolioNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getActiveSection();
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  const handleMobileNavClick = (
    e?: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string
  ) => {
    setIsOpen(false);
    if (e && sectionId) {
      handleNavClick(e, sectionId);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar className="z-50 fixed top-1.5 inset-x-0 hidden lg:block">
        <NavBody>
          <NavbarLogo />
          <div className="flex flex-1 flex-row items-center justify-center space-x-6 text-sm font-medium">
            {navItems.map((item, idx) => (
              <a
                key={`desktop-link-${idx}`}
                href={item.link}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-4 py-2 transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-primary-blue hover:text-primary-dark"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Animated background for active section */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-3 ml-8">
            <NavbarButton variant="primary" href="#contact">
              Get in Touch
            </NavbarButton>
            <NavbarButton
              variant="secondary"
              href="/achraf.en.pdf"
              as="a"
              download="Achraf_El_Kouch_Resume.pdf"
            >
              Download Resume
            </NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Navbar */}
      <Navbar className="fixed top-1.5 inset-x-0 lg:hidden">
        <MobileNav>
          <MobileNavHeader className="justify-between w-full">
            <NavbarLogo />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-primary-dark hover:text-primary-red transition-colors relative z-[60]">
                  <IconMenu2 size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <NavbarLogo />
                </SheetHeader>

                <div className="flex flex-col h-full">
                  <nav className="flex-1 px-6 py-8">
                    <div className="space-y-1">
                      {navItems.map((item, idx) => (
                        <motion.a
                          key={`mobile-link-${idx}`}
                          href={item.link}
                          onClick={(e) => handleMobileNavClick(e, item.id)}
                          className={`group flex items-center justify-between w-full p-4 text-lg font-medium rounded-xl transition-all duration-200 border ${
                            activeSection === item.id
                              ? "bg-primary/10 text-primary border-primary/20"
                              : "text-primary-blue border-transparent hover:text-primary hover:bg-primary/5 hover:border-primary/10"
                          }`}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{
                              x: activeSection === item.id ? 5 : 0,
                              opacity: activeSection === item.id ? 1 : 0,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                            }}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </motion.div>
                        </motion.a>
                      ))}
                    </div>
                  </nav>

                  <div className="px-6 py-6 border-t border-gray-100 bg-gray-50/50">
                    <div className="space-y-3">
                      <NavbarButton
                        variant="primary"
                        href="#contact"
                        className="w-full justify-center py-2 text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        onClick={handleMobileNavClick}
                      >
                        Get in Touch
                      </NavbarButton>
                      <NavbarButton
                        variant="secondary"
                        href="/achraf.en.pdf"
                        as="a"
                        download="Achraf_El_Kouch_Resume.pdf"
                        className="w-full justify-center py-2 text-base font-semibold"
                        onClick={handleMobileNavClick}
                      >
                        Download Resume
                      </NavbarButton>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-center text-sm text-gray-500">
                        © 2025 Achraf Portfolio
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </MobileNavHeader>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default PortfolioNavbar;
