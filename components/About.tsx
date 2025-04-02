"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#16213e]"
    >
      {/* Particles background */}
      <Particles className="opacity-20" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_500px_at_80%_20%,rgba(255,215,0,0.1),transparent)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_20%_80%,rgba(255,107,107,0.1),transparent)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#ffd700] opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#ffd700] opacity-20 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#ffd700] opacity-20 animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="px-4 py-2 rounded-full bg-[#ffd700]/10 text-[#ffd700] text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            About Me
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-2 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My <span className="text-[#ffd700]">Story</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#ffd700] rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            className="card p-8 backdrop-blur-sm bg-[#1a1a2e]/50 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Background</h3>
            <p className="text-lg mb-6">
              I&apos;m a software engineer with a strong foundation in computer
              science and a passion for creating innovative solutions. My
              journey in technology has been driven by a curiosity to understand
              how things work and a desire to build tools that make a
              difference.
            </p>
          </motion.div>

          <motion.div
            className="card p-8 backdrop-blur-sm bg-[#1a1a2e]/50 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Experience
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              With experience in both front-end and back-end development,
              I&apos;ve worked on a variety of projects ranging from web
              applications to system software. I&apos;m particularly interested
              in full-stack development and creating seamless user experiences.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            My <span className="text-[#ffd700]">Approach</span>
          </motion.h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          {[
            {
              title: "Problem Solving",
              description:
                "I approach challenges with a systematic mindset, breaking down complex problems into manageable components.",
            },
            {
              title: "Clean Code",
              description:
                "I believe in writing code that is not just functional but also maintainable and readable for future developers.",
            },
            {
              title: "Continuous Learning",
              description:
                "Technology evolves rapidly, and I stay updated with the latest trends and best practices in software development.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="card p-6 backdrop-blur-sm bg-[#1a1a2e]/50 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h4>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
