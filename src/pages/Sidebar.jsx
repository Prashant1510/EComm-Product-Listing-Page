import React from "react";
import HotDeals from "../components/HotDeals";
import PriceFilter from "../components/Price";
import ColorPicker from "../components/ColorPicker";
import Brands from "../components/Brands";

const Sidebar = () => {
    return <>
    <div className="flex flex-col gap-6">
        <HotDeals/>
        <PriceFilter/>
        <ColorPicker/>
        <Brands/>
    </div>
    </>
}

export default Sidebar;