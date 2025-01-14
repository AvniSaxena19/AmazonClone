// src/components/content/ProductList.js
import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$15" },
    { id: 3, name: "Product 3", price: "$20" },
    { id: 4, name: "Product 4", price: "$25" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.price}</p>
          <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-400">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
