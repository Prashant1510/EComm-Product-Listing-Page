import React from "react";
import HotDeals from "../components/HotDeals";
import PriceFilter from "../components/Price";
import ColorPicker from "../components/ColorPicker";
import Brands from "../components/Brands";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <HotDeals />
        <PriceFilter />
        <ColorPicker />
        <Brands />
        <div>
          <button className="w-full bg-gray-50 text-center py-6 rounded text-lg font-medium text-gray-800 shadow-sm hover:bg-gray-100 transition">
            MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
