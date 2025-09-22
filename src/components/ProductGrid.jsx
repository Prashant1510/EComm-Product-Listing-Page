import React from "react";


// Generate 30 dummy products
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg"
];
const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Nike Air Max 270 React #${i + 1}`,
  price: 299.43 + (i % 6) * 10,
  oldPrice: 534.23 + (i % 6) * 10,
  discount: "24% Off",
  image: images[i % images.length],
  hot: i % 5 === 0,
  rating: (i % 5) + 1,
  ratingCount: 50 + (i * 7) % 200
}));

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-sm shadow-sm border-gray-300  flex flex-col ">
      {/* HOT badge */}
      {product.hot && (
        <span className="absolute left-0 top-0 bg-red-500 text-white text-xs px-4 py-2  z-10">HOT</span>
      )}
      <div className="w-full h-52 flex items-center justify-center relative mb-3 bg-white">
        <img src={product.image} alt={product.name} className="h-full w-full" />
      </div>
      <div className="mt-2 mb-1 font-bold text-lg text-gray-800 flex justify-center ">{product.name}</div>
      {/* Rating Stars */}
      <div className="flex items-center justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545-4.755-4.63 6.562-.954L10 .5l2.949 5.961 6.562.954-4.755 4.63 1.122 6.545z" />
          </svg>
        ))}
      </div>
      {/* Price, OldPrice, Discount */}
      <div className="flex items-center justify-center gap-3 mt-auto">
        <span className="text-blue-500 font-bold text-lg">${product.price}</span>
        <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
        <span className="text-red-500 text-sm font-semibold">{product.discount}</span>
      </div>
    </div>
  );
}


function ProductGrid({ currentPage = 1, productsPerPage = 6 }) {
  // Calculate which products to show
  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const pageProducts = products.slice(startIdx, endIdx);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {pageProducts.map(product => (
        <div className="relative" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
export { products };
