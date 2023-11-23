"use client";

import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Select,
  SelectItem,
} from "@nextui-org/react";
import ProductSection from "./ProductSection";
import PortfolioSection from "./PortfolioSection";

export const MainSection = () => {
  const [selected, setSelected] = useState("produk");

  const sorting = [
    "Termurah",
    "Termahal",
    "Rating Terbaik",
    "Rating Terburuk",
    "Relevansi",
  ];

  return (
    <section className="flex lg:flex-[1_1_70%] flex-col gap-4 items-end">
      <div className="flex flex-row w-full justify-between">
        <Tabs
          radius={"full"}
          color="primary"
          variant="light"
          selectedKey={selected}
          onSelectionChange={setSelected}
          classNames={{
            tab: "text-paragraph4Res px-6 py-5",
          }}
          aria-label="Tabs radius"
        >
          <Tab key="produk" title="Produk" />
          <Tab key="portfolio" title="Portofolio" />
        </Tabs>
        <div className="hidden lg:flex items-center">
          {selected === "produk" && (
            <>
              <p className="text-paragraph pr-2">Urutkan</p>
              <Select
                placeholder="Urutkan..."
                variant="bordered"
                color="primary"
                className="max-w-xs w-52"
              >
                {sorting.map((value, index) => (
                  <SelectItem
                    key={index}
                    color="primary"
                    value={value}
                  >
                    {value}
                  </SelectItem>
                ))}
              </Select>
            </>
          )}
        </div>
      </div>
      {selected === "produk" ? (
        <ProductSection />
      ) : (
        <PortfolioSection />
      )}
    </section>
  );
};

export default MainSection;
