import React from "react";
import Section from "./Section";

export default function FourthSection() {
  return (
    <Section
      title="Create profiles for kids."
      body="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      img={require("../assets/netflix_kids.png")}
      reverse
    />
  );
}
