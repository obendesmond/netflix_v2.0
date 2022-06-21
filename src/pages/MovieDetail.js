import React from "react";
import BlackSpace from "../components/BlackSpace";
import Header from "../components/Header";
import MovieDetailSection from "../components/MovieDetailSection";

export default function MovieDetail() {
  return (
    <div className="bg-black">
      <Header isDashboard />
      {/* <BlackSpace /> */}
      <MovieDetailSection />
    </div>
  );
}
