import React from "react";

interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  register?: any,
  name?: string,
  className?: string;
}

const Input = ({ type, name,register ,placeholder, value, onChange, ref,className}:InputProps) => {
  console.log(register)
  return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        // {...register(name)}
        className={className}
      />
  );
};

export default React.memo(Input);