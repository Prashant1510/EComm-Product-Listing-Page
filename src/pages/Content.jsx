import React from "react";
import Banner from "../components/Banner";
import Toolbar from "../components/Toolbar";
import ProductGrid from "../components/ProductGrid";

const Content = () => {
  return (
    <>
      <div className="w-full">
        <Banner/>
        <Toolbar/>
        <ProductGrid/>
      </div>
    </>
  );
};

export default Content;
