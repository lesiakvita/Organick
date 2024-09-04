import React from "react";
import Offer from "./Offer";
import About from "./About";
import ProductGrid from "./ProductGrid";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

const HomePage = () => {
  return (
    <div>
      <Offer />
      <About />
      <ProductGrid />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;
