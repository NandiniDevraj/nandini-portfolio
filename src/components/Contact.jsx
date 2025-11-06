import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaGoogle } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-8">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Let's Build Something Intelligent<span className="text-blue-400">.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12">
              I'm currently seeking new opportunities. Have a question or want to collaborate? Feel free to reach out.
            </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.form 
            action="https://formspree.io/f/xgvpgpen" // <-- PASTE YOUR FORMPSREE URL HERE
            method="POST"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <input type="text" name="name" placeholder="Your Name" required className="p-3 bg-slate-800 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" name="email" placeholder="Your Email" required className="p-3 bg-slate-800 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" placeholder="Your Message" rows="5" required className="p-3 bg-slate-800 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="px-6 py-3 font-semibold rounded-md bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
              Send Message
            </button>
          </motion.form>

          {/* Social Links with Data Flow Line */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center gap-8"
          >
            <div className="flex justify-center gap-12 text-gray-300">
              <a href="https://www.linkedin.com/in/nandinidevraj/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors z-10"><FaLinkedin size={32} /></a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors z-10"><FaGithub size={32} /></a>
              <a href="mailto:devarajnandini23@gmail.com" className="hover:text-violet-400 transition-colors z-10"><FaEnvelope size={32} /></a>
              {/* <a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors z-10"><FaGoogle size={32} /></a> */}
            </div>
            
            {/* SVG Data Flow Line */}
            <svg width="300" height="50" viewBox="0 0 300 50" className="absolute top-1/2 -translate-y-1/2 -z-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M25 25 C 75 10, 125 40, 175 25 S 250 10, 275 25" 
                stroke="#3B82F6" 
                strokeWidth="2"
                strokeOpacity="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;