import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Drops from "./Drops/Drops";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Release from "./Release/Release";

const Landing = () => {
  return (
    <MainLayout>
      <Hero />
      <Release />
      <Drops />
      <HowItWorks />
      <Featured />
    </MainLayout>
  );
};

export default Landing;
