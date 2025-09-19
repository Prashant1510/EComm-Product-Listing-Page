// src/components/HotDeals.jsx
import React from "react";
import { useState } from "react";

const HotDeals = () => {

  const [activeDeal, setActiveDeal] = React.useState("Airmax");
  const deals = [
    { name: "Nike", count: 2 },
    { name: "Airmax", count: 48},
    { name: "Puma", count: 14 },
    { name: "Adidas", count: 15 },
    { name: "Zara", count: 23 },
    { name: "Bata", count: 1 },
    { name: "Campus", count: 95 },
  ];

  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-sm w-64">
      <h2 className="text-lg font-semibold mb-4">Hot Deals</h2>
      <ul className="space-y-3">
        {deals.map((deal, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-gray-700 cursor-pointer"
          >
            <span
              className={`${
                activeDeal === deal.name
                  ? "text-blue-500 font-medium cursor-pointer hover:underline"
                  : ""
              }`} onClick={() => setActiveDeal(deal.name)}
            >
              {deal.name}
            </span>
            <span
              className={`${
                activeDeal === deal.name ? "text-blue-500 font-medium" : "text-gray-500"
              }`}
            >
              {deal.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotDeals;
