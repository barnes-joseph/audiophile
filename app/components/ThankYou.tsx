import React from "react";
import { useNavigate } from "react-router";
import { useCart } from "~/providers/cartProvider";
import { useModal } from "~/providers/modalProvider";
import { formatUSD } from "~/utils/currency-formatter";

const ThankYou = () => {
  const { cart, clearCart } = useCart();
  const { dismissAllModals } = useModal();
  const navigate = useNavigate();

  const goHome = () => {
      clearCart()
      navigate("/");
      dismissAllModals();
  }

  return (
    <div className="bg-white rounded-xl h-fit w-full flex flex-col gap-5 p-10 max-w-[500px]">
      <img
        src="/assets/checkout/icon-order-confirmation.svg"
        className="w-20"
      />
      <span className="uppercase font-manrope text-[24px] leading-[28px] tracking-[0.86px] text-black font-bold">
        thank you <br /> for your order
      </span>
      <p className="body-text text-black opacity-[50%]">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="rounded-t-xl md:rounded-t-none md:!rounded-l-xl p-4 bg-gray-primary">
          {cart?.slice(0, 1)?.map((product) => {
            return (
              <div key={product?.slug} className="flex flex-col gap-5 mb-2">
                <div className="flex gap-5 items-start">
                  <div className="rounded-xl w-16 h-20 bg-gray-primary">
                    <img
                      src={product?.image}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col shrink-0">
                    <span className="uppercase font-manrope text-[15px] leading-[25px] tracking-[0px] text-black">
                      {product?.name}
                    </span>
                    <span className="uppercase font-manrope text-[14px] leading-[25px] tracking-[0px] text-black opacity-[50%]">
                      {formatUSD(product?.price)}
                    </span>
                  </div>
                  <span className="body-text text-black opacity-[50%] ml-auto">
                    x{product?.quantity}
                  </span>
                </div>
              </div>
            );
          })}
          <hr className="border border-black/8" />
          <span className="text-[12px] text-center block mt-2 font-bold font-manrope tracking-[-0.21px] text-black opacity-[50%]">
            and 2 other item(s)
          </span>
        </div>
        <div className="rounded-b-xl md:rounded-b-none md:!rounded-r-xl  p-4 bg-black flex flex-col md:justify-center gap-2">
          <span className="body-text uppercase text-white opacity-[50%]">
            Grand total
          </span>
          <span className="body-text !text-[18px] text-white font-manrope">
            {formatUSD(5600)}
          </span>
        </div>
      </div>
      <button
        onClick={goHome}
        className="button-primary"
      >
        Back to home
      </button>
    </div>
  );
};

export default ThankYou;
