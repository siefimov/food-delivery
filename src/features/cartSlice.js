import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.food.id === action.payload.id);
      if (!existingItem) {
        state.cart.push({
          id: new Date().toISOString(),
          food: action.payload,
          qty: action.payload.qty || 1,
        });
        localStorage.setItem('carts', JSON.stringify([...state.cart]));
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((food) => food.id !== action.payload);
      localStorage.clear();
      localStorage.setItem('carts', JSON.stringify([...state.cart]));
    },

    getCarts: (state) => {
      const result = JSON.parse(localStorage.getItem('carts'));
      state.cart = [...result];
      console.log(result);
    },

    clearCart: (state) => {
      state.cart = [];
      // localStorage.clear();
      localStorage.setItem('carts', JSON.stringify([]));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCarts } = cartSlice.actions;
export default cartSlice.reducer;
