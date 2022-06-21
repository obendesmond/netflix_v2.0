import React from "react";
import Header from "../components/Header";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import GrayBorder from "../components/GrayBorder";
import UpComing from "../components/UpComing";
import DashboardHero from "../components/DashboardHero";

export default function Dashboard() {
  return (
    <div>
      <Header isDashboard />
      <DashboardHero />
      <Popular />
      <TopRated />
      <UpComing />
      <GrayBorder />
    </div>
  );
}
