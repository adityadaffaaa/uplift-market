import React from "react";

import Image from "next/image";

const FileInput = ({
  title,
  desc,
  name,
  id,
  htmlFor,
  onChange,
  value,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="w-full flex-col border-dashed h-[283px] border-gray-200  border-2 rounded-[10px] place-items-center flex cursor-pointer"
    >
      <input
        className="sr-only"
        type="file"
        name={name}
        id={id}
        onChange={onChange}
        value={value.name}
      />
      <Image
        src="/assets/images/img-upload.png"
        width={48}
        height={48}
        alt="Picture of the author"
        className="mt-14"
      />
      <p className="mt-6">{title}</p>
      <p
        className={`text-paragraph9Res mt-3 ${
          value ? "text-primary" : "opacity-40"
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

export default FileInput;
