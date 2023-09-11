"use client";

import React, { useRef, useState } from "react";

const TextInput = ({
  id,
  type,
  placeholder,
  customClassName,
  icon,
  required,
  value,
  name,
  onChange,
  onClick,
}) => {
  const textInputElement = useRef();

  const focusInput = () => {
    textInputElement.current.focus();
  };

  return (
    <div
      onClick={focusInput}
      className={`text-input flex items-center w-full rounded-lg relative border-2 ${
        icon && "pr-4"
      } `}
    >
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        ref={textInputElement}
        className={`input w-full text-subtitle ${customClassName} focus:border-none focus:outline-none group`}
        required={required ? true : false}
      />
      <span className="absolute top-1/4 left-2 text-subtitle bg-transparent text-textGrey px-2 transition-default">
        {placeholder}
      </span>
      {icon && (
        <button
          type="button"
          onClick={onClick}
          className="cursor-pointer"
        >
          {icon}
        </button>
      )}
    </div>
  );
};

export default TextInput;
