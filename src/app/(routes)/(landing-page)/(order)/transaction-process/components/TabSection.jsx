"use client";

import React from "react";

import { Tabs, Tab } from "@nextui-org/react";

const TabSection = () => {
  const menuTabs = ["progress", "files", "brief"];

  return (
    <article className="flex flex-col gap-4 xl:px-36">
      <h3 className="text-heading3 text-neutral-800">
        Detail Project
      </h3>
      <Tabs
        color="primary"
        variant="light"
        aria-label="Tabs variants"
        radius="full"
      >
        {menuTabs.map((value) => (
          <Tab
            className="p-5 border-2 capitalize"
            key={value}
            title={value}
          />
        ))}
      </Tabs>
    </article>
  );
};

export default TabSection;
