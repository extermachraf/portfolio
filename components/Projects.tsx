"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "./Particles";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "/project1.jpg",
    technologies: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "/project2.jpg",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section
      id="projects"
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
            My Work
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-2 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Featured <span className="text-[#ffd700]">Projects</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#ffd700] rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="card overflow-hidden backdrop-blur-sm bg-[#1a1a2e]/50 border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#ffd700]/10 text-[#ffd700] text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ffd700] hover:text-[#ffd700]/80 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ffd700] hover:text-[#ffd700]/80 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
