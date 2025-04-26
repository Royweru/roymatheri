import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
interface HeroSectionProps{
    scrollToSection:(section:string) =>void,

}
export const HeroSection:React.FC<HeroSectionProps> = ({
    scrollToSection
}) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 pt-16 md:pt-24 pb-32 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-5  flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-12 md:mb-0 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          <span className="block">Hi, I'm</span>
          <span className="text-indigo-600 dark:text-indigo-400">Roy Matheri</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Full Stack Developer & Designer
        </p>
        <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-lg">
          Crafting beautiful, responsive web applications with modern technologies.
          Specializing in Next.js, React,Tailwind CSS and Python-based backends.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            Contact Me
          </button>
          <button onClick={() => scrollToSection('projects')} className="btn-secondary">
            View Projects
          </button>
        </div>
        <div className="mt-10 flex space-x-4">
          <a href="https://github.com/Royweru" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/roy-matheri-59b8a5245/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:weruroy347@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center  z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full">
          <div className="absolute inset-0 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-pulse opacity-30"></div>
          {/* <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-gray-700 shadow-xl">
            <svg className="absolute inset-0 w-full h-full text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div> */}
          <Image
            src={'/profile.png'}
            alt=''
            fill
            className='object-cover rounded-full shadow-lg'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
        <path 
          fill="currentColor" 
          fillOpacity="1" 
          className="text-white dark:text-gray-900"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>
  </section>
  )
}
