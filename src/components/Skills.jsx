import React from 'react';
import { motion } from 'framer-motion';
// Import all the icons we need
import {
  SiPython, SiPytorch, SiTensorflow, SiHuggingface, SiOpencv, SiSpacy, SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiOracle, SiPandas, SiNumpy,
   //SiPowerbi, SiScikitLearn
   SiGit, SiUnity, SiReact
} from 'react-icons/si'; // <-- Removed SiMatplotlib
import { FaBrain, FaCode, FaChartPie, FaTools, FaDatabase, FaVrCardboard, FaFileExcel, FaFileWord, FaFilePowerpoint, FaFilePdf, FaEye, FaChartBar } from 'react-icons/fa'; // <-- Added FaChartBar

// This "dictionary" maps a skill name (string) to its icon component
const skillIconMap = {
  'PyTorch': <SiPytorch />,
  'TensorFlow': <SiTensorflow />,
  //'Scikit-learn': <SiScikitLearn />,
  'Hugging Face': <SiHuggingface />,
  'ML-Agents': <SiUnity />,
  'OpenCV': <SiOpencv />,
  'spaCy': <SiSpacy />,
  'Reinforcement Learning': <FaBrain />,
  'NLP': <FaBrain />,
  'Computer Vision': <FaEye />,
  'Python': <SiPython />,
  'SQL': <FaDatabase />,
  'C#': <FaCode />, 
  'JavaScript': <SiJavascript />,
  'HTML/CSS': <SiHtml5 />,
  'C++': <SiCplusplus />,
  'C': <SiC />,
  'Oracle': <SiOracle />,
  'DBMS': <FaDatabase />,
  'RDBMS': <FaDatabase />,
  'Pandas': <SiPandas />,
  'NumPy': <SiNumpy />,
  'Matplotlib': <FaChartBar />, // <-- USE FaChartBar as a fallback
  //'Power BI': <SiPowerbi />,
  'Seaborn': <FaChartPie />,
  'PyPDF2': <FaFilePdf />,
  'Git': <SiGit />,
  'Unity': <SiUnity />,
  'VR': <FaVrCardboard />,
  'Microsoft Excel': <FaFileExcel />,
  'Word': <FaFileWord />,
  'PowerPoint': <FaFilePowerpoint />,
  'React': <SiReact />,
};

const skillsData = [
  {
    category: 'AI / Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'ML-Agents', 'OpenCV', 'spaCy', 'Reinforcement Learning', 'NLP', 'Computer Vision']
  },
  {
    category: 'Languages & Databases',
    skills: ['Python', 'SQL', 'C#', 'JavaScript', 'HTML/CSS', 'C++', 'C', 'Oracle', 'DBMS', 'RDBMS']
  },
  {
    category: 'Data & Visualization',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Seaborn', 'PyPDF2']
  },
  {
    category: 'Development & Tools',
    skills: ['Git', 'Unity', 'VR', 'Microsoft Excel', 'Word', 'PowerPoint']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills<span className="text-blue-400">.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((categoryItem, index) => (
            <motion.div
              key={index}
              className="bg-[#1E293B] p-6 rounded-lg border border-slate-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-violet-400 mb-4">
                {categoryItem.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryItem.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="flex items-center gap-2 bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skillIconMap[skill] || <FaCode />} 
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;