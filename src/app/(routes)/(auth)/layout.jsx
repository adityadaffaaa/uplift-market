import React from "react";

const UserAuthLayout = ({ children }) => {
  return (
    <div className="h-screen grid place-items-center lg:flex">
      <section className="bg-primary flex-1 h-full"></section>
      {children}
    </div>
  );
};

export default UserAuthLayout;
