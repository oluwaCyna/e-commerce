import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBar1 from './common/HeaderBar1'
import HeaderBar2 from './common/HeaderBar2'
import NavBar from './common/NavBar'
import Home from './Home'
import Fashion from './Fashion'
import Blog from './Blog'
import Contact from './Contact'
import HeroSection from './common/HeroSection';

const Header = () => {
  return (
    <BrowserRouter>
    <div>
        <HeaderBar1 />
        <HeaderBar2 />
        <NavBar />
        <HeroSection />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/fashion' element={<Fashion />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>  
    </div>
    </BrowserRouter>
  )
}

export default Header