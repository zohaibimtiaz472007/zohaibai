import React from 'react';
import { FaYoutube, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Zohaib AI</h3>
            <p className="text-gray-400">
              Web Developer | Graphic Designer | SEO Expert
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="https://www.youtube.com/@Zohaib_AI/featured" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-gray-400 hover:text-white transition" />
            </Link>
            <Link to="https://www.tiktok.com/@zohaibimtiaz911" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl text-gray-400 hover:text-white transition" />
            </Link>
            <Link to="https://github.com/zohaibimtiaz472007" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-400 hover:text-white transition" />
            </Link>
            <Link to="https://www.facebook.com/zohaib.imtiaz.3994" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-400 hover:text-white transition" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition">About</Link>
            <Link to="https://zohaibportfolio.vercel.app/" target='blank' className="text-gray-400 hover:text-white transition">Portfolio</Link>
          </div>
          <p className="mt-4 text-gray-400">
            &copy; {new Date().getFullYear()} Zohaib AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
