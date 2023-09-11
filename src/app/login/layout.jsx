import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <main className="h-[100vh] grid place-items-center lg:flex">
      <section className="bg-primary flex-1 h-full"></section>
      {children}
    </main>
  );
};

export default LoginLayout;
