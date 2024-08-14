import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Sliders from './components/Sliders'
import Products from './components/Products'
import LocomotiveScroll from 'locomotive-scroll';
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'


function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-black text-white '>
      <Navbar/>
      <Work/>
      <Sliders/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/> 
    </div>
  )
}

export default App