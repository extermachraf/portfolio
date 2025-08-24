import HeroSection from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GitHubCorner } from "@/components/GitHubCorner";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <GitHubCorner />
      <HeroSection />
      <About />
      <ProjectsSection />
      <Contact />
      {/* Add more sections here as you build your portfolio */}
    </main>
  );
}
