import React from 'react';
import { motion } from 'framer-motion';
import TechIcon from './TechIcon';
import ScrollingImageGallery from './ScrollingImageGallery';
// --- ADDED NEW ICONS ---
import { SiUnity, SiPython, SiTensorflow, SiJira, SiGit, SiPytorch, SiReact, SiJavascript, SiHtml5, SiCss3, SiMeta, SiOculus, SiTableau } from 'react-icons/si'; 
import { FaDatabase, FaCode, FaChartBar } from 'react-icons/fa';

const experienceData = [
  // --- LATEST EXPERIENCE ---
  {
    role: 'Graduate Research Assistant',
    organization: 'Illinois Institute of Technology',
    duration: 'Jan 2025 – Present',
    description: [
        'Developing a high-fidelity VR welding simulation in Unity powered by reinforcement learning (ML-Agents, TensorFlow), achieving over 85% trajectory accuracy and cutting training time by 70%.',
        'Integrating real-time sensor data from NOVA SenseGlove and Oculus Quest 3 to simulate human-like dexterity and create a scalable training solution.',
        'Engineering and implementing novel reward functions within a deep neural network to guide agent learning and accelerate skill acquisition in complex motor tasks.'
    ],
    technologies: [
      { icon: SiUnity, label: 'Unity' },
      { icon: FaCode, label: 'C#' },
      { icon: SiPython, label: 'Python' },
      { icon: SiTensorflow, label: 'TensorFlow' },
      { icon: SiMeta, label: 'Meta' },
      { icon: SiOculus, label: 'Oculus' },
    ],
    images: ['/iit-1.png', '/ra-2.png', '/ra-1.png']
  },
  // --- ORACLE CERNER EXPERIENCE ---
  {
    role: 'Software Engineer II (Machine Learning)',
    organization: 'Oracle Cerner',
    duration: 'Nov 2022 – Jun 2024',
    description: [
        'Architected and deployed a predictive machine learning model using Python and Logistic Regression on complex health data, directly leading to a 20% increase in patient care operational efficiency.',
        'Engineered and optimized over 500 custom reports, stored procedures, and ETL scripts, boosting system efficiency and increasing team productivity by 30%.',
        'Led the end-to-end ML lifecycle, from data extraction and transformation to model evaluation, ensuring robust performance and alignment with clinical needs.'
    ],
    technologies: [
      { icon: SiPython, label: 'Python' },
      { icon: FaDatabase, label: 'DBMS & SQL' },
      { icon: SiGit, label: 'Git' },
      { icon: SiJira, label: 'Jira' },
      { icon: FaChartBar, label: 'Power BI' },
    ],
    images: ['/cerner-1.png', '/cerner-2.png']
  },
  {
    role: 'Software Engineer I (Data Analysis & Cerner Millenium)',
    organization: 'Cerner Healthcare Solutions',
    duration: 'Jan 2021 – Nov 2022',
    description: [
      'Developed and optimized over 200 custom reports, stored procedures, and ETL scripts, boosting system efficiency by 30%.',
      'Conducted SQL query optimization and performance tuning for large-scale Oracle databases.',
      'Worked extensively with electronic health records (EHR), clinical, and financial data.'
    ],
    technologies: [
      
      { icon: FaDatabase, label: 'DBMS & SQL' },
      { icon: SiGit, label: 'Git' },
      { icon: SiTableau, label: 'Tableau' },
      { icon: FaChartBar, label: 'Power BI' },
    ],
    images: ['/cerner-4.png','/cerner-3.png']
  },
  // --- KIRUSA INTERNSHIP ---
  {
    role: 'Software Engineering Intern',
    organization: 'Kirusa Software Private Limited',
    duration: 'Jan 2020 – Jun 2020',
    description: [
        'Developed and shipped key front-end features for the Instavoice and DotGo RCS billing web applications using ReactJS, enhancing user experience for thousands of clients.',
        'Engineered reusable, high-performance UI components with JavaScript, HTML, and CSS, resulting in a 15% reduction in page load times.',
        'Collaborated in an Agile development environment, using Git for version control and participating in code reviews to maintain high-quality standards.'
    ],
    technologies: [
      { icon: SiReact, label: 'React' },
      { icon: SiJavascript, label: 'JavaScript' },
      { icon: SiHtml5, label: 'HTML5' },
      { icon: SiCss3, label: 'CSS3' },
      { icon: SiGit, label: 'Git' },
    ],
    images: ['/kirusa-1.png', '/kirusa-2.png']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 overflow-hidden">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-20">
          Work Experience<span className="text-violet-400">.</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-blue-400/30 hidden lg:block"></div>

          {experienceData.map((item, index) => (
            <div key={index} className="relative mb-24">
              <motion.div
                className="lg:flex items-center w-full"
                style={{ flexDirection: index % 2 === 1 ? 'row-reverse' : 'row' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.role}</h3>
                  <p className="mb-4 text-gray-400">{item.organization} | {item.duration}</p>
                  <ul className="list-disc ml-5 text-gray-300 space-y-2">
                    {item.description.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                  <div className="mt-6 flex items-center gap-4 flex-wrap">
                    {item.technologies.map((tech, i) => <TechIcon key={i} icon={tech.icon} label={tech.label} />)}
                  </div>
                </div>

                <div className="hidden lg:flex justify-center lg:w-1/2 p-8">
                  <ScrollingImageGallery images={item.images} />
                </div>
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full ring-8 ring-[#1A253C] hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;