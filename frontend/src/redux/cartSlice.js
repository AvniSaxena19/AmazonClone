// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartItems: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const product = action.payload;
//       console.log(product)

//       // Check if the product already exists in the cart
//       const existingItem = state.cartItems.find((item) => item.name === product.name);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.cartItems.push({ ...product, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//         const id = action.payload;
//         state.cartItems = state.cartItems.filter((item) =>{console.log(item);return  item.id !== id});
//   },
// }
// })

// export const { addToCart,removeFromCart } = cartSlice.actions;

// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const id  = action.payload;
      console.log(state.cartItems)
      state.cartItems = state.cartItems.filter((item) =>{console.log(item);return  item.id !== id});
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    toggleItemSelection: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.selected = !item.selected;
      }
    },
  },
});

export const {
addToCart,
  removeFromCart,
increaseItem,
  decreaseItem,
  toggleItemSelection,
} = cartSlice.actions;

export default cartSlice.reducer;

