import React, { useState } from "react";

function Pagination() {
  const [current, setCurrent] = useState(3);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="bg-gray-50 rounded shadow-sm w-full flex justify-center py-4 mt-5">
      <div className="flex gap-2">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => setCurrent(page)}
            className={`
              w-16 h-12 flex items-center justify-center text-xl 
               transition
              ${current === page
                ? "bg-sky-400 text-white font-medium"
                : "bg-transparent text-gray-800"}
              focus:outline-none
            `}
            style={{
              boxShadow: current === page ? "0 4px 16px 0 rgba(56,189,248,0.05)" : "none"
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
