"use client";

import React, { useState, useEffect } from "react";
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
import { Cookies } from "react-cookie";

const Home = () => {
  const cookies = new Cookies();
  const [session, setSession] = useState(null);
  useEffect(() => {
    AOS.init();
    const token = cookies.get("token");
    if (token) {
      setSession(token);
    }
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
      <GetStartedSection session={session} />
    </>
  );
};

export default Home;
