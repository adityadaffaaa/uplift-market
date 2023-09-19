import Image from "next/image";
import React from "react";

const UserAuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center lg:flex-row">
      <section className="bg-primary flex-1 lg:grid place-items-center h-full hidden">
        <Image
          height={90}
          width={400}
          src={
            "/assets/images/img-logo-upliftmarket-white.png"
          }
          alt="logo"
        />
      </section>
      {children}
    </div>
  );
};

export default UserAuthLayout;
