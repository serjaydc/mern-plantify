import React from "react";

import Hero from "../components/home/Hero";
import WorkWith from "../components/home/WorkWith";
import About from "../components/home/About";
import FreshArrivals from "../components/home/FreshArrivals";
import PopularItems from "../components/home/PopularItems";
import WhyUs from "../components/home/WhyUs";
import Testimonials from "../components/home/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WorkWith />
      <About />
      <FreshArrivals />
      <WhyUs />
      <PopularItems />
      <Testimonials />
    </>
  );
};

export default HomePage;
