import React from "react";
import {
  HeroSection,
  CategorySection,
  FrequentlyUsedServicesSection,
  WhyChooseUsSection,
  TestimonialSection,
  EasyStepsToStartedSection,
  TrustedBySection,
  FaqSection,
  GetStartedSection,
} from "../components";
import ProviderPage from "./components/provider";
import { useProduct } from "@/app/hooks/user/product";

const fetchProduct = async () => {
  let setAlerts = [];
  const { getListProduct } = useProduct();
  try {
    const res = await getListProduct({ setAlerts });
    if (res.status === 200) {
      const data = res.data.data;

      return { data, setAlerts };
    } else {
      console.log(res);
      return { setAlerts };
    }
  } catch (error) {
    console.log(setAlerts);
    console.error("Something wrong", error);
  }
};

const Home = async () => {
  const res = await fetchProduct();
  return (
    <ProviderPage>
      <HeroSection />
      <CategorySection />
      <FrequentlyUsedServicesSection
        setAlerts={res?.setAlerts}
        products={res?.data}
      />
      <WhyChooseUsSection />
      <EasyStepsToStartedSection />
      <TestimonialSection />
      <TrustedBySection />
      <FaqSection />
      <GetStartedSection />
    </ProviderPage>
  );
};

export default Home;
