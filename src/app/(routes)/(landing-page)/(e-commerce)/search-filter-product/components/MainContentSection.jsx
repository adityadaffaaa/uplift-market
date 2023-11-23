import React from "react";

const MainContentSection = ({ children }) => {
  return (
    <section className="w-full lg:w-[calc(100%-320px)] flex justify-center">
      <div className="container px-5 lg:pr-28 flex justify-center">
        {children}
      </div>
    </section>
  );
};

export default MainContentSection;
