import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <HeroSection />
      <Projects />
      <Footer />
    </div>
  )
}

export default App