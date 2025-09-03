import React from 'react';
import { motion } from 'framer-motion';
import { personalityTraits } from '../../data/portfolio';
import { Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cyan-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  My name is Sokleap SENG,I'm a student at Passerelles Numériques Cambodia(PNC), I study Web development, in Phnom Penh, Cambodia. 
                  My journey into web development started during my university years when I first discovered 
                  the magic of turning ideas into interactive digital experiences.
                </p>
                <p>
                  What excites me most about front-end development is the perfect blend of creativity and 
                  logic. I love the challenge of creating beautiful, intuitive interfaces that not only 
                  look great but also provide seamless user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, 
                  or planning my next travel adventure. I believe that diverse experiences fuel creativity 
                  and help me bring fresh perspectives to my work.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center text-gray-600">
                  <MapPin size={20} className="mr-2 text-cyan-500" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={20} className="mr-2 text-pink-500" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Personality Traits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Me Tick</h3>
              <div className="grid grid-cols-2 gap-4">
                {personalityTraits.map((trait, index) => (
                  <motion.div
                    key={trait.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{trait.emoji}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">{trait.title}</h4>
                    <p className="text-sm text-gray-600">{trait.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;