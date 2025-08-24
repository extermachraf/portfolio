"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Briefcase } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:py-0 py-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="w-full flex items-center justify-center">
          <div className="">
            <AnimatedTestimonials />
          </div>
        </div>
      </div>
    </section>
  );
};
