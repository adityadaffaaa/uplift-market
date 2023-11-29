"use client";

import { useContext, createContext } from "react";

export const FilterContext = createContext({});

export const useFilter = () => useContext(FilterContext);
