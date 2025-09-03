import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Interests', href: '#interests' },
    { label: 'References', href: '#references' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sokleap-Seng', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sokleap-seng-567b5a344/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://t.me/sok_leap_SL', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Sokleap Seng
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Passionate front-end developer crafting beautiful, functional, and user-friendly web experiences. 
              Always learning, always growing, always coding with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block text-red-400"
              >
                <Heart className="inline w-4 h-4 fill-current" />
              </motion.span>
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Built with:</span>
              <div className="flex items-center space-x-2">
                {['React', 'TypeScript', 'Tailwind'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-cyan-400 border border-cyan-400/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <div className="text-sm text-gray-400 space-y-2">
              <p>📧 sokleaps808@gmail.com</p>
              <p>📱 +855 96 287 8865</p>
              <p>📍 Phnom Penh, Cambodia</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>© {currentYear} Sokleap Seng. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center space-x-1">
              <span>Designed & Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-400"
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              <span>and</span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-yellow-400"
              >
                <Coffee className="w-4 h-4" />
              </motion.span>
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;