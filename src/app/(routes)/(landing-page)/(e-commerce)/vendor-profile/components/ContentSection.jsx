import React from "react";

export const ContentSection = ({ children }) => {
  return (
    <>
      <section className="w-full h-48 lg:h-[408px] ">
        <img
          src={"/assets/images/banner-vendor-web.png"}
          alt="banner"
          className="h-full w-full object-cover"
        />
      </section>
      <div className="container flex flex-col lg:flex-row lg:items-start px-5 xl:px-28 -translate-y-16 lg:translate-y-0 gap-8 lg:mb-8">
        {children}
      </div>
    </>
  );
};

export default ContentSection;
