import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export const FileInput = ({
  title,
  desc,
  name,
  id,
  htmlFor,
  onChange,
  onBlur,
  value,
  ref,
  error,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`w-full flex-col border-dashed h-[283px] border-2 rounded-[10px] place-items-center flex cursor-pointer transition-default hover:bg-green10 group ${
        error ? "border-error" : "border-gray-200 "
      }`}
    >
      <input
        className="sr-only"
        type="file"
        name={name}
        id={id}
        ref={ref}
        onChange={onChange}
        accept=".png, .jpg, .pdf"
        value={value ? value.name : ""}
        onBlur={onBlur}
      />
      <Image
        src="/assets/images/img-upload.png"
        width={48}
        height={48}
        alt="Picture of the author"
        className="mt-14 mix-blend-darken "
      />
      <p className="mt-6 group-hover:text-whit">{title}</p>
      <p
        className={`text-paragraph9Res mt-3 ${
          value ? "text-primary " : "opacity-40"
        }`}
      >
        {desc
          ? desc
          : "JPG or PNG, file size no more than 5MB"}
      </p>
      <span className="btn bg-primary rounded-full text-white mt-6 capitalize px-8 py-2 hover:bg-green70 shadow-defaultShadow">
        Upload
      </span>
    </label>
  );
};

FileInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.node,
  htmlFor: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default FileInput;
