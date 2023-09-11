import React from "react";
import PropTypes from "prop-types";

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

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  customClassName: PropTypes.string,
  upperCase: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  useShadow: PropTypes.bool,
  bordered: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
