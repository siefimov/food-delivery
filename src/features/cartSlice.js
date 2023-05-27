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
          qty: action.payload.qty || 1
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((food) => food.id !== action.payload);
    },
    updateCart: (state, action)=>{
      
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
