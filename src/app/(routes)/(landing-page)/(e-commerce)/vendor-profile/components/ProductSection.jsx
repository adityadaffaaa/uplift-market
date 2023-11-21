import React from "react";
import { ProductCardItem } from "@/app/components";
import { products } from "@/helpers/constants";

const ProductSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 xl:gap-4">
      {products.map(
        (
          { title, city, cover, review, price, rate },
          index
        ) => (
          <ProductCardItem
            key={index}
            title={title}
            city={city}
            imgUrl={cover}
            review={review}
            price={price}
            rate={rate}
            slug={"/jasa-abal"}
          />
        )
      )}
    </div>
  );
};

export default ProductSection;
