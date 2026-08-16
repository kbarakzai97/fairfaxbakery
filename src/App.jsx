import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Catering from './pages/Catering'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/catering" element={<Catering />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
