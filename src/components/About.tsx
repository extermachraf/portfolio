"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Award, Mail, ExternalLink } from "lucide-react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Link from "next/link";

const About = () => {
  const technologies = [
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Python", icon: "logos:python" },
    { name: "Java", icon: "logos:java" },
    { name: "Express", icon: "logos:express" },
    { name: "FastAPI", icon: "logos:fastapi" },
    { name: "Spring Boot", icon: "logos:spring-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "AWS", icon: "logos:aws" },
    { name: "Linux", icon: "logos:linux-tux" },
    { name: "Git", icon: "logos:git-icon" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/extermachraf",
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com/in/achraf-el-kouch-a43256258",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:py-0 py-32"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center space-y-12">
          {/* Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm border border-primary/20">
                <Award className="w-4 h-4 mr-2" />
                About Me
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
                Achraf El Kouch
                <span className="block text-2xl sm:text-3xl text-muted-foreground font-normal mt-2">
                  Full Stack Developer & Problem Solver
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I&apos;m a passionate developer creating amazing digital
                experiences. I specialize in building scalable web applications
                and love turning complex problems into simple, beautiful
                solutions. When I&apos;m not coding, you&apos;ll find me
                exploring new technologies.
              </p>
            </div>

            {/* Technologies Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">
                Technologies & Tools
              </h3>

              {/* Marquee Container */}
              <Marquee className="py-4">
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent pauseOnHover={false} speed={50}>
                  {technologies.map((tech, index) => (
                    <MarqueeItem key={index} className="mx-4">
                      <div
                        className="flex items-center justify-center w-16 h-16 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-200"
                        title={tech.name}
                      >
                        <Icon icon={tech.icon} className="w-10 h-10" />
                      </div>
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
              </Marquee>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-full text-muted-foreground transition-all duration-200 hover:text-primary hover:border-primary hover:scale-110"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </a>
              <Link
                href="/achraf.en.pdf"
                download="Achraf_El_Kouch_Resume.pdf"
                className="px-6 py-2 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
