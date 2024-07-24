import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/myContext';
import BlogLoader from '../VideoLoader/VideoLoader';

const HomePageBlogs = () => {
  const context = useContext(myContext);
  const { getAllBlog, loading } = context;

  const displayedBlogs = getAllBlog.slice(0, 3); // Display only the first 3 blogs

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Latest Blog Posts</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Check out the latest posts and articles from our blog.
          </p>
        </div>
        {loading ? (
          <BlogLoader/>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((item, index) => {
              const { thumbnail, id } = item;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={thumbnail}
                    alt="image"
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.blogs.title}</h3>
                  <p className="text-gray-700 mb-4">Zohaib Ai</p>
                  <Link to={`/bloginfo/${id}`} className="text-blue-500 hover:text-blue-700 font-medium">Read More</Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePageBlogs;
