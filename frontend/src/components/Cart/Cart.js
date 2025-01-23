import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  increaseItem,
  decreaseItem,
} from "../../utility/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.user);

  console.log(loggedInUser)
  const handleToggle = (id) => {

    loggedInUser
      ? console.log(`Toggled item with ID: ${id}`)
      : navigate("/SignUp");
  };
  const decrementQuantity = (id) => {
    dispatch(decreaseItem(id)); // Adjust for quantity logic in `cartSlice.js`
  };

  const incrementQuantity = (item) => {
    dispatch(increaseItem(item));
  };

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  console.log(cartItems)

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // const totalPrice = cartItems.reduce((acc, item) => {
  //   return (
  //     acc + parseInt(item.price.replace(/[^0-9]/g, ""), 10) * item.quantity
  //   );
  // }, 0);
  // console.log(cartItems)
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Amazon Cart</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-4 border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
              >
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleToggle(item.id)}
                  className="mt-2"
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">
                    ₹{item.price }
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-3 py-1 border rounded-l-md bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-3 py-1 border rounded-r-md bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>

                    <button className="text-sm text-blue-500 hover:underline">
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>
        <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-500">FREE</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Total Savings</span>
              <span>₹0</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <button className="mt-6 w-full py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
