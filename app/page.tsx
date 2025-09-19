"use client"; // This must be a client component to use hooks like useRef

import React, { useRef } from "react";
import ContactSection from "@/components/ContactSection";
import ExpSection from "@/components/ExpSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import ScrollToTopButton from "@/components/ScrollToTop";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  // Create refs for each section
  const heroRef = useRef<HTMLElement|null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <div className="bg-white dark:bg-black">
      {/* Navbar with refs */}
      <Navbar
        heroRef = {heroRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />
      <ScrollToTopButton />

      <div className="mx-auto max-w-[950px]">
        {/* Hero Section */}
        <section ref={heroRef} className="h-[calc(100vh-300px)] flex items-center justify-center">
          <HeroSection />
        </section>

        {/* Projects */}
        <section id="projects" ref={projectsRef} className="py-20">
          <ProjectSection />
        </section>

        {/* Skills */}
        <section id="skills" ref={skillsRef} className="py-20">
          <SkillSection />
        </section>

        {/* Experience */}
        <section id="exp" ref={experienceRef} className="py-20">
          <ExpSection />
        </section>

        {/* Contact */}
        <section id="contact" ref={contactRef} className="py-20">
          <ContactSection />
        </section>
      </div>

      <Footer />
    </div>
  );
}
