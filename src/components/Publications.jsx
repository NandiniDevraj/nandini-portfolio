import React from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';

const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Publications<span className="text-blue-400">.</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg border border-slate-700 hover:border-blue-500 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">
              Cloud Sanitization and Auditing
            </h3>
            <p className="text-gray-400">
              Co-Authored, Published in Scopus Indexed Journal "Test Engineering and Management"
            </p>
            <p className="text-sm text-gray-500 mt-1">
              May/June 2020, Vol 83, Pages: 4164 - 4167
            </p>
            {/* Optional: Add a link to the publication if you have one */}
            {/* <a 
              href="your-publication-link-here" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 font-semibold text-violet-400 hover:underline"
            >
              <FaLink /> View Publication
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;