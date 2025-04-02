"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-[#1a1a2e] relative overflow-hidden"
    >
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="text-[#ffd700] text-lg font-semibold mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            About Me
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            My <span className="text-[#ffd700]">Journey</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            I&apos;m a passionate full-stack developer with a focus on creating
            beautiful and functional web applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="backdrop-blur-lg bg-[#1a1a2e]/50 p-8 rounded-xl border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:scale-[1.02]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Background</h3>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a software engineer with expertise in full-stack
              development. My journey in tech has equipped me with a deep
              understanding of modern web technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="backdrop-blur-lg bg-[#1a1a2e]/50 p-8 rounded-xl border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:scale-[1.02]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
            <p className="text-gray-300 leading-relaxed">
              Throughout my career, I&apos;ve worked on diverse projects that
              have honed my skills in both front-end and back-end development.
              I&apos;m passionate about creating efficient, scalable solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="backdrop-blur-lg bg-[#1a1a2e]/50 p-8 rounded-xl border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:scale-[1.02] md:col-span-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest industry trends. My goal is to deliver
              high-quality solutions that exceed expectations and provide real
              value to users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
