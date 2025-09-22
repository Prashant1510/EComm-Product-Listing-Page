
import React, { useState } from "react";
import Banner from "../components/Banner";
import Toolbar from "../components/Toolbar";
import ProductGrid, { products } from "../components/ProductGrid";
import Pagination from "../components/Pagination";

const PRODUCTS_PER_PAGE = 6;

const Content = ({ sidebarOpen, setSidebarOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  return (
    <>
      <div className="w-full">
        <Banner sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Toolbar />
        <ProductGrid currentPage={currentPage} productsPerPage={PRODUCTS_PER_PAGE} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Content;
