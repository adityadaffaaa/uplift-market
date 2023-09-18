import React from "react";

const UserAuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center lg:flex-row">
      <section className="bg-primary flex-1 h-full"></section>
      {children}
    </div>
  );
};

export default UserAuthLayout;
