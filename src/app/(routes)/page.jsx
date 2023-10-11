"use client";

import React, { useState, useEffect } from "react";
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
