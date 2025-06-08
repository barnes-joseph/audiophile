import React, { useState } from 'react'

const MobileHeader = ({setShowMenu, showMenu}: {setShowMenu: (value: boolean)=> void; showMenu: boolean;}) => {
  return (
      <div className='flex justify-between items-center w-full px-5 md:px-10 py-7 border-b bg-[#191919] border-[#979797]/10'>
          <button onClick={()=> setShowMenu(!showMenu)}>
            <img src='/assets/shared/tablet/icon-hamburger.svg' className='h-4 w-fit'/>
          </button>
          <img src='/assets/shared/desktop/logo.svg' className='h-6 w-fit'/>
          <img src='/assets/shared/desktop/icon-cart.svg' className='h-5 w-fit'/>
      </div> 
  )
}

export default MobileHeader