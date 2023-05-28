import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { db } from '../api/db';
const URL = 'http://localhost:3000';

export const endpoints = {
  food: '/food',
  brands: '/brands',
};

const initialState = {
  shops: db.brands,
  selectedShop: [],
};

// export const getShops = createAsyncThunk('shop/getShops', async (endpoint) => {
//   try {
//     const response = await axios.get(URL + endpoint);

//     return response.data;
//   } catch (error) {
//     return error;
//   }
// });

const shopSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    getShops: (state, action) => {
      state.shops
    },
    selectShop: (state, action) => {
      state.selectedShop = state.shops.filter((item) => item.brand === action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getShops.fulfilled, (state, action) => {
  //     state.shops = action.payload;
  //   });
  // },
});

export const { selectShop, getShops } = shopSlice.actions;
export default shopSlice.reducer;
