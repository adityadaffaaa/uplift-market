import React from "react";

const LoginVendorLayout = ({ children }) => (
  <div className="h-screen grid place-items-center bg-primary relative overflow-hidden">
    <img
      src="/assets/images/img-bg-login-vendor.png"
      alt=""
      className="absolute -right-72 -top-72 h-[800px]"
      loading="lazy"
    />
    {children}
  </div>
);

export default LoginVendorLayout;
