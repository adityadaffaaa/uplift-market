import React from "react";

const OrderLayout = ({ children }) => {
  return (
    <div className="flex justify-center py-16 lg:py-28 md:bg-greyBackground">
      <div className="container px-5">{children}</div>
    </div>
  );
};

export default OrderLayout;
