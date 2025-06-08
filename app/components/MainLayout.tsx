import React from 'react'
import Footer from './Footer'
import About from './About'
import { Outlet } from 'react-router'
import MobileHeader from './MobileHeader'
import Header from './Header'
import MobileMenu from './MobileMenu'

const MainLayout = () => {
  const [showMenu, setShowMenu] = React.useState(false)
  return (
<div className='relative'>
      <Header/>
      <MobileHeader showMenu={showMenu} setShowMenu={setShowMenu}/>
      <Outlet/>
      <div className='mt-20'>
        <About/>
        <Footer/>
      </div>
      <div className={`transition-all duration-300 absolute w-full h-full left-0 right-0 top-[5rem] z-20 bg-black/40 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={()=> setShowMenu(false)}>
        <MobileMenu/>
      </div>
    </div>
  )
}

export default MainLayout