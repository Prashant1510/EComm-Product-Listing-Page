import React from "react";
import Banner from "../components/Banner";
import Toolbar from "../components/Toolbar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";

const Content = ({sidebarOpen, setSidebarOpen}) => {
  return (
    <>
      <div className="w-full">
        <Banner sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <Toolbar/>
        <ProductGrid/>
        <Pagination/>
      </div>
    </>
  );
};

export default Content;
