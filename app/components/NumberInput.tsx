import React, { useState } from 'react'

interface NumberInputProps {
    minNumber?: number;
    maxNumber?: number;
}

const NumberInput = ({minNumber, maxNumber}: NumberInputProps) => {
    const [number, setNumber] = useState(1);

    const onDecrement = () => {
        if(minNumber){
            setNumber(prevNumber => prevNumber > minNumber ? --prevNumber : prevNumber);
        }else{
            setNumber(prevNumber => --prevNumber);
        }
    }

    const onIncrement = () => {
        if(maxNumber){
            setNumber(prevNumber => prevNumber < maxNumber ? ++prevNumber : prevNumber);
        }else{
            setNumber(prevNumber => ++prevNumber);
        }
    }

  return (
    <div className='w-full bg-gray-primary flex gap-5 items-center px-3 py-3'>
        <button onClick={onDecrement} className={`${minNumber && number <= minNumber ? 'text-black opacity-[25%]' : 'text-primary'} font-bold font-manrope text-[13px] tracking-[1px]`}>-</button>
        <input value={number} onChange={(event)=> setNumber(parseInt(event.target.value))} type='number' className='w-full text-center text-[13px] tracking-[1px] font-manrope font-bold focus:outline-none'/>
        <button onClick={onIncrement} className={`${maxNumber && number >= maxNumber ? 'text-black opacity-[25%]' : 'text-primary'} font-bold font-manrope text-[13px] tracking-[1px]`}>+</button>
    </div>
  )
}

export default NumberInput