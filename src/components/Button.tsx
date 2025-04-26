import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({children,onClick,onMouseEnter,onMouseLeave,className,type}:ButtonProps) => {
  return (
    <button onClick={onClick} type={type} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className}>{children}</button>
  )
}

export default React.memo(Button);