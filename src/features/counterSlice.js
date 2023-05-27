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
    upTotalOrderSum: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
    downTotalOrderSum: (state, action) => {
      state.totalPrice = state.totalPrice - action.payload;
    },
    clearTotalOrderSum: (state) => {
      state.totalPrice = 0;
    },
  },
});

export const { increase, decrease, clear, upTotalOrderSum, downTotalOrderSum, clearTotalOrderSum } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
