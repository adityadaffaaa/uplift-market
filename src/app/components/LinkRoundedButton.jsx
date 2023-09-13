import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const LinkRoundedButton = ({
  title,
  url,
  bordered,
  customClassName,
}) => {
  return (
    <Link
      className={`btn capitalize px-8 rounded-full text-subtitle text-textBlack font-medium bg-primary ${
        bordered &&
        "bg-transparent border-2 border-textBlack"
      } ${customClassName}`}
      href={url}
    >
      {title}
    </Link>
  );
};

LinkRoundedButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bordered: PropTypes.bool,
  customClassName: PropTypes.string,
};

export default LinkRoundedButton;
