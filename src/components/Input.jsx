// src/components/InputField.jsx
import React from "react";

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
}) {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 rounded w-full bg-cyan-950 border-none text-white"
      />
    </div>
  );
}

export default Input;
