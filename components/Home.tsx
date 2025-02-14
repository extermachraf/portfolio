"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

const Home = () => {
  return (
    <section
      id="home"
      className="snap-start min-h-screen flex items-center justify-center bg-white dark:bg-black px-4"
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello! I&apos;m Achraf, a software engineer with a passion for
          crafting solutions and turning ideas into reality.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/extermachraf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/achraf-el-kouch-a43256258"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="/achrafelkouchcv.pdf"
            download="Achraf_El_Kouch_CV.pdf"
            className="fixed bottom-7 right-10 text-xl transition-colors duration-300 rounded-md border bg-black dark:bg-white dark:text-black text-white p-2 z-50 shadow-md flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GrDocumentDownload />
            <p>Download CV</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
