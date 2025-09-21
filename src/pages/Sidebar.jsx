import React from "react";
import HotDeals from "../components/HotDeals";
import PriceFilter from "../components/Price";
import ColorPicker from "../components/ColorPicker";
import Brands from "../components/Brands";


const Sidebar = ({ onClose, isMobile }) => {
  return (
    <div className="relative flex flex-col gap-6 p-2 md:p-0 md:w-[20vw] md:max-w-72">
      {/* Close button for mobile overlay */}
      {isMobile && (
        <button
          className="absolute top-2 right-2 z-50 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow focus:outline-none"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      )}
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
  );
};

export default Sidebar;
