import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <div className="h-full grid place-items-center md:bg-greyBackground ">
      {children}
    </div>
  );
};

export default LoginLayout;
