"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import DownloadCV from "./DownloadCV";
import Particles from "./Particles";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a1a2e] px-4 md:px-8 pb-20"
    >
      {/* Particles background */}
      <Particles className="opacity-20" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#ffd700] opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[#ff6b6b] opacity-20 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-[#4ecdc4] opacity-20 animate-float-more-delayed" />
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-10 z-10">
        <motion.div
          className="text-center md:text-left space-y-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-[#ffd700]/20 text-[#ffd700] text-sm font-medium backdrop-blur-sm border border-[#ffd700]/30">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Welcome to My <span className="text-[#ffd700]">Portfolio</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Hello! I&apos;m{" "}
            <span className="font-semibold text-[#ffd700]">Achraf</span>, a
            software engineer with a passion for crafting solutions and turning
            ideas into reality.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-[#ffd700] text-[#1a1a2e] rounded-lg hover:bg-[#ffd700]/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

            <motion.a
              href="#about"
              className="px-6 py-3 border border-[#ffd700]/30 text-[#ffd700] rounded-lg hover:bg-[#ffd700]/10 transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/extermachraf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-[#ffd700] transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/achraf-el-kouch-a43256258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-[#ffd700] transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-[#ffd700] animate-pulse-slow opacity-20"></div>
            <div className="absolute inset-4 rounded-full bg-[#1a1a2e] flex items-center justify-center border-4 border-[#ffd700]/30 shadow-2xl">
              <Image
                src="/ana.jpeg"
                alt="Achraf El Kouch"
                width={400}
                height={400}
                className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
      <DownloadCV />
    </section>
  );
};

export default Home;
