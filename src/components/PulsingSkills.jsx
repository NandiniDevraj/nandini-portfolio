import React from 'react';
import { motion } from 'framer-motion';

// The final, curated, and VERIFIED list of skill icons
const skills = [
  { name: 'python' },
  { name: 'pytorch' },
  { name: 'tensorflow' },
  { name: 'scikitlearn' },
  { name: 'unity' },
  //{ name: 'csharp' }, // Correct name
  { name: 'cplusplus' },
  { name: 'pandas' },
  { name: 'numpy' },
  { name: 'opencv' },
  { name: 'git' },
  { name: 'react' },
  { name: 'html5' }, // Correct name
  //{ name: 'css3' },  // Correct name
 // { name: 'oracle' }, // Correct name
 // { name: 'powerbi' },
];

const PulsingSkills = () => {
  const radius = 170; // The radius of the orbit in pixels

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* This is the master rotating container */}
      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            // This div places each icon on the circle
            <div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              {/* This div counter-rotates the icon to keep it upright */}
              <motion.div
                className="bg-[#467587] p-3 rounded-full shadow-lg flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${skill.name}`}
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default PulsingSkills;