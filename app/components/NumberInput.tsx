import React, { useState } from 'react'

interface NumberInputProps {
    minNumber?: number;
    maxNumber?: number;
    value: number;
    handleDecrement: () => void;
    handleIncrement: () => void;
    onChange: (value: number) => void;
}

const NumberInput = ({minNumber, maxNumber, value, handleDecrement, handleIncrement, onChange}: NumberInputProps) => {

  return (
    <div className='w-full bg-gray-primary flex gap-5 items-center px-3 py-3'>
        <button onClick={handleDecrement} className={`${minNumber && value <= minNumber ? 'text-black opacity-[25%]' : 'text-primary'} font-bold font-manrope text-[13px] tracking-[1px]`}>-</button>
        <input value={value} onChange={(event)=> onChange(parseInt(event.target.value))} type='number' className='w-full text-center text-[13px] tracking-[1px] font-manrope font-bold focus:outline-none'/>
        <button onClick={handleIncrement} className={`${maxNumber && value >= maxNumber ? 'text-black opacity-[25%]' : 'text-primary'} font-bold font-manrope text-[13px] tracking-[1px]`}>+</button>
    </div>
  )
}

export default NumberInput