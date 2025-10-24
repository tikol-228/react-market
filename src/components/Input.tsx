import React from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
}

const Input = ({ placeholder, className, value, onChange, type, name }: InputProps) => {
  return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
      />
  );
};

export default React.memo(Input);