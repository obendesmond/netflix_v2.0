import React from "react";
import Section from "./Section";

export default function FirstSection() {
  return (
    <Section
      title="Enjoy on your TV."
      body=" Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more."
      img={require("../assets/netflix_tv.png")}
    />
  );
}
