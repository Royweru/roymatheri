import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'

export const ContactSection = () => {

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-5 ">
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
                <a href="tel:+254712345678" className="text-indigo-600 dark:text-indigo-400 hover:underline">+254 759 355 344</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <Linkedin size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/roy-matheri-59b8a5245/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">linkedin.com/in/roy-matheri-59b8a5245</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <Github size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">GitHub</h3>
                <a href="https://github.com/Royweru" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">github.com/Royweru</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-6" onSubmit={onHandleSubmit}>
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
  )
}
