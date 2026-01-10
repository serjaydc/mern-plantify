import React from "react";
import Hero from "../components/home/Hero";
import BestSeller from "../components/home/BestSeller";
import About from "../components/home/About";
import Categories from "../components/home/Categories";
import Testimonals from "../components/home/Testimonals";

const HomePage = () => {
  return (
    <>
      <Hero />
      <BestSeller />
      <About />
      <Categories />
      <Testimonals />
    </>
  );
};

export default HomePage;
