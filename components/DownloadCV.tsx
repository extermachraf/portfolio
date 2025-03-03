"use client";

import { motion } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useEffect, useState } from "react";

const DownloadCV = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkSection = () => {
      // Get all sections
      const homeSection = document.getElementById('home');
      
      if (!homeSection) return;
      
      const homeSectionRect = homeSection.getBoundingClientRect();
      const isInHomeSection = 
        homeSectionRect.top <= 0 && 
        homeSectionRect.bottom >= window.innerHeight / 2;
      
      setIsVisible(isInHomeSection);
    };

    // Check initial position
    checkSection();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkSection);
    
    // Clean up
    return () => window.removeEventListener('scroll', checkSection);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.a
      href="/achrafelkouchcv.pdf"
      download="Achraf_El_Kouch_CV.pdf"
      className="fixed bottom-7 right-10 bg-gradient-to-r from-primary-600 to-accent shadow-xl hover:shadow-2xl text-white rounded-xl py-3 px-5 flex items-center gap-3 transition-all duration-300 border border-white/10 z-50 font-playfair"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring" }}
    >
      <HiOutlineDocumentDownload className="text-white text-2xl" />
      <span className="font-medium tracking-wide">Download CV</span>
    </motion.a>
  );
};

export default DownloadCV; 