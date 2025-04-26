import { ChevronDown, ChevronUp, Moon, Sun } from 'lucide-react'
import React from 'react'

interface NavbarProps{
    scrollToSection:(section:string)=>void,
    setDarkMode:(darkMode:boolean)=>void,
    darkMode:boolean,
    setIsMenuOpen:(isMenuOpen:boolean)=>void,
    isMenuOpen:boolean
}
export const Navbar:React.FC<NavbarProps> = ({
    scrollToSection,
    setDarkMode,
    darkMode,
    setIsMenuOpen,
    isMenuOpen
}) => {
  return (
         <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
           <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-center h-16">
               {/* Logo */}
               <div className="flex-shrink-0 flex items-center">
                 <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">RM</span>
               </div>
               
               {/* Desktop Navigation */}
               <div className="hidden md:flex items-center space-x-1">
                 <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                 <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                 <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                 <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
                 <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
                 <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                 <button 
                   onClick={() => setDarkMode(!darkMode)} 
                   className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                   aria-label="Toggle dark mode"
                 >
                   {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                 </button>
               </div>
               
               {/* Mobile menu button */}
               <div className="md:hidden flex items-center">
                 <button 
                   onClick={() => setDarkMode(!darkMode)} 
                   className="mr-2 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                   aria-label="Toggle dark mode"
                 >
                   {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                 </button>
                 <button 
                   onClick={() => setIsMenuOpen(!isMenuOpen)}
                   className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                   aria-label="Toggle menu"
                   
                 >
                   {isMenuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                 </button>
               </div>
             </div>
             
             {/* Mobile Navigation */}
             {isMenuOpen && (
               <div className="md:hidden py-2 space-y-1">
                 <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 nav-link">Home</button>
                 <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 nav-link">About</button>
                 <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 nav-link">Skills</button>
                 <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 nav-link">Projects</button>
                 <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 nav-link">Experience</button>
                 <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 nav-link">Contact</button>
               </div>
             )}
           </nav>
         </header>
  )
}
