import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';
import { Link } from 'react-router-dom';
import BlogLoader from '../components/VideoLoader/VideoLoader';

const BlogPage = () => {
  const context = useContext(myContext);
  const { getAllBlog, loading } = context;
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blogs based on the search term
  const filteredBlogs = getAllBlog.filter((item) =>
    item.blogs.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Blog Posts</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Stay updated with the latest posts and articles on various topics.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search Here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <BlogLoader/>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((item, index) => {
                const { thumbnail, id, date } = item;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={thumbnail}
                      alt="thumbnail"
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.blogs.title}</h3>
                    <p className="text-gray-700 mb-4">Zohaib Ai</p>
                    <Link to={`/bloginfo/${id}`} className="text-blue-500 hover:text-blue-700 font-medium">Read More</Link>
                  </div>
                );
              })
            ) : (
              <p className="text-center col-span-full text-gray-500">No blog posts found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
