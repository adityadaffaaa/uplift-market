"use client";

import React from "react";
import { ProductCardItem } from "@/app/components";

export const ProductList = ({
  categoryNumber,
  products,
}) => {
  const productCards = products
    .slice(0, 10)
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
      ? products
          .filter(
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

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredProductCards}
    </div>
  );
};

export default ProductList;
