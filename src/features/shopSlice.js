import { createSlice } from '@reduxjs/toolkit';

import { db } from '../api/db';

export const endpoints = {
  food: '/food',
  brands: '/brands',
};

const initialState = {
  shops: db.brands,
  selectedShop: [],
};

const shopSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    getShops: (state, action) => {
      state.shops;
    },
    selectShop: (state, action) => {
      state.selectedShop = state.shops.filter((item) => item.brand === action.payload);
    },
  },
});

export const { selectShop, getShops } = shopSlice.actions;
export default shopSlice.reducer;
