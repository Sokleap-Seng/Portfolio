import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { interests } from '../../data/portfolio';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Interests: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  React.useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % interests.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % interests.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + interests.length) % interests.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section id="interests" className="py-20 bg-gradient-to-br from-pink-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Interests</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What I love doing when I'm not coding
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform-gpu border border-gray-100"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="text-6xl mb-6 text-center"
              >
                {interest.emoji}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-cyan-600 transition-colors duration-300">
                {interest.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {interest.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="mt-6 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transform origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="lg:hidden">
          <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mx-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300, rotateY: -90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: 90 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="text-center"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-8xl mb-6"
                >
                  {interests[currentIndex].emoji}
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {interests[currentIndex].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {interests[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                onClick={prevSlide}
                className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <div className="flex space-x-2">
                {interests.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-cyan-500 to-pink-500 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextSlide}
                className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;