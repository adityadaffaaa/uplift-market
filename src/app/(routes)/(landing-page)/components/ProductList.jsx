"use client";
import React, { useState, useEffect } from "react";
import {
  ProductCardItem,
  Toast,
  ProductListSkeleton,
} from "@/app/components";
import { useProduct } from "@/app/hooks/user/product";

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
    products?.map(
      (
        {
          attributes: { name, price, rating, slug, image },
          relevant: {
            vendor: {
              atributes: { location },
            },
          },
        },
        index
      ) => (
        <ProductCardItem
          key={index}
          imgUrl={
            image.length
              ? image[0]?.attributes?.image_url
              : "/assets/images/img-cover-product.png"
          }
          title={name}
          city={location}
          price={price}
          rate={rating}
          review={200}
          slug={slug}
        />
      )
    );

  const filteredProductCards =
    categoryNumber !== 0
      ? products?.length > 0 &&
        products
          ?.filter(
            ({
              relevant: {
                category: {
                  attributes: { id },
                },
              },
            }) => categoryNumber === id
          )
          .map(
            (
              {
                attributes: {
                  name,
                  price,
                  rating,
                  slug,
                  image,
                },
                relevant: {
                  vendor: {
                    atributes: { location },
                  },
                },
              },
              index
            ) => (
              <ProductCardItem
                key={index}
                imgUrl={
                  image.length
                    ? image[0]?.attributes?.image_url
                    : "/assets/images/img-cover-product.png"
                }
                title={name}
                city={location}
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
