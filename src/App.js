import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavbarWep from './pages/NavbarWeb/NavbarWep'
import Home from './pages/HomeBage/HomeBageWep'
import Posts from './pages/PostBage/Posts'
import AboutUs from './pages/AboutBage/AboutUs'
import ContectUs from './pages/ContectBage/Contectus'
import SinglePost from './pages/PostBage/singlePost';
import Footer from './pages/FooterWep/FooterWep';
import AddNewPost from './pages/PostBage/addNewPost'

function App() {
  return (
    <div>
      <NavbarWep />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/ContactUs" element={<ContectUs />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/AddNewPost" element={<AddNewPost />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App