import React, { useMemo, useReducer, useRef } from "react";
import { formatUSD } from "~/utils/currency-formatter";
import NumberInput from "./NumberInput";
import { useCart, type CartProduct } from "~/providers/cartProvider";
import { useNavigate } from "react-router";
import { modalTriggerIds, useModal } from "~/providers/modalProvider";
import { useClickOutside } from "~/hooks/useClickOutside";

const Cart = () => {
  const {
    cart,
    incrementProductCount,
    decrementProductCount,
    clearCart,
    addToCart,
  } = useCart();
  const { setShowCart, dismissAllModals, triggerId } = useModal();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => {
    ref?.current?.closest(".visible") && setShowCart(false);
  }, triggerId);

  const computeTotal = (cart: CartProduct[]) => {
    return (
      cart?.reduce(
        (previousValue, currentValue) =>
          currentValue.price * currentValue.quantity + previousValue,
        0
      ) || 0
    );
  };

  const total = useMemo(() => {
    return computeTotal(cart);
  }, [cart]);

  return (
    <div
      ref={ref}
      className="rounded-xl bg-white w-full md:w-fit md:min-w-96 h-fit p-5"
    >
      <div className="flex justify-between items-center">
        <span className="text-[18px] font-manrope font-bold tracking-[1.29px]">
          Cart ({cart?.length || 0})
        </span>
        <button
          disabled={!!cart?.length === false}
          onClick={clearCart}
          className="font-manrope cursor-pointer text-[15px] underline hover:text-primary text-black opacity-[50%]"
        >
          Remove all
        </button>
      </div>
      <div className="flex flex-col gap-5 my-5">
        {cart?.length > 0 ? (
          cart?.map((product) => {
            return (
              <div key={product.slug} className="flex flex-col gap-5">
                <div className="flex gap-5 items-center">
                  <div className="rounded-xl w-28 h-24 bg-gray-primary">
                    <img
                      src={product.image}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col shrink-0 md:mr-10">
                    <span className="uppercase font-manrope text-[15px] leading-[25px] tracking-[0px] text-black">
                      {product.name}
                    </span>
                    <span className="uppercase font-manrope text-[14px] leading-[25px] tracking-[0px] text-black opacity-[50%]">
                      {formatUSD(product.price)}
                    </span>
                  </div>
                  <div className="md:w-32 md:ml-auto">
                    <NumberInput
                      onChange={(value) =>
                        addToCart({ ...product, quantity: value })
                      }
                      handleDecrement={() => decrementProductCount(product)}
                      handleIncrement={() => incrementProductCount(product)}
                      value={product.quantity}
                      minNumber={0}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <span className="font-manrope text-[18px] leading-[24px] text-black opacity-[50%] text-center my-10">
            No Product Added yet
          </span>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {cart?.length > 0 && (
          <div className="flex justify-between">
            <span className="font-medium text-black opacity-[50%] font-manrope text-[15px] leading-[25px] tracking-[0px]">
              Total
            </span>
            <span className="font-medium text-black font-manrope text-[18px] tracking-[0px]">
              {formatUSD(total)}
            </span>
          </div>
        )}
        <button
          onClick={() => {
            dismissAllModals();
            navigate("/checkout");
          }}
          disabled={!!cart?.length === false}
          className="button-primary disabled:opacity-[50%]"
        >
          checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
