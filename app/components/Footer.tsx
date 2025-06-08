import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-black-secondary'>
        <div className='mt-16 lg:w-[80%] lg:mx-auto lg:px-0 relative bg-black-secondary px-5 md:px-10 py-10 lg:py-16 flex flex-col gap-10 items-center justify-center md:items-start'>
            <div className='absolute top-0 bg-primary w-24 h-[4px] left-0 md:left-10 lg:left-0 md:mx-0 right-0 mx-auto my-0'></div>
            <div className='flex flex-col items-center md:items-start gap-5 lg:flex-row lg:justify-between lg:items-center w-full'>
                <img src='/assets/shared/desktop/logo.svg' className='h-8 w-auto max-w-fit'/>
            <div className='flex flex-col md:flex-row gap-5 text-white items-center justify-center uppercase font-manrope text-[13px] leading-[25px] tracking-[2px]'>
                <NavLink to="/" className='hover:text-primary'>Home</NavLink>
                <NavLink to="/headphones" className='hover:text-primary'>Headphones</NavLink>
                <NavLink to="/speakers" className='hover:text-primary'>Speakers</NavLink>
                <NavLink to="/earphones" className='hover:text-primary'>Earphones</NavLink>
            </div>
            </div>
            <p className='text-center md:text-start body-text opacity-[50%] text-white lg:w-[50%]'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>

            <div className='flex flex-col gap-10 items-center md:flex-row md:justify-between md:w-full'>
                <p className='opacity-[50%] body-text text-white'>Copyright 2021. All Rights Reserved</p>

            <div className='flex gap-5 lg:mt-[-8rem]'>
                <NavLink to='#' className=''>
                    <img src='/assets/shared/desktop/icon-facebook.svg' className='h-5 w-auto'/>
                </NavLink>
                <NavLink to='#' className=''>
                    <img src='/assets/shared/desktop/icon-twitter.svg' className='h-5 w-auto'/>
                </NavLink>
                <NavLink to='#' className=''>
                    <img src='/assets/shared/desktop/icon-instagram.svg' className='h-5 w-auto'/>
                </NavLink>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer