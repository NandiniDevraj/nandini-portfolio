import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaBrain, FaLink } from 'react-icons/fa';
import { SiPython, SiScikitlearn, SiLangchain, SiUnity, SiTensorflow } from 'react-icons/si';

// All 3 projects from your resume with relevant details
const projectsData = [
  {
    title: 'VR Welding Simulation with Reinforcement Learning',
    shortDescription: 'An AI-driven VR training environment for welding tasks.',
    longDescription: 'Developed a high-fidelity VR simulation in Unity to train an AI agent using Reinforcement Learning (PPO), cutting training time by 70% and achieving over 85% accuracy.',
    technologies: [
      { name: 'Unity', icon: <SiUnity /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'RL', icon: <FaBrain /> },
      { name: 'VR', icon: <FaLink /> },
    ],
    link: '/Welding Simulation in UNITY Report Final.pdf', // Links to your research paper
    linkText: 'Read Paper',
    linkIcon: <FaLink />,
  },
  {
    title: 'LLM-based Medical Report Explainer & Q&A',
    shortDescription: 'A tool to simplify complex medical documents for patients.',
    longDescription: 'Built a medical report explainer using LLaMA-2 and LangChain-RAG, achieving >88% layman readability and enabling a voice-based Q&A assistant with Whisper ASR.',
    technologies: [
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'LLM', icon: <FaBrain /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'RAG', icon: <FaLink /> },
    ],
    link: 'https://github.com/your-repo-link', // <-- UPDATE THIS LINK
    linkText: 'View on GitHub',
    linkIcon: <FaGithub />,
  },
  {
    title: 'Fake News Detection with NLP',
    shortDescription: 'A machine learning pipeline to identify fake news articles.',
    longDescription: 'Engineered an NLP pipeline using TF-IDF and Scikit-learn classifiers (Logistic Regression, Passive Aggressive) to classify text with over 92% accuracy.',
    technologies: [
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'NLP', icon: <FaBrain /> },
    ],
    link: 'https://github.com/your-repo-link', // <-- UPDATE THIS LINK
    linkText: 'View on GitHub',
    linkIcon: <FaGithub />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects<span className="text-violet-400">.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group [perspective:1000px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-80 w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the Card */}
                <div className="absolute inset-0 bg-[#1E293B] p-6 flex flex-col justify-between rounded-xl border border-slate-700">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.shortDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech.name} className="flex items-center gap-2 bg-slate-700 text-slate-300 text-xs font-medium px-2 py-1 rounded-full">
                        {tech.icon} {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back of the Card */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-t from-blue-600 to-violet-600 p-6 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-white mb-4">{project.longDescription}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    {project.linkIcon} {project.linkText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;