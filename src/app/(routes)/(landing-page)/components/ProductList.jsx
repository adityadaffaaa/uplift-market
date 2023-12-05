"use client";
import React, { useState, useEffect } from "react";
import {
  ProductCardItem,
  Toast,
  ProductListSkeleton,
} from "@/app/components";
import { useProduct } from "@/app/hooks/user/product";
import useSWR from "swr";

export const ProductList = ({ categoryNumber = 0 }) => {
  const [alerts, setAlerts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProduct = async () => {
    const { getPopularProducts } = useProduct();
    setIsLoading(true);
    try {
      const res = await getPopularProducts({ setAlerts });
      if (res.status === 200) {
        const data = res.data.data;
        setProducts(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Something wrong", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [setProducts]);

  const productCards =
    products?.length > 0 &&
    products
      ?.slice(0, 10)
      .map(
        (
          { attributes: { name, price, rating, slug } },
          index
        ) => (
          <ProductCardItem
            key={index}
            imgUrl={"/assets/images/img-cover-product.png"}
            title={name}
            city={"Jakarta"}
            price={price}
            rate={rating}
            review={200}
            slug={slug}
          />
        )
      );

  const filteredProductCards =
    categoryNumber !== 0
      ? products.length > 0 &&
        products.product
          ?.filter(
            ({ relevant: { category } }) =>
              categoryNumber === parseInt(category)
          )
          .slice(0, 10)
          .map(
            (
              { attributes: { name, price, rating, slug } },
              index
            ) => (
              <ProductCardItem
                key={index}
                imgUrl={
                  "/assets/images/img-cover-product.png"
                }
                title={name}
                city={"Jakarta"}
                price={price}
                rate={rating}
                review={200}
                slug={slug}
              />
            )
          )
      : productCards;

  return isLoading ? (
    <ProductListSkeleton />
  ) : (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Toast duration={2000} alerts={alerts} start />
      {filteredProductCards}
    </div>
  );
};

export default ProductList;
