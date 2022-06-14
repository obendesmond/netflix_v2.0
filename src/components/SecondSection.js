import React from "react";
import Section from "./Section";

export default function SecondSection() {
  return (
    <Section
      title="Download your shows to watch offline."
      body="Save your favorites easily and always have something to watch."
      img={require("../assets/netflix_phone.png")}
      reverse
    />
  );
}
