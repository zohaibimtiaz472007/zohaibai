import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase/FirebaseConfig";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    if (!email || !password) {
      return toast.error("All Fields are Required");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.error(error.message); // Pass the error message instead of the error object
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Email
            </label>
            <div className="flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="username"
                className="bg-transparent focus:outline-none w-full"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="bg-transparent focus:outline-none w-full"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button
            onClick={login}
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
