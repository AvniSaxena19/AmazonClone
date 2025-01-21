import React from "react";
import headPhone from "../../assets/headphone.jpg";
import laptop from "../../assets/laptop.jpg";
import watch from "../../assets/watch.jpg";
import phone from "../../assets/phone.jpg";
import heater from "../../assets/heater.jpg";
import kitchen from "../../assets/kitchen.jpg";
import makeup from "../../assets/makeup.jpg";
import women from "../../assets/women.jpg";

const CardsSection = () => {
  const cards = [
    {
      title: "Deals on accessories for your top smartphone brands",
      items: [
        { brand: "HeadPhones", discount: "Up to 70%", image: headPhone },
        { brand: "Laptops", discount: "Up to 60%", image: laptop },
        { brand: "Watches", discount: "Up to 35%", image: watch },
        { brand: "Mobiles", discount: "Up to 70%", image: phone },
      ],
    },
    {
      title: "Deals on accessories for your top brands",
      items: [
        { brand: "Heaters", discount: "Up to 70%", image: heater },
        { brand: "Makeups", discount: "Up to 60%", image: makeup },
        { brand: "Women Clothing", discount: "Up to 70%", image: women },
        { brand: "Kitchen Appliances", discount: "Up to 70%", image: kitchen },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 px-4 py-6 bg-gray-100 ">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          {/* Card Title */}
          <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
          {/* Grid Layout for Items */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {card.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-md hover:shadow-lg transition"
              >
                {/* Item Image */}
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-20 h-20 object-contain rounded-md"
                />
                {/* Item Details */}
                <p className="mt-2 font-medium text-sm">{item.brand}</p>
                <p className="text-sm text-gray-600">{item.discount}</p>
                {/* Shop Now Button */}
                <button className="mt-2 bg-yellow-500 text-white py-1 px-4 rounded-lg hover:bg-yellow-600 transition">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
