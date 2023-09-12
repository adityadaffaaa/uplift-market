import React, { useRef } from "react";
import PropTypes from "prop-types";

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

  const handleChange = (event) => {
    event.preventDefault();
    onChange(event);
  };

  return (
    <div
      onClick={focusInput}
      className={`text-input flex items-center w-full rounded-lg relative border-2 ${
        icon && "pr-4"
      } ${value && "border-primary"} `}
    >
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        ref={textInputElement}
        className={`input w-full text-subtitle ${customClassName} focus:border-none focus:outline-none group`}
        required={required ? true : false}
        autoComplete="off"
      />
      <span
        className={`absolute top-1/4 left-2 text-subtitle bg-transparent text-textGrey px-2 transition-default ${
          value && "active-label"
        }`}
      >
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

TextInput.propTypes = {
  id: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  customClassName: PropTypes.string,
  icon: PropTypes.element,
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.any,
  onClick: PropTypes.func,
};

export default TextInput;
