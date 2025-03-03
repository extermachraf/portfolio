"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Next.js", logo: "/logos/next.svg" },
  { name: "React.js", logo: "/logos/react.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "C++", logo: "/logos/cpp.svg" },
  { name: "C", logo: "/logos/c.svg" },
  { name: "Shell", logo: "/logos/shell.svg" },
  { name: "NestJS", logo: "/logos/nestjs.svg" },
  { name: "taillwind", logo: "/logos/taillwind.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
];

const Skills = () => {
  // Duplicate the skills array to create a seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 relative overflow-hidden bg-white dark:bg-black"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_500px_at_80%_20%,rgba(16,185,129,0.1),transparent)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_20%_80%,rgba(99,102,241,0.1),transparent)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent-light dark:border-accent opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent-light dark:border-accent opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent-light dark:border-accent opacity-20"></div>
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
            className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Expertise
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-2 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            className="card p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-playfair">Technical Skills</h3>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              I&apos;ve developed expertise in a range of technologies, with a focus on web development 
              and software engineering. My technical toolkit includes modern frameworks, programming 
              languages, and development tools that enable me to build robust, scalable applications.
            </p>
          </motion.div>
          
          <motion.div
            className="card p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-playfair">Soft Skills</h3>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Beyond technical abilities, I bring strong collaboration, communication, and 
              problem-solving skills to every project. I thrive in team environments, adapt 
              quickly to new challenges, and prioritize delivering high-quality solutions on time.
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
            className="text-2xl md:text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Technology <span className="gradient-text">Stack</span>
          </motion.h3>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 p-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex animate-scroll">
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-20 md:w-28 mx-3 md:mx-5 my-4"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <Image
                    src={skill.logo || "/placeholder.svg"}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-300">{skill.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 