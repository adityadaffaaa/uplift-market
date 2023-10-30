import React from "react";
import Providers from "./providers";

const VendorRootLayout = ({ children }) => {
  return (
    <div className="flex lg:h-screen bg-white lg:bg-neutral-100 relative">
      <Providers>{children}</Providers>
    </div>
  );
};

export default VendorRootLayout;
