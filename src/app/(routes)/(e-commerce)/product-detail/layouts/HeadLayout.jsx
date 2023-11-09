import React from "react";

const HeadLayout = ({ children }) => {
  return (
    <div className="flex justify-center py-16 gap-7 lg:mt-16 ">
      {children}
    </div>
  );
};

export default HeadLayout;
