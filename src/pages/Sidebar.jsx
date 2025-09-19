import React from "react";
import HotDeals from "../components/HotDeals";
import PriceFilter from "../components/Price";

const Sidebar = () => {
    return <>
    <div className="flex flex-col gap-6">
        <HotDeals/>
        <PriceFilter/>
    </div>
    </>
}

export default Sidebar;