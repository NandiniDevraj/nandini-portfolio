import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiKaggle } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold text-white mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Nandini Devaraj
            </motion.h1>
            
            <TypeAnimation
              sequence={[
                'AI/ML Engineer', 1000,
                'Research Engineer', 1000,
                'Data Scientist', 1000,
                'VR Developer', 1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl md:text-3xl font-semibold text-violet-400"
              repeat={Infinity}
            />

            {/* Social Links */}
            <motion.div 
              className="flex justify-center md:justify-start gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <a href="https://www.linkedin.com/in/nandinidevraj/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" title="LinkedIn">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/NandiniDevraj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
                <FaGithub size={28} />
              </a>
              <a href="https://leetcode.com/u/Nandini-Devraj/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFA116] transition-colors" title="LeetCode">
                <SiLeetcode size={28} />
              </a>
              <a href="mailto:devarajnandini23@gmail.com" className="text-gray-400 hover:text-[#EA4335] transition-colors" title="Email">
                <FaEnvelope size={28} />
              </a>
            </motion.div>

            {/* --- NEW SOLID BUTTON STYLES --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              {/* Primary Button (Solid Violet) */}
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300"
              >
                Explore My Work
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              {/* Secondary Button (Solid Slate) */}
              <a 
                href="/NANDINI DEVARAJ RESUME.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-300"
              >
                View Resume
                <FaDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <div className=" md:flex justify-center items-center h-96">
            <motion.div 
              className="w-80 h-80 rounded-full overflow-hidden shadow-2xl shadow-blue-500/80 border-8 border-slate-800"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img src="/headshot.jpg" alt="Nandini Devaraj" className="object-cover w-full h-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;