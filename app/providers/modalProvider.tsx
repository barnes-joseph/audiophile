import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import Cart from '~/components/Cart';
import MobileMenu from '~/components/MobileMenu';
import ThankYou from '~/components/ThankYou';

interface ModalState{
  showMenu: boolean;
  showCart: boolean;
  showThankYou: boolean;
  setShowMenu: (value: boolean) => void;
  setShowCart: (value: boolean) => void;
  setShowThankYou: (value: boolean) => void;
  dismissAllModals: () => void;
  setTriggerId: (value: string) => void;
  triggerId: string;
}

const ModalStateContext = createContext<ModalState>({} as ModalState);

const ModalProvider = ({children}: {children: ReactNode}) => {
const [showMenu, setShowMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [triggerId, setTriggerId] = React.useState('');

  const dismissAllModals = () => {
    setShowCart(false);
    setShowMenu(false);
    setShowThankYou(false);
    setTriggerId('');
  }

return (
    <ModalStateContext.Provider value={{ showCart, showMenu, showThankYou, setShowCart, setShowMenu, setShowThankYou, dismissAllModals, setTriggerId, triggerId }}>
    {children}
        <div className={`transition-all duration-300 absolute w-full h-full left-0 right-0 top-[5rem] z-20 bg-black/40 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <MobileMenu/>
        </div>
        <div className={`flex md:justify-end md:p-10 transition-all p-5 duration-300 absolute w-full h-full left-0 right-0 top-[5rem] z-20 bg-black/40 ${showCart ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className={`w-full lg:w-[80%] lg:max-w-[1200px] lg:mx-auto lg:flex md:flex md:justify-end lg:px-10 `}>
                <Cart/>
            </div>
        </div>
        <div className={`transition-all flex items-center justify-center p-5 duration-300 fixed w-full h-[100vh] inset-0 left-0 right-0 top-0 bottom-0 z-20 bg-black/40 ${showThankYou ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <ThankYou/>
        </div>
    </ModalStateContext.Provider>
  );}

export default ModalProvider;

export const useModal = () => useContext(ModalStateContext);
