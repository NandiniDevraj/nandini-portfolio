import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialData = [
  {
    name: 'Mohammed azharudeen S',
    title: 'Senior Team Lead at Oracle Cerner',
    image: '/testimonials/test-2.png',
    quote: "I have had the pleasure of working with Nandini as one of my team member under my leadership. It became clear that she is an asset to any team as she brings strong technical skills in the healthcare sector along with compassion towards learning new things and keeping herself updated with the solutions in the market. Apart from the technical part, Nandini offers a great set of soft skills such as teamwork, communication, and help seeking behavior. She goes above and beyond to solve problems, and make sure to do so in the most uplifting and encouraging manner possible. Nandini is someone I can recommend without hesitation for any position that seeks someone with technical knowledge, a willingness to take on challenges, and excellent people skills. Can’t wait to see what she'll accomplish next!",
    
    linkedinUrl: 'https://www.linkedin.com/in/mohammed-azharudeen-s-b07141173/'
  },
  {
    name: 'Gopinath Ramanna',
    title: 'Application Support Lead_D365 F&O SCM_Business Applications',
    image: '/testimonials/test-1.png',
    quote: "I had the pleasure of working with Nandini Devaraj during her time at REVA University , where I served as a Project Coordinator. Throughout our collaboration, I was consistently impressed by her dedication, analytical skills, and ability to adapt to challenges. Nandini Devaraj demonstrated a strong work ethic and a keen ability to solve problems creatively. Whether it was handling complex assignments, collaborating with peers, or taking the initiative on projects, she always approached tasks with professionalism and enthusiasm. Her contributions were invaluable to our team, and I have no doubt that she will bring the same level of excellence to any future endeavor. I highly recommend Nandini Devaraj to anyone looking for a motivated and talented professional.She would be a great asset to any team!",
    
    linkedinUrl: 'https://www.linkedin.com/in/gopinath-ramanna-91ab7097/'
  },
  {
    name: 'Akash Sharma',
    title: 'Software Engineer II | Data Engineering | Python | PySpark | AWS | OCI | Real-Time ETL',
    image: '/testimonials/test-3.png',
    quote: "I would like to take a moment to highlight Nandini, a great professional in the fields of Artificial Intelligence (AI) and Machine Learning (ML). She hones great knowledge in this area, and her problem-solving skills are excellent. I had the pleasure of collaborating with Nandini on a project where we developed and implemented a predictive machine learning model using Python and Logistic Regression on health data. Her expertise played a crucial role in analyzing patient trends and optimizing resource allocation, leading to a 20% increase in operational efficiency and enhanced patient care outcomes. Nandini’s ability to approach complex challenges with innovative solutions was truly inspiring. She consistently shares her knowledge with the team, ensuring that everyone grows and excels in their roles. It is an honor to work with someone who not only stays ahead of the latest technologies but also meets every challenge with creativity and dedication. Thank you, Nandini, for your talent and for being such a role model in the AI and machine learning community!",
    
    linkedinUrl: 'https://www.linkedin.com/in/akash-sharma-as/'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Others Say<span className="text-blue-400">.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <motion.a
              key={index}
              href={testimonial.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
            >
              <div className="bg-[#1E293B] p-6 rounded-lg h-full relative overflow-hidden">
                <FaQuoteLeft className="absolute top-4 right-4 text-7xl text-slate-700/50" />
                
                {/* --- IDENTITY SECTION (MOVED TO TOP) --- */}
                <div className="flex items-center mb-6 relative z-10">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>

                {/* --- QUOTE SECTION (MOVED TO BOTTOM) --- */}
                <p className="relative z-10 text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;