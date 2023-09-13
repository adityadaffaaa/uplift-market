import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <div className="h-screen grid place-items-center lg:flex">
      <section className="bg-primary flex-1 h-full"></section>
      {children}
    </div>
  );
};

export default LoginLayout;
