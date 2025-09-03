import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'languages' | 'frameworks' | 'tools'>('languages');

  const categories = [
    { id: 'languages' as const, label: 'Languages', icon: 'Code' },
    { id: 'frameworks' as const, label: 'Frameworks', icon: 'Layers' },
    { id: 'tools' as const, label: 'Tools', icon: 'Wrench' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Code;
    return IconComponent;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-full p-2 inline-flex">
            {categories.map((category) => {
              const IconComponent = getIcon(category.icon);
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={20} />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIcon(skill.icon);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-white"
                    >
                      <IconComponent size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-600">{skill.level}%</div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full relative"
                    >
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-white/30 rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="flex justify-between items-center mt-4 text-sm">
                  <span className="text-gray-600">Proficiency</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                        className={`w-2 h-2 rounded-full ${
                          i < Math.floor(skill.level / 20)
                            ? 'bg-gradient-to-r from-cyan-500 to-pink-500'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-50 to-pink-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly learning new frameworks, 
              tools, and best practices to stay at the forefront of web development. 
              My goal is to create exceptional user experiences with clean, efficient code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;