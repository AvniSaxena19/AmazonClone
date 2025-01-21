import React from "react";
import haier from "../../assets/haier.jpg";
import havells from "../../assets/havells.jpg";
import faber from "../../assets/faber.jpg";
import havells1 from "../../assets/havells1.jpg";

const CardSection1 = () => {
  const products = [
    {
      name: "Havells Magnatron 25L",
      description:
        "India's First Water Heater with No Heating Element | Minimal Scaling",
      rating: 4.5,
      reviews: "465",
      price: "₹16,150",
      discount: "-46%",
      originalPrice: "₹29,990",
      deliveryDate: "Sunday, January 19",
      image: haier, // File path for the image
    },
    {
      name: "Faber Cyrus 25L",
      description:
        "Storage Water Heater | Heating Indicator | 8 Bar Pressure | ABS Body",
      rating: 4.0,
      reviews: "9",
      price: "₹11,990",
      discount: "-29%",
      originalPrice: "₹16,990",
      deliveryDate: "Sunday, January 19",
      image: havells, // File path for the image
    },
    {
      name: "Havells Bianca 25L",
      description:
        "5 Star Rated | Temp Sensing LED Knob | Anti-Rust Design",
      rating: 4.3,
      reviews: "572",
      price: "₹13,300",
      discount: "-31%",
      originalPrice: "₹19,315",
      deliveryDate: "Sunday, January 19",
      image: faber, // File path for the image
    },
    {
      name: "Haier Aqualad Pro 15L",
      description:
        "Adjustable Storage Water Geyser | Free Installation",
      rating: 4.6,
      reviews: "2,321",
      price: "₹11,950",
      discount: "-44%",
      originalPrice: "₹21,400",
      deliveryDate: "Monday, January 20",
      image: havells1, // File path for the image
    },
  ];

  return (
    <div className="bg-gray-100 px-4 py-6">
      <h2 className="text-2xl font-semibold mb-6">Best Deals on Geysers</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-500 font-bold">{product.discount}</span>
              <span className="line-through text-gray-500 text-sm">
                {product.originalPrice}
              </span>
            </div>
            <p className="text-lg font-bold text-gray-800">{product.price}</p>
            <p className="text-sm text-green-600">Get it by {product.deliveryDate}</p>
            <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection1;