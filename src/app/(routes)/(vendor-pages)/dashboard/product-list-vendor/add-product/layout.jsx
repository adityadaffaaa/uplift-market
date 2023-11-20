import React from "react";

const OrderLayout = ({ children }) => {
  return (
    <div className="flex w-full py-3 justify-center">
      <div className="container px-5">{children}</div>
    </div>
  );
};

export default OrderLayout;
