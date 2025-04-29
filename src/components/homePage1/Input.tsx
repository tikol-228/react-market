import React from "react";

interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
}

const Input = ({ type, placeholder, value, onChange, ref,className}:InputProps) => {
  return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        className={className}
      />
  );
};

export default React.memo(Input);