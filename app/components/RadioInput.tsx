import React from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  value: string | number;
  error?: string;
  onClick: ()=>void; // Add error prop to conditionally show errors
}

const RadioInputComponent = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, id, value, onClick, className = '', error, ...props }, ref) => {
    return (
      <div onClick={onClick} className={`w-full flex items-center gap-5 bg-white border h-[40px] rounded-lg px-4 hover:border-primary border-[#CFCFCF]`}>
        <input
          type='radio'
          ref={ref}
          id={id}
          className={`accent-primary bg-white border rounded-lg px-4 focus:outline-primary invalid:outline-[#CD2C2C] border-[#CFCFCF] ${error ? 'border-[#CD2C2C]' : ''}`}
          {...props}
        />
        <label             className={`text-black font-bold text-[14px] font-manrope tracking-[-0.25px]`}
>{label}</label>
      </div>
    );
  }
);

RadioInputComponent.displayName = 'InputComponent';

export default RadioInputComponent;
