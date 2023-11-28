import React from "react";
import SidebarFilter from "./components/SidebarFilter";
import MainContent from "./components/MainContent";
import { useProduct } from "@/app/hooks/user/product";

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

const SearchFilterProduct = async () => {
  const data = await fetchProduct();
  return (
    <>
      <SidebarFilter />
      <MainContent
        products={data?.products}
        setAlerts={data?.setAlerts}
      />
    </>
  );
};

export default SearchFilterProduct;
