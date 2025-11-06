import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  return (
    <section id="research" className="py-24">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Research Spotlight<span className="text-violet-4for00">.</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#1E293B] p-8 rounded-lg shadow-lg border border-slate-700">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Abstract: Reinforcement Learning for Training Virtual Agents in Welding Simulations
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This research addresses the high cost, safety risks, and material waste associated with traditional welding training by developing a VR simulation in Unity. The system leverages reinforcement learning to train an AI agent to perform complex welding tasks, aiming to accelerate skill acquisition and reduce training overhead. The core of this work lies in creating a robust simulation that combines realistic physics with an intelligent agent trained via the Proximal Policy Optimization (PPO) algorithm within the ML-Agents framework.
            </p>

            <div className="mt-6 border-t border-gray-700 pt-6">
              <h4 className="text-xl font-semibold mb-4">Technical Architecture & Methodology</h4>
              <ul className="list-disc ml-5 space-y-3 text-gray-300">
                <li>
                  <strong>Immersive Environment:</strong> The simulation was built in Unity and deployed on an Oculus Quest 3, providing a fully immersive training environment with realistic visual effects, including spark generation, dynamic lighting for the welding arc, and simulated liquid metal flow.
                </li>
                <li>
                  <strong>Human-in-the-Loop Data Acquisition:</strong> Haptic data from the SenseGlove was integrated to capture the nuanced kinematics of human hand movements. This data was crucial for establishing a baseline and shaping the agent's learning objectives.
                </li>
                <li>
                  <strong>Reinforcement Learning Framework:</strong> An agent was trained using the ML-Agents PPO algorithm. The key innovation was the design of a multi-variable reward function that penalized deviations in welding speed, angle, and distance from the target trajectory, thereby teaching the agent not just to complete the task, but to do so with expert precision.
                </li>
              </ul>
              <a 
                href="/Welding Simulation in UNITY Report Final.pdf" // This links to the PDF in your public folder
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 font-semibold text-violet-400 hover:underline"
              >
                Read the Full Technical Report →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;