"use client";
import React, { useRef } from "react";
import PropTypes from "prop-types";

export const TextInput = ({
  id,
  type,
  placeholder,
  customClassName,
  customBorderClassName,
  icon,
  required,
  value,
  name,
  onChange,
  onClick,
  onBlur,
  error,
  useLabel,
  autoComplete,
  disabled,
  max,
  maxLength,
  min,
  minLength,
  pattern,
}) => {
  const textInputElement = useRef();

  const focusInput = () => {
    textInputElement.current.focus();
  };

  const handleChange = (event) => {
    event.preventDefault();
    onChange(event);
  };

  return (
    <div
      onClick={focusInput}
      className={`${customBorderClassName} text-input flex items-center w-full rounded-lg relative border-2 ${
        icon && "pr-4"
      } ${
        error ? "border-error" : value && "border-primary"
      }`}
    >
      <input
        id={id ?? ""}
        type={type ?? "text"}
        value={value && value}
        name={name ?? ""}
        onChange={handleChange}
        placeholder={!useLabel ? placeholder : ""}
        ref={textInputElement}
        className={`input w-full text-paragraph ${customClassName} focus:border-none focus:outline-none group`}
        required={required ? true : false}
        autoComplete={autoComplete ? "on" : "off"}
        disabled={disabled ? txrue : false}
        onBlur={onBlur}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        pattern={pattern}
      />
      {useLabel && (
        <span
          className={`absolute top-1/4 left-2 text-paragraph bg-transparent text-textGrey px-2 transition-default ${
            value && "active-label"
          }`}
        >
          {placeholder}
        </span>
      )}
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

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  customClassName: PropTypes.string,
  customBorderClassName: PropTypes.string,
  icon: PropTypes.element,
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  error: PropTypes.bool,
  useLabel: PropTypes.bool,
  autoComplete: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default TextInput;
