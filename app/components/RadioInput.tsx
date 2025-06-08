import React from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  error?: string; // Add error prop to conditionally show errors
}

const InputComponent = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, id, className = '', error, ...props }, ref) => {
    return (
      <div className={`w-full bg-white border h-[40px] rounded-lg px-4 hover:border-primary border-[#CFCFCF]`}>
        <input
          type='radio'
          ref={ref}
          id={id}
          className={`w-full accent-primary bg-white border h-[40px] rounded-lg px-4 focus:outline-primary invalid:outline-[#CD2C2C] border-[#CFCFCF] ${error ? 'border-[#CD2C2C]' : ''}`}
          {...props}
        />
      </div>
    );
  }
);

InputComponent.displayName = 'InputComponent';

export default InputComponent;
