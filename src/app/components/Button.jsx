import React from "react";

const Button = ({
  customClassName,
  title,
  onClick,
  upperCase,
  leftIcon,
  rightIcon,
  useShadow,
  bordered,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn flex ${customClassName} ${
        upperCase ? "uppercase" : "normal-case"
      }  ${useShadow && "shadow-buttonShadow"}
      ${bordered && "bg-transparent border-2 shadow-none"}
      `}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
};

export default Button;
