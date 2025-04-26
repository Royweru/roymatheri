import { Brush, Code, Cpu } from 'lucide-react'
import React from 'react'

export const AboutSection = () => {
  return (
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
             <div className="max-w-6xl mx-auto px-4 sm:px-5 ">
               <h2 className="section-heading text-center">About Me</h2>
               <div className="mt-12 flex flex-col md:flex-row gap-12 items-center">
                 <div className="md:w-1/2">
                   <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                     Highly skilled Web Developer with expertise in Next.js, React, TypeScript, JavaScript, and Python, specializing in full-stack development. I have a strong command over front-end technologies, leveraging Next.js and React to create dynamic and responsive user interfaces.
                   </p>
                   <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                     Additionally, I excel in back-end development using Python and Django, ensuring robust and secure server-side functionality. With three years of experience, I've developed numerous web applications that combine beautiful design with powerful functionality.
                   </p>
                   <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                     When I'm not coding, I enjoy going for walks, working out, watching movies, and just chilling. I believe in continuous learning and staying updated with the latest technologies and industry trends.
                   </p>
                 </div>
                 <div className="md:w-1/2">
                   <div className="grid grid-cols-2 gap-6">
                     <div className="card p-6">
                       <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                         <Code size={24} className="text-indigo-600 dark:text-indigo-400" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Web Development</h3>
                       <p className="text-gray-600 dark:text-gray-400">Building responsive, accessible and performant web applications.</p>
                     </div>
                     <div className="card p-6">
                       <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                         <Cpu size={24} className="text-indigo-600 dark:text-indigo-400" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Full Stack</h3>
                       <p className="text-gray-600 dark:text-gray-400">Working with both frontend and backend technologies seamlessly.</p>
                     </div>
                     <div className="card p-6">
                       <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                         <Brush size={24} className="text-indigo-600 dark:text-indigo-400" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">UI/UX Design</h3>
                       <p className="text-gray-600 dark:text-gray-400">Creating beautiful and intuitive user interfaces and experiences.</p>
                     </div>
                     <div className="card p-6">
                       <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                         </svg>
                       </div>
                       <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Fast Learning</h3>
                       <p className="text-gray-600 dark:text-gray-400">Quick to adapt to new technologies and frameworks.</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
  )
}
