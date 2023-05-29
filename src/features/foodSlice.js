import { createSlice } from '@reduxjs/toolkit';

import { db } from '../api/db';

export const endpoints = {
  food: '/food',
  brands: '/brands',
};

const initialState = {
  food: db.food,
  filteredFood: [],
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    getFood: (state, action) => {
      state.food;
    },
    filterFood: (state, action) => {
      const filteredFood = state.food.filter((item) => item.brand === action.payload);
      state.filteredFood = filteredFood;
      localStorage.setItem('food', JSON.stringify([...state.filteredFood]));
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(getFood.fulfilled, (state, action) => {
  //     state.food = action.payload;
  //   });
  // },
});

export const { filterFood, getFood, getFilteredFood } = foodSlice.actions;
export default foodSlice.reducer;
