import React from 'react'

export const TopFeatured = () => {
  return (
    <section id="top-featured" className=" py-8 bg-gray-50 dark:bg-gray-900">
      
      <div className='max-w-6xl mx-auto px-4 sm:px-5'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8'>
            Top Featured ✨✨
        </h2>
        <p className='text-center font-light mb-6'>
          This is my personal project that i'm currently working on. I am building a platform that allows users to create and manage their own gigs, similar to Fiverr. Users can create a profile, list their services, and manage their clients. The platform will also include a community where different freelancers can share their experiences and assist beginners in their journey. I am using Next.js for the frontend and Django for the backend.
        </p>
        <div className=' w-full relative rounded-lg overflow-hidden space-y-3.5'>
              <video 
              controls
              className='w-full h-[400px] rounded-lg object-cover'
              src="/featured-project.mp4"
              />
              <div className='  flex items-center justify-center  flex-col gap-3'>
                <h3 className='text-2xl dark:text-neutral-100 text-neutral-800 font-bold'>GigHub</h3>
                <a href="https://gighub-two.vercel.app/" target='_blank'> Visit website</a>
              </div>
        </div>
      </div>
    </section>
  )
}
