import React from 'react'

const MobileHeader = () => {
  return (
    <div className='lg:hidden flex justify-between items-center w-full px-5 md:px-10 py-7 border-b bg-[#191919] border-[#979797]/10'>
        <img src='/assets/shared/tablet/icon-hamburger.svg' className='h-4 w-fit'/>
        <img src='/assets/shared/desktop/logo.svg' className='h-6 w-fit'/>
        <img src='/assets/shared/desktop/icon-cart.svg' className='h-5 w-fit'/>
    </div>
  )
}

export default MobileHeader