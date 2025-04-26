import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Roy Matheri | Software Developer',
  description: 'Full Stack Developer specializing in Next.js, React, TypeScript and Python',
};

export default function RootLayout({ 
  children
 }:{
  children:React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className=' w-full'>
        {children}
        </div>
        
      </body>
    </html>
  );
}
