import React from "react";
import { ProductCardItem } from "@/app/components";
import { products } from "@/helpers/constants";
import { Pagination } from "@nextui-org/react";

const ProductSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 xl:gap-4 w-full">
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
      <Pagination
        variant="light"
        color="primary"
        total={10}
        initialPage={1}
        showControls
      />
    </>
  );
};

export default ProductSection;
