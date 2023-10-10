import React from "react";
import PropTypes from "prop-types";

export const FullRoundedButton = ({
  title,
  onClick,
  type,
  bordered,
  customClassName,
}) => {
  return (
    <button
      type={type}
      className={`btn capitalize px-8 rounded-full text-subtitle text-textBlack font-medium bg-primary ${
        bordered &&
        "bg-transparent border-2 border-textBlack"
      } ${customClassName}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

FullRoundedButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  bordered: PropTypes.bool,
  customClassName: PropTypes.string,
};

export default FullRoundedButton;
