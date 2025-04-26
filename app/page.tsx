"use client";

import { useState, useEffect } from 'react';
import { Code, Cpu, Brush, ChevronDown, ChevronUp, ExternalLink, Github, Linkedin, Mail, Phone, Moon, Sun, ArrowUp } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Next.js', category: 'frontend', level: 90 },
    { name: 'React', category: 'frontend', level: 95 },
    { name: 'TypeScript', category: 'frontend', level: 85 },
    { name: 'JavaScript', category: 'frontend', level: 90 },
    { name: 'Tailwind CSS', category: 'frontend', level: 95 },
    { name: 'Python', category: 'backend', level: 85 },
    { name: 'Django', category: 'backend', level: 80 },
    { name: 'Node.js', category: 'backend', level: 75 },
    { name: 'Express', category: 'backend', level: 75 },
    { name: 'MongoDB', category: 'backend', level: 70 },
    { name: 'PostgreSQL', category: 'backend', level: 80 },
    { name: 'UI/UX Design', category: 'design', level: 85 },
    { name: 'Git', category: 'tools', level: 90 },
    { name: 'Docker', category: 'tools', level: 75 },
    { name: 'AWS', category: 'tools', level: 70 },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with advanced filtering, cart functionality, and secure payment processing.',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'An AI-powered application that generates content based on user prompts, with different tone and style options.',
      technologies: ['Python', 'Django', 'OpenAI API', 'React'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      category: 'backend'
    },
    {
      id: 4,
      title: 'Company Branding Website',
      description: 'A modern, responsive website with stunning animations and intuitive UI for a tech startup.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'GSAP'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      category: 'design'
    },
  ];

  const experience = [
    {
      company: 'Freelance',
      title: 'Full Stack Developer',
      period: '2024 - Present',
      description: 'Delivering high-quality full-stack web applications ahead of projected timelines. Developing responsive interfaces with React and implementing secure backend systems using Node.js.'
    },
    {
      company: 'Africom Media',
      title: 'Graphic Designer',
      period: '2024',
      description: 'Created stunning visual artworks and branding materials. Collaborated with team members to design logos, social media graphics, and comprehensive brand identity systems.'
    },
    {
      company: 'Yashio Kenya',
      title: 'Software Developer Intern',
      period: '2022 - 2023',
      description: 'Collaborated with the team to deploy production code, resolved critical bugs, and implemented responsive UI components. Participated in code reviews to ensure quality.'
    }
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
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center">Skills & Expertise</h2>
            <div className="mt-8 mb-8 flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('frontend')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'frontend' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
              >
                Frontend
              </button>
              <button 
                onClick={() => setActiveTab('backend')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'backend' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
              >
                Backend
              </button>
              <button 
                onClick={() => setActiveTab('design')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'design' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
              >
                Design
              </button>
              <button 
                onClick={() => setActiveTab('tools')} 
                className={`px-4 py-2 rounded-full ${activeTab === 'tools' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
              >
                Tools
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="card p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center">Featured Projects</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="card overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="flex space-x-3">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors duration-300"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white bg-indigo-600/70 p-2 rounded-full hover:bg-indigo-600/90 transition-colors duration-300"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center">Work Experience</h2>
            <div className="mt-12 relative">
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-indigo-200 dark:bg-indigo-900 transform -translate-x-1/2"></div>
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full transform -translate-x-1/2"></div>
                    <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:w-1/2' : 'md:ml-auto md:pl-16 md:w-1/2'}`}>
                      <div className="card p-6">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 mb-3">
                          {job.period}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h3>
                        <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{job.company}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center">Get In Touch</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  I'm currently available for freelance work and open to new opportunities. Whether you have a project in mind or just want to say hello, I'd love to hear from you!
                </p>
                <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <Mail size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white">Email</h3>
                      <a href="mailto:weruroy347@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">weruroy347@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <Phone size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h3>
                      <a href="tel:+254712345678" className="text-indigo-600 dark:text-indigo-400 hover:underline">+254 712 345 678</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <Linkedin size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white">LinkedIn</h3>
                      <a href="https://linkedin.com/in/roymatheri" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">linkedin.com/in/roymatheri</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <Github size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white">GitHub</h3>
                      <a href="https://github.com/roymatheri" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">github.com/roymatheri</a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      placeholder="Your message"
                      className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-300" 
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold text-indigo-400">RM</span>
              <p className="mt-2 text-gray-400">Full Stack Developer & Designer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/roymatheri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/roymatheri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:weruroy347@gmail.com" className="text-gray-400 hover:text-indigo-400" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Roy Matheri. All rights reserved.</p>
          </div>
        </div>
      </footer>

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