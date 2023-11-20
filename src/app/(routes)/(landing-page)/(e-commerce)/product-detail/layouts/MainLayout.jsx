import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="container flex flex-col pb-20 px-5 xl:px-36">
      {children}
    </div>
  );
};

export default MainLayout;
