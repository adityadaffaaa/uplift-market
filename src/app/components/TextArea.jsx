import React from "react";
import PropTypes from "prop-types";

export const TextArea = ({
  id,
  customClass,
  placeholder,
  rows,
  cols,
  name,
  onChange,
  required,
  error,
}) => {
  return (
    <>
      <textarea
        id={id}
        name={name}
        onChange={onChange}
        rows={rows}
        cols={cols}
        className={`textarea textarea-bordered focus:outline-transparent border-2 ${customClass} ${
          error ? "border-error" : " border-gray-200"
        }`}
        placeholder={placeholder}
        required={required ? true : false}
      ></textarea>
    </>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

export default TextArea;
