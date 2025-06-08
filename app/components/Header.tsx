import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
<div className='hidden lg:block bg-[#191919]'>
        <div className='w-[80%] max-w-[1200px] px-10 mx-auto flex justify-between items-center py-7 border-b border-[#979797]/10'>
            <img src='/assets/shared/desktop/logo.svg' className='h-6 w-fit'/>
            <div className='flex gap-5 text-white font-manrope font-bold uppercase'>
                <NavLink to="/" className='hover:text-primary'>Home</NavLink>
                <NavLink to="/headphones" className='hover:text-primary'>Headphones</NavLink>
                <NavLink to="/speakers" className='hover:text-primary'>Speakers</NavLink>
                <NavLink to="/earphones" className='hover:text-primary'>Earphones</NavLink>
            </div>
            <img src='/assets/shared/desktop/icon-cart.svg' className='h-5 w-fit'/>

        </div>
    </div>  )
}

export default Header