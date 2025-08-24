"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import Image from "next/image";

// Badge component for technologies with transparent pink color
const TechBadge = ({ tech }: { tech: string }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary-blue/20 text-primary-blue border border-primary/30 mr-2 mb-2 ">
      {tech}
    </span>
  );
};

export const AnimatedTestimonials = ({
  autoplay = false,
}: {
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto max-w-7xl font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-10 md:gap-12 lg:gap-16 md:grid-cols-2">
        <div className="flex items-center justify-center ">
          <div className="relative h-80 md:h-[380px] lg:h-[420px] w-full">
            <AnimatePresence>
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : projectsData.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={800}
                    // draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-xl"
                    priority
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-6 md:py-8">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary-blue mb-3">
              {projectsData[active].title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              {projectsData[active].category}
            </p>
            <motion.p className="mt-3 text-base md:text-lg text-foreground mb-6 leading-relaxed">
              {projectsData[active].description
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
            <div className="mb-6">
              <p className="text-sm md:text-base font-medium text-foreground mb-3">
                Technologies:
              </p>
              <div className="flex flex-wrap">
                {projectsData[active].technologies.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              {projectsData[active].liveUrl && (
                <Link
                  href={projectsData[active].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all text-sm font-medium hover:shadow-md"
                >
                  <span className="mr-2">
                    {/* Example: External Link icon from react-icons */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6m5-3h-3m0 0v3m0-3l-7 7"
                      />
                    </svg>
                  </span>
                  View Project
                </Link>
              )}
              {projectsData[active].githubUrl && (
                <Link
                  href={projectsData[active].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 rounded-md bg-secondary text-secondary-foreground hover:opacity-90 transition-all text-sm font-medium hover:shadow-md"
                >
                  GitHub
                </Link>
              )}
            </div>
          </motion.div>
          <div className="flex items-center gap-4 pt-10 md:pt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              title="Previous project (Left arrow key)"
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30"
            >
              <IconArrowLeft className="h-5 w-5 text-primary transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              title="Next project (Right arrow key)"
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30"
            >
              <IconArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
            <span className="text-xs text-muted-foreground ml-2">
              Use keyboard ← → arrows to navigate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
