import React from "react";
import Banner from "../components/Banner";
import Toolbar from "../components/Toolbar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";

const Content = () => {
  return (
    <>
      <div className="w-full">
        <Banner/>
        <Toolbar/>
        <ProductGrid/>
        <Pagination/>
      </div>
    </>
  );
};

export default Content;
