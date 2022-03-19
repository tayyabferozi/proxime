import React from "react";
import Section from "../../components/Section/Section";

import MainLayout from "../../layouts/MainLayout";
import Drops from "../../partials/Drops/Drops";
import Featured from "../../partials/Featured/Featured";

const Explore = () => {
  return (
    <MainLayout>
      <Section id="hero-sm">
        <h2>Explore</h2>
      </Section>
      <Drops />
      <Featured />
    </MainLayout>
  );
};

export default Explore;
