import React from 'react'

const About = () => {
  return (
    <div className='px-5 lg:px-10 lg:flex lg:w-[80%] lg:max-w-[1200px] lg:mx-auto lg:gap-5'>
        <img src='/assets/shared/mobile/image-best-gear.jpg' className='w-full h-auto rounded-lg md:hidden'/>
        <img src='/assets/shared/tablet/image-best-gear.jpg' className='w-full h-auto rounded-lg hidden md:block lg:hidden'/>
        <div className='flex flex-col lg:my-auto lg:!w-[50%] lg:shrink-0 lg:items-start'>
            <span className='uppercase text-black font-manrope text-[28px] mt-10 block tracking-[1px] text-center lg:text-start lg:w-[80%] lg:mx-auto'>bringing you the <br className='md:hidden lg:block'/> <span className='text-primary'>best</span> <br className='hidden md:block lg:hidden'/> audio gear</span>
            <p className='text-center lg:text-start body-text opacity-[50%] mt-10 md:w-[80%] md:mx-auto'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <div className='flex-1 hidden lg:block'>
            <img src='/assets/shared/desktop/image-best-gear.jpg' className='w-full h-auto rounded-xl'/>
        </div>
    </div>
  )
}

export default About