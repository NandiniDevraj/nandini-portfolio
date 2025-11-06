import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Define the structure of our neural network for the SVG
  const layers = [
    { count: 4, x: 30 },   // Input layer
    { count: 5, x: 80 },   // Hidden layer 1
    { count: 5, x: 130 },  // Hidden layer 2
    { count: 3, x: 180 },  // Output layer
  ];

  return (
    <section id="about" className="pb-24">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 items-center"
        >
          {/* Animated Neural Network Graphic */}
          <div className="hidden md:flex justify-center items-center md:col-span-1">
            <svg width="250" height="250" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Draw connections (synapses) */}
              {layers.slice(0, -1).map((layer, i) =>
                Array.from({ length: layer.count }).map((_, j) =>
                  Array.from({ length: layers[i + 1].count }).map((_, k) => (
                    <motion.line
                      key={`${i}-${j}-${k}`}
                      x1={layer.x}
                      y1={(210 / (layer.count + 1)) * (j + 1)}
                      x2={layers[i + 1].x}
                      y2={(210 / (layers[i + 1].count + 1)) * (k + 1)}
                      stroke="#3B82F6"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1,
                        delay: Math.random() * 2, // Random delay for a dynamic feel
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 3,
                      }}
                    />
                  ))
                )
              )}

              {/* Draw nodes */}
              {layers.map((layer) =>
                Array.from({ length: layer.count }).map((_, j) => (
                  <motion.circle
                    key={`${layer.x}-${j}`}
                    cx={layer.x}
                    cy={(210 / (layer.count + 1)) * (j + 1)}
                    r="6"
                    fill="#E2E8F0"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 1.5,
                    }}
                  />
                ))
              )}
            </svg>
          </div>

          {/* Narrative Text */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              About Me
              <span className="text-blue-400">.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I am a Research and AI/ML Engineer with over 3.5 years of experience, specializing in the intersection of healthcare technology and advanced artificial intelligence. With a Master's in AI, my work focuses on building intelligent systems that can perceive, learn, and act.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I have a proven track record of leveraging machine learning, NLP, and reinforcement learning to solve complex challenges, from designing predictive models in Python that increased patient care efficiency by 20% at Oracle Cerner to developing a novel VR welding simulation in Unity that cut training time by 70%.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;