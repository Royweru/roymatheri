"use client";

import { useState, useEffect } from "react";
import {
  Code,
  Cpu,
  Brush,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Moon,
  Sun,
  ArrowUp,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "Next.js", category: "frontend", level: 90 },
    { name: "React", category: "frontend", level: 95 },
    { name: "TypeScript", category: "frontend", level: 85 },
    { name: "JavaScript", category: "frontend", level: 90 },
    { name: "Tailwind CSS", category: "frontend", level: 95 },
    { name: "Python", category: "backend", level: 85 },
    { name: "Django", category: "backend", level: 80 },
    { name: "Node.js", category: "backend", level: 75 },
    { name: "Express", category: "backend", level: 75 },
    { name: "MongoDB", category: "backend", level: 70 },
    { name: "PostgreSQL", category: "backend", level: 80 },
    { name: "UI/UX Design", category: "design", level: 85 },
    { name: "Git", category: "tools", level: 90 },
    { name: "Docker", category: "tools", level: 75 },
    { name: "AWS", category: "tools", level: 70 },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with advanced filtering, cart functionality, and secure payment processing.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      image: "/projects/everythingdesign.png",
      github: "#",
      demo: "https://estore-ivory.vercel.app/",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Gossivlogs Blog application",
      description:
        "A blog application with a clean and modern design, allowing users to create, edit, and delete posts. It features user authentication and a rich text editor.",
      technologies: ["React", "Next JS", "Tailwind CSS","Sanity CMS"],
      image: "/projects/gossivlogs.png",
      github: "#",
      demo: "https://gossivlogs.vercel.app/",
      category: "frontend",
    },
    {
      id: 3,
      title: "Apartamenti real estate platform",
      description:
        "A real estate platform that allows users to search for properties, view details, and contact agents. It features a responsive design and advanced search functionality.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB"],
      image: "/projects/apartamenti.png",
      github: "#",
      demo: "https://apartamenti.vercel.app/",
      category: "backend",
    },
    {
      id: 4,
      title: "Truck master pro",
      description:
        "A modern, responsive web application allowing truck drivers to manage their routes, schedules, and cargo efficiently.",
      technologies: ['React.js','Django','PostgreSQL','Tailwind CSS','simplejwt'],
      image: "/projects/truckmaster.png",
      github: "#",
      demo: "https://truck-pro-driver.vercel.app/",
      category: "design",
    },
  ];

  const experience = [
    {
      company: "Freelance",
      title: "Full Stack Developer",
      period: "2024 - Present",
      description:
        "Delivering high-quality full-stack web applications ahead of projected timelines. Developing responsive interfaces with React and implementing secure backend systems using Node.js.",
    },
    {
      company: "Africom Media",
      title: "Graphic Designer",
      period: "2024",
      description:
        "Created stunning visual artworks and branding materials. Collaborated with team members to design logos, social media graphics, and comprehensive brand identity systems.",
    },
    {
      company: "Yashio Kenya",
      title: "Software Developer Intern",
      period: "2022 - 2023",
      description:
        "Collaborated with the team to deploy production code, resolved critical bugs, and implemented responsive UI components. Participated in code reviews to ensure quality.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <main>
        {/* Hero Section */}
        <HeroSection scrollToSection={scrollToSection} />
        {/* About Section */}
        <AboutSection />
        {/* Skills Section */}
        <SkillsSection
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        {/* Projects Section */}
        <ProjectsSection projects={projects} />
        {/* Experience Section */}
        <ExperienceSection experience={experience} />
        {/* Contact Section */}
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
      {/* Scroll to top button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
