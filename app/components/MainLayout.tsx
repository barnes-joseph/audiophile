import CartProvider from "~/providers/cartProvider";
import ModalProvider, { useModal } from "~/providers/modalProvider";
import LayoutContent from "./LayoutContent";
import { ToastProvider } from "~/providers/toastProvider";

const MainLayout = () => {
  return (
    <CartProvider>
      <ToastProvider>
        <ModalProvider>
          <LayoutContent />
        </ModalProvider>
      </ToastProvider>
    </CartProvider>
  );
};

export default MainLayout;
