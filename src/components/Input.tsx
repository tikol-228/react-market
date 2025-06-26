import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string | number;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const Input = ({ type, placeholder, value, onChange, checked, style }: InputProps) => {
  return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        checked={checked}
        style={style}
      />
  );
};

export default React.memo(Input);