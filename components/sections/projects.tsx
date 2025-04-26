import { ExternalLink, Github } from 'lucide-react'
import React from 'react'

export const ProjectsSection = (
    {
    projects
}:{
    projects:{
        id:number,
        title:string,
        description:string,
        image:string,
        github:string,
        demo:string,
        technologies:string[]
    }[]
}) => {
  return (
 <section id="projects" className="py-20 bg-white dark:bg-gray-900">
           <div className="max-w-6xl mx-auto px-4 sm:px-5 ">
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
  )
}
