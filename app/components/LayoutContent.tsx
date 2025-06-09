import { useModal } from "~/providers/modalProvider";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { Outlet } from "react-router";
import Footer from "./Footer";

const LayoutContent = () => {
    const {showCart, setShowCart, setShowMenu, showMenu, setTriggerId} = useModal();
  return (
    <div className='relative'>
        <Header/>
        <MobileHeader setTriggerId={setTriggerId} showCart={showCart} setShowCart={setShowCart} showMenu={showMenu} setShowMenu={setShowMenu}/>
        <Outlet/>
        <div className='mt-20'>
          <Footer/>
        </div>
      </div>
  )
}

export default LayoutContent;