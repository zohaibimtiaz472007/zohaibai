import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Videos from "./pages/Videos";
import Footer from './components/Footer/Footer'
import About from './pages/About'
import BlogPage from "./pages/Blogs";
import LoginPage from "./pages/Login";
import AdminDashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import CreateBlog from "./pages/CreateBlog";
import Bloginfo from './pages/Bloginfo'



const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element = {<BlogPage/>}/>
          <Route path="/login" element = {<LoginPage/>}/>
          <Route path="/bloginfo/:id" element = {<Bloginfo/>}/>
          <Route path="/createblog" element = {<CreateBlog/>} />
          <Route path="/admin" element = {
            <ProtectedRouteForAdmin>
              <AdminDashboard/>
            </ProtectedRouteForAdmin>
            }/>
        </Routes>
        <Footer/>
        <Toaster/>
      </BrowserRouter>
    </div>
  );
};

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "imtiazzohaib767@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}
