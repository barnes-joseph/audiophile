import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import InputComponent from "~/components/Input";
import RadioInputComponent from "~/components/RadioInput";
import RadioInputGroup from "~/components/RadioInputGroup";
import { useCart } from "~/providers/cartProvider";
import { useModal } from "~/providers/modalProvider";
import { formatUSD } from "~/utils/currency-formatter";

enum PaymentMethod{
    EMoney,
    Cash
}

const externalFees = {
    shipping: 50,
    vat: 1079
}

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const {setShowThankYou} = useModal();
  
  const paymentOptions = [
    { label: "e-Money", value: PaymentMethod.EMoney },
    { label: "Cash on Delivery", value: PaymentMethod.Cash },
  ];
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 0,
    eMoneyNumber: '',
    eMoneyPin: ''
  })

  const handleChange = (name: string, value: string | number) => {
    setCheckoutForm(prev => ({...prev, [name]: value}))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowThankYou(true);
  }

  const totalAmount = () => {
    return cart?.reduce(
      (previousValue, currentValue) =>
        currentValue.price * currentValue.quantity + previousValue,
      0
    ) || 0;
  };

  return (
    <div className="lg:w-[80%] lg:max-w-[1200px] lg:mx-auto p-5 md:p-10">
      <button
        className="body-text cursor-pointer text-black opacity-[50%] mb-5"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <form onSubmit={onSubmit} className="flex flex-col lg:flex-row lg:gap-5">
        <div className="bg-white rounded-xl p-5 mb-5 lg:w-[60%]">
        <span className="uppercase block font-manrope text-black text-[28px] tracking-[1px] font-bold mb-10">
          Checkout
        </span>
        <section className="mb-5">
          <span className="text-primary uppercase font-manrope text-[13px] font-bold leading-[25px] tracking-[0.93px]">
            billing details
          </span>
          <div className="flex flex-col gap-5 mt-5 md:grid md:grid-cols-2">
            <InputComponent required onChange={(event)=> handleChange('name', event.target.value)} placeholder="Alexei Ward" label="Name" type="text" />
            <InputComponent required onChange={(event)=> handleChange('email', event.target.value)} placeholder="alexei@mail.com" label="Email Address" type="email" />
            <InputComponent required onChange={(event)=> handleChange('phoneNumber', event.target.value)} placeholder="+1 202-555-0136" label="Phone Number" type="tel"
  pattern="^\+1\s\d{3}-\d{3}-\d{4}$" />
          </div>
        </section>
        <section className="mb-5">
          <span className="text-primary uppercase font-manrope text-[13px] font-bold leading-[25px] tracking-[0.93px]">
            shipping info
          </span>
          <div className="flex flex-col gap-5 mt-5 md:grid md:grid-cols-2">
            <div className="col-span-2">
              <InputComponent required onChange={(event)=> handleChange('address', event.target.value)} placeholder="1137 Williams Avenue" label="Your Address" type="text" />
            </div>
            <InputComponent pattern="\d{5}" required onChange={(event)=> handleChange('zipCode', event.target.value)} placeholder="10001" label="Zip Code" type="text" />
            <InputComponent required onChange={(event)=> handleChange('city', event.target.value)} placeholder="New York" label="City" type="text" />
            <InputComponent required onChange={(event)=> handleChange('country', event.target.value)} placeholder="United States" label="Country" type="text" />
          </div>
        </section>
        <section>
          <span className="text-primary uppercase font-manrope text-[13px] font-bold leading-[25px] tracking-[0.93px]">
            payment details
          </span>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-5 mt-5">
            <div className="md:col-span-2">
              <div className="flex flex-col gap-1 md:grid md:grid-cols-2">
                <label
                  htmlFor="payment-method"
                  className={`text-black md:col-span-2 font-bold text-[12px] font-manrope tracking-[-0.21px]`}
                >
                  Payment Method
                </label>
                <div className="hidden md:block"></div>
                <div className={`flex flex-col gap-3`}>
                  {paymentOptions.map((option) => {
                    return (
                      <RadioInputComponent
                      key={option.value}
                        readOnly
                        onClick={()=>{handleChange('paymentMethod', option.value)}}
                        name="payment-method"
                        id={option.label}
                        checked={checkoutForm.paymentMethod === option.value}
                        value={option.value}
                        label={option.label}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {
                checkoutForm.paymentMethod === PaymentMethod.EMoney &&
                <Fragment>
                    <InputComponent required={checkoutForm.paymentMethod === PaymentMethod.EMoney} onChange={(event)=> handleChange('eMoneyNumber', event.target.value)} pattern="\d{9}" placeholder="238521993" label="e-Money Number" type="text" />
                    <InputComponent required={checkoutForm.paymentMethod === PaymentMethod.EMoney} onChange={(event)=> handleChange('eMoneyPin', event.target.value)} pattern="\d{4}" placeholder="6891" label="e-Money Pin" type="text" />
                </Fragment>
            }
            {checkoutForm.paymentMethod === PaymentMethod.Cash && (
                <div className="md:col-span-2 flex gap-5 items-center">
                    <img src='/assets/checkout/icon-cash-on-delivery.svg' className="w-10"/>
                    <p className="text-black opacity-[50%] font-medium leading-[25px] tracking-[0px]">The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
            )}
          </div>
        </section>
      </div>
      <div className="bg-white rounded-xl p-5 flex flex-col gap-5 lg:w-[40%] lg:h-fit">
        <span className="uppercase font-manrope text-black text-[18px] tracking-[1.29px] font-bold">
          Summary
        </span>
        {cart?.map((product) => {
          return (
            <div key={product.slug} className="flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <div className="rounded-xl w-20 h-24 bg-gray-primary">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col shrink-0">
                  <span className="uppercase font-manrope text-[15px] leading-[25px] tracking-[0px] text-black">
                    {product.name}
                  </span>
                  <span className="uppercase font-manrope text-[14px] leading-[25px] tracking-[0px] text-black opacity-[50%]">
                    {formatUSD(product.price)}
                  </span>
                </div>
                <span className="body-text text-black opacity-[50%] ml-auto">
                  x{product.quantity}
                </span>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between items-center">
          <span className="body-text uppercase text-black opacity-[50%] font-medium">
            Total
          </span>
          <span className="uppercase font-manrope text-[18px] tracking-[0px] text-black">
            {formatUSD(totalAmount())}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="body-text uppercase text-black opacity-[50%] font-medium">
            Shipping
          </span>
          <span className="uppercase font-manrope text-[18px] tracking-[0px] text-black">
            {formatUSD(externalFees.shipping)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="body-text uppercase text-black opacity-[50%] font-medium">
            Vat(Included)
          </span>
          <span className="uppercase font-manrope text-[18px] tracking-[0px] text-black">
            {formatUSD(externalFees.vat)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="body-text uppercase text-black opacity-[50%] font-medium">
            Grand Total
          </span>
          <span className="uppercase font-manrope text-[18px] tracking-[0px] text-black">
            {formatUSD(totalAmount() + externalFees.shipping + externalFees.vat)}
          </span>
        </div>
        <button type="submit" className="button-primary">continue & pay</button>
      </div>
      </form>
    </div>
  );
};

export default Checkout;
