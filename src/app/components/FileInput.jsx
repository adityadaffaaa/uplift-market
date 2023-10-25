"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import icons from "../utils/icons";

const { FileIcon } = icons.authScreenIcon;

export const FileInput = ({
  title,
  desc,
  name,
  id,
  htmlFor,
  onBlur,
  value,
  ref,
  accept,
  setFile,
  isPdf,
  nameItem,
  defaultValue,
  errorMessage,
}) => {
  const [fileSelected, setFileSelected] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    try {
      if (file.size <= 2097152) {
        if (file && !isPdf) {
          setFile(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            localStorage.setItem(nameItem, e.target.result);
            setFileSelected(e.target.result);
          };
          reader.readAsDataURL(e.target.files[0]);
        }

        if (file && isPdf) {
          setFile(file);
          // const reader = new FileReader();
          // reader.onload = (e) => {
          localStorage.setItem("PDFPortfolio", file.name);
          // };
          // reader.readAsDataURL(e.target.files[0]);
          setFileSelected(file.name);
        }
      }
    } catch (error) {
      console.error("Something wrong", error);
    }
  };

  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`w-full flex-col border-dashed h-[283px] border-2 rounded-[10px] place-items-center flex cursor-pointer transition-default hover:bg-green10 overflow-hidden group ${
          errorMessage ? "border-error" : "border-gray-200"
        } ${
          (!isPdf && fileSelected) || defaultValue
            ? "p-4"
            : "p-0"
        }`}
      >
        <input
          className="sr-only"
          type="file"
          name={name}
          id={id}
          ref={ref}
          onChange={handleFileChange}
          accept={
            isPdf
              ? ".pdf"
              : `.png, .jpg, ${accept && accept}`
          }
          value={value && value.name}
          onBlur={onBlur}
        />
        {(!isPdf && fileSelected) ||
        (!isPdf && defaultValue) ? (
          <img
            src={fileSelected ?? defaultValue}
            className="h-full object-contain"
            alt=""
          />
        ) : (isPdf && fileSelected) ||
          (isPdf && defaultValue) ? (
          <div className="h-full flex flex-col items-center justify-center gap-3">
            <FileIcon />
            <p className="text-primary text-center text-paragraph8">
              {fileSelected ?? defaultValue}
            </p>
          </div>
        ) : (
          <>
            <img
              src="/assets/images/img-upload.png"
              alt="Picture of the author"
              className="mt-14 mix-blend-darken w-12 h-12"
            />
            <p className="mt-6">{title ?? ""}</p>
            <p className="text-paragraph9Res mt-3 opacity-40">
              {desc
                ? desc
                : "JPG or PNG, file size no more than 5MB"}
            </p>
            <span className="btn bg-primary rounded-full text-white mt-6 capitalize px-8 py-2 hover:bg-green70 shadow-defaultShadow">
              Upload
            </span>
          </>
        )}
      </label>
      {errorMessage && (
        <p className="text-danger-500 text-xs">
          {errorMessage}
        </p>
      )}
    </>
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
