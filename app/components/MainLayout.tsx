import React from 'react'
import Footer from './Footer'
import About from './About'
import { Outlet } from 'react-router'
import MobileHeader from './MobileHeader'
import Header from './Header'

const MainLayout = () => {
  return (
<div>
      <Header/>
      <MobileHeader/>
      <Outlet/>
      <div className='mt-20'>
        <About/>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout