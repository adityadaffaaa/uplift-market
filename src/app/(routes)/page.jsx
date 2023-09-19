"use client";

import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import FrequentlyUsedServicesSection from "./components/FrequentlyUsedServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialSection from "./components/TestimonialSection";
import EasyStepsToStartedSection from "./components/EasyStepsToStartedSection";
import TrustedBySection from "./components/TrustedBySection";
import FaqSection from "./components/FaqSection";
import GetStartedSection from "./components/GetStartedSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HeroSection />
      <CategorySection />
      <FrequentlyUsedServicesSection />
      <WhyChooseUsSection />
      <EasyStepsToStartedSection />
      <TestimonialSection />
      <TrustedBySection />
      <FaqSection />
      <GetStartedSection />
    </>
  );
};

export default Home;
