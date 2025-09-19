import React, { useState } from "react";

const colors = ["#2563eb", "#ef4444", "#000000", "#facc15", "#ec4899", "#f3e8e8"];

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="bg-gray-50 p-4 rounded shadow-sm w-max">
      <h2 className="font-semibold mb-2">COLOR</h2>
      <div className="flex gap-3 pt-2 pb-2"> 
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            type="button"
            className={`
              h-7 w-7 rounded-full 
              transition
              flex items-center justify-center
              ${selectedColor === color ? "ring-2  ring-gray-300 ring-offset-2" : ""}
            `}
            style={{
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
