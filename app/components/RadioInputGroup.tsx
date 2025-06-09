import React from 'react';
import RadioInputComponent from './RadioInput';

export interface RadioInputGroupProps{
    label: string;
    options: {label: string; value: string | number}[];
    id: string;
    radioGroupClassName?: string
}

const RadioInputGroup = ({label, options, id, radioGroupClassName}: RadioInputGroupProps) => {
  return (
    <div className='flex flex-col gap-1'>
        <label
            htmlFor={id}
            className={`text-black font-bold text-[12px] font-manrope tracking-[-0.21px]`}
          >
            {label}
          </label>
          <div className={`flex flex-col gap-3 ${radioGroupClassName}`}>
            {
            options.map(option => {
                return (
                    <RadioInputComponent onClick={()=>{}} name={id} id={option.label} value={option.value} label={option.label}/>
                )
            })
          }
          </div>
    </div>
  )
}

export default RadioInputGroup