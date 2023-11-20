import React from "react";
import Providers from "./providers";

const VendorRootLayout = ({ children }) => {
  return (
    <div className="flex bg-neutral-100 relative">
      <Providers>{children}</Providers>
    </div>
  );
};

export default VendorRootLayout;
