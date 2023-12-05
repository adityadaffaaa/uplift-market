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
} from "./components";
import ProviderPage from "./components/provider";

const Home = () => {
  return (
    <ProviderPage>
      <HeroSection />
      <CategorySection />
      <FrequentlyUsedServicesSection />
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
