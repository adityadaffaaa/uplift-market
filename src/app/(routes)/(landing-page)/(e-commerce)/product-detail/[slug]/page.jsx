import { React } from "react";

import MainSection from "../components/MainSection";
import SubtotalSection from "../components/SubtotalSection";
import OtherProductsSection from "../components/OtherProductsSection";
import SameProductsSection from "../components/SameProductsSection";
import HeadLayout from "../layouts/HeadLayout";
import MainLayout from "../layouts/MainLayout";
import { useProduct } from "@/app/hooks/user/product";

const fetchProduct = async ({ slug }) => {
  const { getOneProduct } = useProduct();
  try {
    const res = await getOneProduct({ slug });
    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Something wrong", error);
  }
};

const ProductDetail = async ({ params }) => {
  const productData = await fetchProduct(params);

  if (productData) {
    const {
      attributes: { name, description, price, rating },
    } = productData;
    return (
      <>
        <MainLayout>
          <HeadLayout>
            <MainSection
              name={name}
              description={description}
              rating={rating}
            />
            <SubtotalSection
              price={price}
              slug={params.slug}
            />
          </HeadLayout>
          <OtherProductsSection />
        </MainLayout>
        <SameProductsSection />
      </>
      // <div className="w-full flex flex-row mb-8">
      //   <div className="flex flex-row">
      //     <div className="w-full px-5 flex flex-col gap-9 mt-16 max-w-md mx-auto md:max-w-2xl">

      //       <OtherProductsSection />
      //       <SameProductsSection />
      //     </div>
      //   </div>
      //   <SubtotalSection />
      //   <div className="btm-nav flex h-28 p-5 lg:hidden flex-col">
      //     <div className="flex flex-row w-full justify-between">
      //       <p className="text-paragraph">Subtotal</p>
      //       <p className="text-paragraph6">Rp.500.000</p>
      //     </div>
      //     <div className="flex flex-row w-full justify-between">
      //       <Button
      //         leftIcon={<SmsIcon />}
      //         customClassName="border border-black w-[88px]"
      //       ></Button>
      //       <Button
      //         title="Pesan"
      //         customClassName="bg-primary text-white w-[231px]"
      //         rightIcon={<ArrowForwardIcon />}
      //       ></Button>
      //     </div>
      //   </div>
      // </div>
    );
  }
  return (
    <div className="h-screen grid place-items-center">
      <h6 className="text-heading6">
        Produk tidak tersedia!
      </h6>
    </div>
  );
};

export default ProductDetail;
