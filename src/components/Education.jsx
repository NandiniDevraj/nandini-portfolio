import React from 'react';
import { motion } from 'framer-motion';

// Add a 'logo' property to each entry
const educationData = [
  {
    degree: 'Master of Applied Science, Artificial Intelligence',
    university: 'Illinois Institute of Technology, Chicago, IL',
    duration: 'Aug 2024 – May 2026',
    logo: '/logos/iit-logo.png', // Path to the logo
  },
  {
    degree: 'Bachelor of Technology, Computing Science and Engineering',
    university: 'Reva University, Bengaluru, India',
    duration: 'Aug 2016 – Oct 2020',
    logo: '/logos/reva-logo.png', // Path to the logo
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Education<span className="text-violet-400">.</span>
        </h2>
        <div className="max-w-2xl mx-auto space-y-8 relative">
          {/* The vertical timeline bar */}
          <div className="absolute left-4 top-4 h-full w-0.5 bg-slate-700"></div>
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="pl-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* This is the new logo container */}
              <div className="absolute top-1 -left-1 w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                <img 
                  src={edu.logo} 
                  alt={`${edu.university} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-gray-400">{edu.university}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;