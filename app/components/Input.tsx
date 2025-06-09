import React, { useState } from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
}

const InputComponent = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, id, className = '', ...props }, ref) => {
    const [error, setError] = useState('');

    const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
      e.preventDefault();
      if(e.currentTarget.validity.valueMissing){
        setError('Input required');
      }else{
        setError('Wrong format');
      }
    };
    
    return (
      <div className="w-full">
        <div className="flex justify-between mb-1">
          <label
            htmlFor={id}
            className={`font-bold text-[12px] font-manrope tracking-[-0.21px] ${error ? 'text-[#CD2C2C]' : 'text-black'}`}
          >
            {label}
          </label>
          {error && (
            <span className="text-[#CD2C2C] font-manrope font-medium text-[12px] tracking-[-0.21px]">
              {error}
            </span>
          )}
        </div>
        <input
          ref={ref}
          id={id}
          onInvalid={handleInvalid}
          onInput={()=>setError('')}
          className={`w-full text-[14px] font-bold font-manrope tracking-[-0.25px] placeholder:text-black/40 bg-white border h-[40px] rounded-lg px-4 invalid:outline-[#CD2C2C] ${className} ${error ? 'border-[#CD2C2C] focus:outline-[#CD2C2C]' : 'border-[#CFCFCF] focus:outline-primary'}`}
          {...props}
        />
      </div>
    );
  }
);

InputComponent.displayName = 'InputComponent';

export default InputComponent;
