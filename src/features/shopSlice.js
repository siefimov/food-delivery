import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000';

export const endpoints = {
  food: '/food',
  brands: '/brands',
};

const initialState = {
  shops: [],
  selectedShop: [],
};

export const getShops = createAsyncThunk('shop/getShops', async (endpoint) => {
  try {
    const response = await axios.get(URL + endpoint);

    return response.data;
  } catch (error) {
    return error;
  }
});

const shopSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    selectShop: (state, action) => {
      state.selectedShop = state.shops.filter((item) => item.brand === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShops.fulfilled, (state, action) => {
      state.shops = action.payload;
    });
  },
});

export const { selectShop } = shopSlice.actions;
export default shopSlice.reducer;
