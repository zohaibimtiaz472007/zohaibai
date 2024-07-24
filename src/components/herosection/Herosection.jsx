import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 opacity-50 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Zohaib Ai
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the future of AI technology with Zohaib Ai. Join us in exploring the endless possibilities of artificial intelligence and machine learning.
        </motion.p>
        <motion.div 
          className="flex justify-center items-center space-x-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, yoyo: Infinity }}
        >
          <Link to = {'https://www.youtube.com/@Zohaib_AI/featured'} target='_blank'>
            <FaYoutube className="text-6xl animate-pulse" />
          </Link>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Scroll down to learn more
      </motion.div>
    </section>
  );
};

export default HeroSection;
