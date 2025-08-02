import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewLetterbox from "../components/NewLetterbox";
 

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <NewLetterbox/>
    </>
  );
};

export default Home;
