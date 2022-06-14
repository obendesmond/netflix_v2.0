import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import GrayBorder from "../components/GrayBorder";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <GrayBorder />
      <FirstSection />
      <GrayBorder />
      <SecondSection />
      <GrayBorder />
      <ThirdSection />
      <GrayBorder />
      <FourthSection />
      <GrayBorder />
      <FAQSection />
      <GrayBorder />
    </div>
  );
}
