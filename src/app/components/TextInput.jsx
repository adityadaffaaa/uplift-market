import React, { useRef } from "react";
import PropTypes from "prop-types";

const TextInput = ({
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
  error,
  useLabel,
  autoComplete,
  disabled,
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
        id={id ? id : ""}
        type={type}
        value={value ? value : ""}
        name={name ? name : ""}
        onChange={handleChange}
        placeholder={!useLabel ? placeholder : ""}
        ref={textInputElement}
        className={`input w-full text-paragraph ${customClassName} focus:border-none focus:outline-none group`}
        required={required ? true : false}
        autoComplete={autoComplete ? "on" : "off"}
        disabled={disabled ? true : false}
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
