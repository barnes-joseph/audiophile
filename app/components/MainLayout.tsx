import CartProvider from '~/providers/cartProvider'
import ModalProvider, { useModal } from '~/providers/modalProvider'
import LayoutContent from './LayoutContent'
import { ToastProvider } from '~/providers/toastProvider'

const MainLayout = () => {
  return (
    <ToastProvider>
      <ModalProvider>
        <CartProvider>
          <LayoutContent/>
        </CartProvider>
      </ModalProvider>
    </ToastProvider>
  )
}

export default MainLayout