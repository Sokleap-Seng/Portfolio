import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Front-End Developer 💻', 'Vue.js Expert 🚀', 'UI/UX Lover 🎨'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    if (displayText.length < currentTitle.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sokleap-Seng', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sokleap-seng-567b5a344/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://t.me/sok_leap_SL', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="/images/leap.jpg"
                  alt="Sokleap Seng"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-pink-500 text-white p-3 rounded-full shadow-lg"
              >
                💻
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-cyan-500 text-white p-3 rounded-full shadow-lg"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                  Sokleap
                </span>
              </motion.h1>
              
              <div className="h-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl lg:text-3xl font-semibold text-gray-700 min-h-[2.5rem]"
                >
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </motion.h2>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                Passionate about creating beautiful, functional, and user-friendly web experiences. 
                I love turning ideas into reality with clean code and modern technologies.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <ExternalLink className="inline-block w-5 h-5 mr-2" />
                View My Work
              </motion.button>
              
              <motion.a
                href='/images/CV_Sokleap_SENG.pdf'
                download="CV_Sokleap_SENG.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                <Download className="inline-block w-5 h-5 mr-2" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-cyan-600 hover:shadow-xl transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;