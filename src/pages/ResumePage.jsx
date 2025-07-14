import React from 'react'
import { EnvelopeIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">RAKTIM SHUVROW</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <PhoneIcon className="h-5 w-5 mr-2" />
            <span>+8801795692149</span>
          </div>
          <div className="flex items-center text-gray-600">
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">raktim.web.coder.bd@gmail.com</span>
          </div>
          <div className="flex items-center text-blue-600 hover:text-blue-800">
            <LinkIcon className="h-5 w-5 mr-2" />
            <a href="https://linkedin.com/in/raktim-shuvrow-3b55b9370" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center text-blue-600 hover:text-blue-800">
            <LinkIcon className="h-5 w-5 mr-2" />
            <a href="https://github.com/raktim98-cloud" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4 text-gray-700">Summary</h2>
        <p className="text-gray-600">
          Passionate and self-motivated frontend developer with hands-on training in modern web technologies including 
          HTML5, CSS3, JavaScript (ES6+), and React.js. Completed a professional course in Frontend Web Development 
          with React (1Yr) from south Asia's Best IT <span className='text-2xl text-pink-500'>Creative</span> IT Institute, Mirpur. Eager to contribute to a remote 
          development team, learn from real-world projects, and grow as a web developer.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4 text-gray-700">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Languages:</h3>
            <ul className="space-y-1 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>HTML5, CSS3, JavaScript (ES6+), JSON</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Libraries & Frameworks:</h3>
            <ul className="space-y-1 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>React.js, Bootstrap, Tailwind CSS, Next.js</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Tools & Platforms:</h3>
            <ul className="space-y-1 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Git, GitHub, VS Code, Netlify, Figma</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Other:</h3>
            <ul className="space-y-1 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Responsive Web Design, REST API Integration, Single Page Applications (SPA)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4 text-gray-700">Projects</h2>
        <div className="space-y-6">
          {/* Project 1 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg text-gray-800 mb-2">DNK Project</h3>
            <p className="text-gray-600 mb-3">
              A dynamic e-commerce platform built with React, offering seamless shopping, secure payments, 
              and real-time order tracking.
            </p>
            <a 
              href="https://github.com/raktim98-cloud/DNK_Project.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <LinkIcon className="h-4 w-4 mr-1" />
              GitHub Repository
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg text-gray-800 mb-2">Innovate Project</h3>
            <p className="text-gray-600 mb-3">
              A dynamic e-commerce platform built with React, offering seamless shopping, secure payments, 
              and real-time order tracking.
            </p>
            <a 
              href="https://github.com/raktim98-cloud/innovate_Project.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <LinkIcon className="h-4 w-4 mr-1" />
              GitHub Repository
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg text-gray-800 mb-2">Exclusive Project</h3>
            <p className="text-gray-600 mb-3">
              A dynamic e-commerce platform built with React, offering seamless shopping, secure payments, 
              and real-time order tracking.
            </p>
            <a 
              href="https://github.com/raktim98-cloud/Exclusive.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <LinkIcon className="h-4 w-4 mr-1" />
              GitHub Repository
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg text-gray-800 mb-2">Zenfy Project</h3>
            <p className="text-gray-600 mb-3">
              A dynamic e-commerce platform built with React, offering seamless shopping, secure payments, 
              and real-time order tracking.
            </p>
            <a 
              href="https://github.com/raktim98-cloud/zenfy-project.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <LinkIcon className="h-4 w-4 mr-1" />
              GitHub Repository
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4 text-gray-700">Education</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-800 mb-1">Frontend Web Development with React</h3>
          <p className="text-gray-600">Creative IT Institute, Mirpur, Dhaka</p>
          <p className="text-gray-500 text-sm">Completed: [20 June 2025]</p>
        </div>
      </section>
    </div>
  );
}