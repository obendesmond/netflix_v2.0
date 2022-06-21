import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import BlackSpace from "../components/BlackSpace";

export default function Profile() {
  return (
    <>
      <Header isDashboard />
      <Hero>
        <ProfileSection />
      </Hero>
    </>
  );
}
