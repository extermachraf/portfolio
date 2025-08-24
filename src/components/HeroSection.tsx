"use client";

import React from "react";
import Image from "next/image";
import { User, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 lg:py-0 py-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section - Left */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/ana1.png"
                  alt="Achraf El Kouch"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-15 blur-xl"></div>
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
              {/* Header Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm border border-primary/20">
                <User className="w-4 h-4 mr-2" />
                Welcome to My Portfolio
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
                I&apos;m Achraf El Kouch
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                I&apos;m a passionate developer creating amazing digital
                experiences. I specialize in building scalable web applications
                and love turning complex problems into simple, beautiful
                solutions.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-6">
                <span className="inline-flex items-center px-3 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Frontend
                </span>
                <span className="inline-flex items-center px-3 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Backend
                </span>
                <span className="inline-flex items-center px-3 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
                  <Sparkles className="w-4 h-4 mr-1" />
                  DevOps
                </span>
                <span className="inline-flex items-center px-3 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Problem Solving
                </span>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#projects"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>View My Work</span>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
