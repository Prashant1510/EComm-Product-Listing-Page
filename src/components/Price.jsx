import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const steps = 1.01;
const min = 0;
const max = 100;

function PriceFilter() {
  const [values, setValues] = useState([min, max]);

  return (
    <div className="bg-gray-50 p-4 rounded shadow-sm">
      <h2 className="font-semibold mb-2">PRICES</h2>
      <div className="flex justify-between items-center mb-2 text-sm">
        <span>Range:</span>
        <span>
          ${(values[0]*2.0).toLocaleString()} - ${(values[1]*2.0).toLocaleString()}
        </span>
      </div>
      <Range
        step={steps}
        min={min}
        max={max}
        values={values}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-2 bg-gray-300 rounded"
            style={{ margin: "36px 0",background: getTrackBackground({
                values,
                colors: ["#d1d5db", "#2563eb", "#d1d5db"], 
                min: min,
                max: max
              }), }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props}) => (
          <div
            {...props}
            className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white"
          />
        )}
      />
    </div>
  );
}

export default PriceFilter;
