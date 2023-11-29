import React from "react";
import SidebarFilter from "./components/SidebarFilter";
import MainContent from "./components/MainContent";
import { useProduct } from "@/app/hooks/user/product";
import Provider from "./provider";

const fetchProduct = async () => {
  let setAlerts = [];
  const { getListProduct } = useProduct();
  try {
    const res = await getListProduct({ setAlerts });

    if (res.status === 200) {
      const products = res.data.data;
      return { products, setAlerts };
    } else {
      return { setAlerts };
    }
  } catch (error) {
    console.error("Something wrong", error);
  }
};

const filterProduct = async () => {
  try {
    const res = await fetch("/api/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    });
  } catch (error) {}
};

const SearchFilterProduct = async () => {
  const data = await fetchProduct();
  return (
    <Provider>
      <SidebarFilter />
      <MainContent
        products={data?.products}
        setAlerts={data?.setAlerts}
      />
    </Provider>
  );
};

export default SearchFilterProduct;
