import React, { useEffect, useState } from 'react';
import { FaVideo, FaUsers, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Loader from '../loader/Loader';
import BlogLoader from '../VideoLoader/VideoLoader';

const API_KEY = 'AIzaSyBrly1bE0ldu5bCESPGtnlCTxDQybgxELg'; // Replace with your actual YouTube API key
const CHANNEL_ID = 'UC8G74mNQ4pDWzIsvi5Gj4yg'; // Replace with your actual YouTube channel ID

const Stats = () => {
  const [stats, setStats] = useState({ totalVideos: 0, totalSubscribers: 0, totalViews: 0 });
  const [popularVideos, setPopularVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelResponse.json();
        if (channelData.items.length > 0) {
          const statistics = channelData.items[0].statistics;
          setStats({
            totalVideos: statistics.videoCount,
            totalSubscribers: statistics.subscriberCount,
            totalViews: statistics.viewCount,
          });
        }

        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=5&order=viewCount&type=video&key=${API_KEY}`
        );
        const videosData = await videosResponse.json();
        setPopularVideos(videosData.items);

      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubscribe = () => {
    window.open(`https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`, '_blank');
  };

  if (loading) {
    return <BlogLoader/>; // Optionally add a loader or skeleton screen here
  }

  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Channel Statistics
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300">
            Here are the latest stats from Zohaib Ai's YouTube channel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            className="flex flex-col items-center p-8 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaVideo className="text-6xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{stats.totalVideos}</h3>
            <p className="text-lg text-gray-300">Total Videos</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-8 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FaUsers className="text-6xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{stats.totalSubscribers}</h3>
            <p className="text-lg text-gray-300">Total Subscribers</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-8 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaEye className="text-6xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{stats.totalViews}</h3>
            <p className="text-lg text-gray-300">Total Views</p>
          </motion.div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Popular Videos
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300">
            Check out some of the most popular videos on Zohaib Ai's YouTube channel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularVideos.map((video) => (
            <motion.div
              key={video.id.videoId}
              className="flex flex-col items-center p-4 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="text-xl font-bold mb-2">{video.snippet.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{video.snippet.description}</p>
              <div className="flex justify-between w-full">
                <button
                  className="px-4 py-2 rounded-md bg-yellow-400 text-blue-800 font-bold hover:bg-yellow-500 transition"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank')}
                >
                  Watch Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 rounded-md bg-red-600 text-white font-bold text-xl hover:bg-red-700 transition transform hover:scale-105"
            onClick={handleSubscribe}
          >
            Subscribe to Zohaib AI
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
