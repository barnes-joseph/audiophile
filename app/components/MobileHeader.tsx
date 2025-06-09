import React from 'react'

const MobileHeader = ({setShowMenu, showMenu, showCart, setShowCart}: {setShowMenu: (value: boolean)=> void; setShowCart: (value: boolean)=> void; showMenu: boolean; showCart: boolean;}) => {
  return (
      <div className='lg:hidden flex justify-between items-center w-full px-5 md:px-10 py-7 border-b bg-[#191919] border-[#979797]/10'>
          <button onClick={()=> setShowMenu(!showMenu)}>
            <img src='/assets/shared/tablet/icon-hamburger.svg' className='h-4 w-fit'/>
          </button>
          <img src='/assets/shared/desktop/logo.svg' className='h-6 w-fit'/>
          <button onClick={()=>{setShowCart(!showCart)}}>
            <img src='/assets/shared/desktop/icon-cart.svg' className='h-5 w-fit'/>
          </button>
      </div> 
  )
}

export default MobileHeader