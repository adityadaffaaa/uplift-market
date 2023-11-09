import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {children}
    </div>
  );
};

export default layout;
