import React from "react";
import HeaderCondition from "./HeaderCondition";
const DetailScreenLayout = ({ children }) => {
  return (
    <section className="container py-5 lg:pt-8 pb-3 flex flex-col gap-9 xl:px-36 rounded-xl">
        
      <HeaderCondition />
      {children}
    </section>
  );
};

export default DetailScreenLayout;
