import React from 'react'
import HeroSection from '../components/herosection/Herosection'
import Stats from '../components/states/States'
import HomePageBlogs from '../components/HomePageBlogs/HomePageBlogs'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Stats/>
      <HomePageBlogs/>
    </div>
  )
}

export default Home
