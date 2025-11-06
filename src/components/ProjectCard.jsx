import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Badge from './Badge';

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl, liveUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-[#1E293B] rounded-lg overflow-hidden shadow-lg shadow-black/30"
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-violet-400 transition-colors">
            <FaGithub size={24} />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-violet-400 transition-colors">
              <FaExternalLinkAlt size={22} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;