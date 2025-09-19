// src/components/HotDeals.jsx
import React from "react";
import { useState } from "react";

const Brands = () => {

  const [activeBrand, setActiveBrand] = useState("Nike");
  const deals = [
    { name: "Nike", count: 26 },
    { name: "Puma", count: 28},
    { name: "Adidas", count: 35 },
    { name: "Siemens", count: 75 },
  ];

  return (
    <div className="bg-gray-50 p-5 rounded-sm shadow-sm w-64">
      <h2 className="text-lg font-semibold mb-4">BRAND</h2>
      <ul className="space-y-3">
        {deals.map((deal, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-gray-700 cursor-pointer"
          >
            <span
              className={`${
                activeBrand === deal.name
                  ? "text-blue-500 font-medium cursor-pointer hover:underline"
                  : ""
              }`} onClick={() => setActiveBrand(deal.name)}
            >
              {deal.name}
            </span>
            <span
              className={`${
                activeBrand === deal.name ? "text-blue-500 font-medium" : "text-gray-500"
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

export default Brands;
