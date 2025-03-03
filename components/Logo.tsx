"use client";

import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="relative flex items-center font-playfair font-bold text-2xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <motion.span 
          className="text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          A
        </motion.span>
        <motion.div 
          className="absolute top-0 -right-0.5 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full -z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        />
      </div>
      <motion.div
        className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      />
      <div className="relative">
        <motion.span 
          className="text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          E
        </motion.span>
        <motion.div 
          className="absolute top-0 -right-0.5 w-4 h-4 bg-accent rounded-full -z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        />
      </div>
      
      <motion.span
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Logo; 