import React from 'react';
import { Code, Database, PenTool, GitBranch } from 'lucide-react';

interface SkillsSectionProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  setActiveTab,
  activeTab
}) => {
  const skills = [
    { name: "Next.js", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Python", category: "backend" },
    { name: "Django", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "UI/UX Design", category: "design" },
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "AWS", category: "tools" },
  ];

  const filteredSkills = activeTab === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeTab);

  // Function to get the appropriate icon for category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'frontend':
        return <Code className="w-5 h-5" />;
      case 'backend':
        return <Database className="w-5 h-5" />;
      case 'design':
        return <PenTool className="w-5 h-5" />;
      case 'tools':
        return <GitBranch className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 ">
        <h2 className="section-heading text-center">Skills & Expertise</h2>
        
        <div className="mt-8 mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${
              activeTab === 'all' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('frontend')}
            className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${
              activeTab === 'frontend' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab('backend')}
            className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${
              activeTab === 'backend' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${
              activeTab === 'design' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${
              activeTab === 'tools' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            Tools
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                {getCategoryIcon(skill.category)}
              </span>
              <span className="font-medium text-gray-800 dark:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};