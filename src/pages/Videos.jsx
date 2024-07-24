import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Loader from '../components/loader/Loader';
import BlogLoader from '../components/VideoLoader/VideoLoader';

const API_KEY = 'AIzaSyBrly1bE0ldu5bCESPGtnlCTxDQybgxELg'; // Replace with your actual YouTube API key
const CHANNEL_ID = 'UC8G74mNQ4pDWzIsvi5Gj4yg'; // Replace with your actual YouTube channel ID

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState('');

  const fetchVideos = async (pageToken = '') => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=9&pageToken=${pageToken}&type=video&key=${API_KEY}`
      );
      const data = await response.json();
      setVideos((prevVideos) => [...prevVideos, ...data.items]);
      setNextPageToken(data.nextPageToken);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  if (loading) {
    return <BlogLoader/> ; // Optionally add a loader or skeleton screen here
  }

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">All Videos</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300">
            Explore all the videos from Zohaib Ai's YouTube channel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id.videoId}
              className="flex flex-col items-start p-4 bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="rounded-lg mb-4 w-full"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{video.snippet.title}</h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow">{video.snippet.description}</p>
              </div>
              <button
                className="px-4 py-2 rounded-md bg-yellow-400 text-blue-800 font-bold hover:bg-yellow-500 transition absolute bottom-4 left-4"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank')}
              >
                Watch Now
              </button>
            </motion.div>
          ))}
        </div>
        {nextPageToken && (
          <div className="text-center mt-8">
            <button
              className="px-8 py-4 rounded-md bg-red-600 text-white font-bold text-xl hover:bg-red-700 transition transform hover:scale-105"
              onClick={loadMoreVideos}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Videos;
