import React from "react";
import Hero from "./Hero";
import Search from "./Search";

export default function HomeHero() {
  return (
    <Hero>
      <div className="text-white space-y-2 px-5 flex flex-col justify-center items-center md:space-y-6 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">
          Unlimited movies, TV
          <br /> shows, and more.
        </h1>
        <p className="md:text-2xl">Watch anywhere. Cancel anytime.</p>
        <Search />
      </div>
    </Hero>
  );
}
