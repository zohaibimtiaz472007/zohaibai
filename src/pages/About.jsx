import React from 'react';
import { FaPlay, FaUsers, FaTrophy } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            About Zohaib AI's Channel
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300">
            Welcome to Zohaib AI's YouTube channel, where we share the best tips and tutorials on web development, graphic design, and SEO.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-8 bg-blue-800 rounded-lg shadow-lg">
            <FaPlay className="text-6xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Web Development Tutorials</h3>
            <p className="text-lg text-gray-300 text-center">
              Learn how to build modern web applications with our step-by-step tutorials.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-blue-800 rounded-lg shadow-lg">
            <FaTrophy className="text-6xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Graphic Design Tips</h3>
            <p className="text-lg text-gray-300 text-center">
              Discover tips and tricks for creating stunning graphics and designs.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-blue-800 rounded-lg shadow-lg">
            <FaUsers className="text-6xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">SEO Strategies</h3>
            <p className="text-lg text-gray-300 text-center">
              Learn how to optimize your website and content to rank higher in search results.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            What You'll Find on This Channel
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300">
            Our channel covers a wide range of topics to help you succeed in your digital endeavors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">In-Depth Tutorials</h3>
            <p className="text-lg text-gray-300 mb-4">
              We provide detailed tutorials on web development, graphic design, and SEO, ensuring you have all the knowledge you need to excel.
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Comprehensive guides on modern web development technologies.</li>
              <li>Creative graphic design projects and techniques.</li>
              <li>Effective SEO practices and strategies.</li>
            </ul>
          </div>
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Community Engagement</h3>
            <p className="text-lg text-gray-300 mb-4">
              Join our community of like-minded individuals who are passionate about web development, graphic design, and SEO.
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Engage with us through comments and feedback.</li>
              <li>Participate in live streams and Q&A sessions.</li>
              <li>Collaborate and network with other community members.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
