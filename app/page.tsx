import React from "react";
import { Hero } from "../components/Sections/Hero";
import { ValueProp } from "../components/Sections/ValueProp";
import { Mechanics } from "../components/Sections/Mechanics";
import { Features } from "../components/Sections/Features";
import { Roadmap } from "../components/Sections/Roadmap";
import { Team } from "../components/Sections/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProp />
      <Mechanics />
      <Features />
      <Roadmap />
      <Team />
    </>
  );
}
