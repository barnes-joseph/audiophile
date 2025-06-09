import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export interface CartProduct{
    name: string;
    price: number;
    quantity: number;
    slug: string;
    image: string;
}

interface CartState{
  cart: CartProduct[];
  incrementProductCount: (cart: CartProduct) => void;
  decrementProductCount: (cart: CartProduct) => void;
  addToCart: (cart: CartProduct) => void;
  clearCart: () => void;
}

const CartStateContext = createContext<CartState>({} as CartState);

const CartProvider = ({children}: {children: ReactNode}) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const incrementProductCount = (product: CartProduct) => {
    setCart(prevCart => {
    const existingProductIndex = prevCart.findIndex(cartProduct => cartProduct.slug === product.slug);
    if (existingProductIndex >= 0) {
      const updatedCart = [...prevCart];
      const updatedProduct = { ...updatedCart[existingProductIndex], quantity: updatedCart[existingProductIndex].quantity + 1 };
      updatedCart[existingProductIndex] = updatedProduct;
      saveToLocalStorage(updatedCart);
      return updatedCart;
    }
    const newCart = [...prevCart, { ...product, quantity: 1 }];
    saveToLocalStorage(newCart);
    return newCart;
  });
  }

  const decrementProductCount = (product: CartProduct) => {
    setCart(prevCart => {
    const existingProductIndex = prevCart.findIndex(cartProduct => cartProduct.slug === product.slug);
    if (existingProductIndex === -1) return prevCart;

    const updatedCart = [...prevCart];
    const updatedProduct = { ...updatedCart[existingProductIndex], quantity: updatedCart[existingProductIndex].quantity - 1 };

    if (updatedProduct.quantity <= 0) {
      updatedCart.splice(existingProductIndex, 1);
    } else {
      updatedCart[existingProductIndex] = updatedProduct;
    }

    saveToLocalStorage(updatedCart);
    return updatedCart;
  });
  }

  const addToCart = (product: CartProduct) => {
    setCart(prevCart => {
    const existingProductIndex = prevCart.findIndex(cartProduct => cartProduct.slug === product.slug);
    let updatedCart;
    if (existingProductIndex >= 0) {
      updatedCart = [...prevCart];
      updatedCart[existingProductIndex] = { ...product };
    } else {
      updatedCart = [...prevCart, { ...product }];
    }
    saveToLocalStorage(updatedCart);
    return updatedCart;
  });
  }

  const clearCart = () => {
    saveToLocalStorage([]);
    setCart([]);
  }

  const saveToLocalStorage = (cart: CartProduct[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  useEffect(()=>{
    const existingCart = localStorage.getItem('cart');
    console.log(existingCart);
    if(existingCart){
        setCart(JSON.parse(existingCart));
    }
  },[])

return (
    <CartStateContext.Provider value={{ cart, incrementProductCount, decrementProductCount, addToCart, clearCart }}>
      {children}
    </CartStateContext.Provider>
  );}

export default CartProvider;

export const useCart = () => useContext(CartStateContext);
