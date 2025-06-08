import React from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  error?: string; // Add error prop to conditionally show errors
}

const InputComponent = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, id, className = '', error, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="flex justify-between mb-1">
          <label
            htmlFor={id}
            className={`text-black font-bold text-[12px] font-manrope tracking-[-0.21px] ${error ? 'text-[#CD2C2C]' : ''}`}
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
          className={`w-full bg-white border h-[40px] rounded-lg px-4 focus:outline-primary invalid:outline-[#CD2C2C] border-[#CFCFCF] ${className} ${error ? 'border-[#CD2C2C]' : ''}`}
          {...props}
        />
      </div>
    );
  }
);

InputComponent.displayName = 'InputComponent';

export default InputComponent;
