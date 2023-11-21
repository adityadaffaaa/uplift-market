import React from "react";

const VendorProfileLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:gap-10 items-center mt-16 lg:mt-24">
      {children}
    </div>
  );
};

export default VendorProfileLayout;
