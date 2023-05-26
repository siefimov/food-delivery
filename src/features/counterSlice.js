import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    addedFoodToCart: 0,
    totalPrice: 0,
  },
  reducers: {
    increase: (state) => {
      state.addedFoodToCart += 1;
    },
    decrease: (state) => {
      state.addedFoodToCart -= 1;
    },
    clear: (state) => {
      state.addedFoodToCart = 0;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload.price
    },
  },
});

export const { increase, decrease, clear, setTotalPrice } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
