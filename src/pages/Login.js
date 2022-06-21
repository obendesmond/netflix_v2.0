import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LoginSection from "../components/LoginSection";

export default function Login() {
  return (
    <>
      <Header />
      <Hero>
        <LoginSection />
      </Hero>
    </>
  );
}
