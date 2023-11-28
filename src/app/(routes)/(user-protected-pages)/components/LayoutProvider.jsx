"use client";

import React from "react";

const LayoutProvider = ({ children }) => {
  return (
    <main className="flex justify-center bg-neutral-100">
      <div className="container px-5 lg:px-28 flex flex-col gap-9 mt-24">
        <h2 className="text-heading2">Project Saya</h2>
        {children}
      </div>
    </main>
  );
};

export default LayoutProvider;
