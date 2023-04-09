import React from "react";
//封装一个input组件
interface InputProps {
  value: string;
  type: "text" | "password" | "email" | "number";
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  pattern?:any
}

export default function Input({value,type,placeholder,onChange,className = "",disabled = false,pattern}: InputProps) {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = event.target.value.replace(pattern, "");
        onChange(filteredValue);
    };

  return (
    <input
      className={`input ${className} `}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
      pattern="^[a-zA-Z0-9]*$" 
    />
  );
}
