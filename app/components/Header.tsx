import { NavLink } from "react-router";
import { useModal } from "~/providers/modalProvider";

const Header = () => {
  const { setShowCart, showCart, setTriggerId } = useModal();
  return (
    <div className="hidden sticky top-0 left-0 z-10 lg:block bg-[#191919]">
      <div className="w-[80%] max-w-[1200px] px-10 mx-auto flex justify-between items-center py-7 border-b border-[#979797]/10">
        <img src="/assets/shared/desktop/logo.svg" className="h-6 w-fit" />
        <div className="flex gap-5 text-white font-manrope font-bold uppercase">
          <NavLink to="/" className="hover:text-primary">
            Home
          </NavLink>
          <NavLink to="/headphones" className="hover:text-primary">
            Headphones
          </NavLink>
          <NavLink to="/speakers" className="hover:text-primary">
            Speakers
          </NavLink>
          <NavLink to="/earphones" className="hover:text-primary">
            Earphones
          </NavLink>
        </div>
        <button
          id='cart-desktop'
          className="cursor-pointer"
          onClick={(e) => {
            setTriggerId('cart-desktop');
            setShowCart(!showCart);
          }}
        >
          <img
            src="/assets/shared/desktop/icon-cart.svg"
            className="h-5 w-fit"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
