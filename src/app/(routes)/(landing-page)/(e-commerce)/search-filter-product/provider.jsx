"use client";
import React, { useState } from "react";
import { FilterContext } from "./context/FilterContext";

const Provider = ({ children }) => {
  const [filterList, setFilterList] = useState({});

  const handleFilter = (key, newValue) => {
    setFilterList((values) => ({
      ...values,
      [key]: newValue,
    }));
  };

  return (
    <FilterContext.Provider
      value={{ filterList, handleFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default Provider;
