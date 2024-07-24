import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaHome, FaUser, FaVideo, FaSignInAlt, FaBlog } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const admin = localStorage.getItem('admin')

  return (
    <nav className="fixed w-full bg-blue-900 bg-opacity-100 z-50 backdrop-blur-lg text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <MdMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Zohaib AI</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {[
                  { name: "Home", icon: <FaHome />, to: "/" },
                  { name: "About", icon: <FaUser />, to: "/about" },
                  { name: "Videos", icon: <FaVideo />, to: "/videos" },
                  { name: "Blogs", icon: <FaBlog />, to: "/blogs" },
                  
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 mr-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!admin ?
            <Link to={"/login"}>
              <button className="px-4 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-110">
                Login
              </button>
            </Link>
            :
            <Link to={"/admin"}>
              <div className="px-4 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-110">
              <LuLayoutDashboard />
              </div>
            </Link> 
            }
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="sm:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: "Home", icon: <FaHome />, to: "/" },
                { name: "About", icon: <FaUser />, to: "/about" },
                { name: "Videos", icon: <FaVideo />, to: "/videos" },
                { name: "Blogs", icon: <FaBlog />, to: "/blogs" },
                
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
