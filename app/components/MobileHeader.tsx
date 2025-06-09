
const MobileHeader = ({
  setShowMenu,
  showMenu,
  showCart,
  setShowCart,
  setTriggerId
}: {
  setShowMenu: (value: boolean) => void;
  setShowCart: (value: boolean) => void;
  showMenu: boolean;
  showCart: boolean;
  setTriggerId: (value: string) => void;
}) => {
  return (
    <div className="lg:hidden flex justify-between items-center w-full px-5 md:px-10 py-7 border-b bg-[#191919] border-[#979797]/10">
      <button id={'menu-mobile'} onClick={() => {setTriggerId('menu-mobile');setShowMenu(!showMenu)}}>
        <img
          src="/assets/shared/tablet/icon-hamburger.svg"
          className="h-4 w-fit"
        />
      </button>
      <img src="/assets/shared/desktop/logo.svg" className="h-6 w-fit" />
      <button
      id={'cart-mobile'}
        onClick={(e) => {
          setTriggerId('cart-mobile')
          setShowCart(!showCart);
        }}
      >
        <img src="/assets/shared/desktop/icon-cart.svg" className="h-5 w-fit" />
      </button>
    </div>
  );
};

export default MobileHeader;
