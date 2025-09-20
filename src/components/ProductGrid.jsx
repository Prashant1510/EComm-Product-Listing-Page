import React from "react";

// Dummy data: 6 items
const products = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 299.43,
    oldPrice: 534.23,
    discount: "24% Off",
    image: "/images/image1.jpg",
    hot: true,
    rating: 4,
    ratingCount: 136
  },
  {
    id: 2,
    name: "Nike Air Max 270 React",
    price: 299.43,
    oldPrice: 534.23,
    discount: "24% Off",
    image: "/images/image2.jpg",
    hot: true,
    rating: 3,
    ratingCount: 95
  },
  {
    id: 3,
    name: "Nike Air Max 270 React",
    price: 299.43,
    oldPrice: 534.23,
    discount: "24% Off",
    image: "/images/image3.jpg",
    hot: true,
    rating: 5,
    ratingCount: 184
  },
  {
    id: 4,
    name: "Nike Air Max 270 React",
    price: 299.43,
    oldPrice: 534.23,
    discount: "24% Off",
    image: "/images/image4.jpg",
    hot: true,
    rating: 4,
    ratingCount: 75
  },
  {
    id: 5,
    name: "Nike Air Max 270 React",
    price: 299.43,
    oldPrice: 534.23,
    discount: "24% Off",
    image: "/images/image5.jpg",
    hot: true,
    rating: 4,
    ratingCount: 156
  },
  {
    id: 6,
    name: "Nike Air Max 270 React",
    price: 299.43,
    oldPrice: 534.23,
    discount: "24% Off",
    image: "/images/image6.jpg",
    hot: true,
    rating: 5,
    ratingCount: 210
  }
];

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

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div className="relative" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
