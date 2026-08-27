"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects, { ProjectItem, projectsData } from "@/components/Projects";
import Services from "@/components/Services";
import BespokeObjects from "@/components/BespokeObjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiryTopic, setInquiryTopic] = useState<string>("");

  const handleOpenBrief = (topic?: string) => {
    if (topic) setInquiryTopic(topic);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenProjectById = (id: string) => {
    const found = projectsData.find((p) => p.id === id);
    if (found) setSelectedProject(found);
  };

  return (
    <>
      {/* Subtle Organic Texture */}
      <div className="grain-overlay" />

      {/* Main Experience Layout */}
      <div className="relative min-h-screen flex flex-col">
        <Navbar onOpenBrief={handleOpenBrief} />
        
        <main className="flex-grow">
          <Hero onOpenProject={handleOpenProjectById} />
          <About />
          <Projects onSelectProject={(p) => setSelectedProject(p)} />
          <Services onOpenBrief={handleOpenBrief} />
          <BespokeObjects onOpenBrief={handleOpenBrief} />
          <Contact initialTopic={inquiryTopic} />
        </main>

        <Footer />
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartInquiry={handleOpenBrief}
      />
    </>
  );
}
