import React from 'react';
import { motion } from 'framer-motion';

const TechIcon = ({ icon: Icon, label }) => {
  return (
    <div className="relative group">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-4xl text-gray-400"
      >
        <Icon />
      </motion.div>
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 w-max px-2 py-1 text-sm bg-slate-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {label}
      </span>
    </div>
  );
};

export default TechIcon;