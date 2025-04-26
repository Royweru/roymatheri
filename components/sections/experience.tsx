import React from 'react'

export const ExperienceSection = ({experience}:{
    experience:{
        company:string,
        title:string,
        period:string,
        description:string
    }[]
}) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-6">
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
  )
}
