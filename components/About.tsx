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

const About = () => {
  // Duplicate the skills array to create a seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section
      id="about"
      className="snap-start min-h-screen py-20 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 pt-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-base md:text-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4">
            As a passionate software engineer, I specialize in creating
            efficient, scalable, and user-friendly applications. My expertise
            spans both frontend and backend technologies, allowing me to build
            robust web applications using modern frameworks and best practices.
          </p>
          <p>
            I&apos;m constantly learning and adapting to new technologies,
            staying at the forefront of the ever-evolving world of software
            development. My goal is to contribute to innovative projects that
            make a positive impact while continuously growing as a professional.
          </p>
        </motion.div>
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          My Skills
        </motion.h3>
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex animate-scroll">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-16 md:w-24 mx-2 md:mx-4"
              >
                <Image
                  src={skill.logo || "/placeholder.svg"}
                  alt={skill.name}
                  width={96}
                  height={96}
                  className="rounded-lg shadow-md bg-white dark:bg-gray-800"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
