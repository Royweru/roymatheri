import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-5 ">
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
  )
}
