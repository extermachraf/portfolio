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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a1a2e] px-6 md:px-8 pb-20"
    >
      {/* Particles background */}
      <Particles className="opacity-20" />

      {/* Ghibli-style decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#ffd700] opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[#ff6b6b] opacity-20 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-[#4ecdc4] opacity-20 animate-float-more-delayed" />
      </div>

      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-center z-10">
        <motion.div
          className="text-left space-y-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-[#ffd700]/20 text-[#ffd700] text-sm font-medium backdrop-blur-sm border border-[#ffd700]/30">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Welcome to My <span className="text-[#ffd700]">Portfolio</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Hello! I&apos;m{" "}
            <span className="font-semibold text-[#ffd700]">Achraf</span>, a
            software engineer with a passion for crafting solutions and turning
            ideas into reality.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
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
            className="flex mt-6 space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
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
          className="hidden md:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 rounded-full bg-[#ffd700] animate-pulse-slow opacity-20"></div>
            <div className="absolute inset-4 rounded-full bg-[#1a1a2e] flex items-center justify-center border-4 border-[#ffd700]/30 shadow-2xl">
              <Image
                src="/ana.jpeg"
                alt="Achraf El Kouch"
                width={400}
                height={400}
                className="rounded-full object-cover w-80 h-80"
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
