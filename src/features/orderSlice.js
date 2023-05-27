import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000';

export const endpoints = {
  food: '/food',
  brands: '/brands',
  orders: '/orders',
};

const initialState = {
  orders: [],
};

export const addOrder = createAsyncThunk('orders/addOrder', async (body) => {
  try {
    
    const response = await axios.post(URL + endpoints.orders, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.data;
    console.log(result);
  } catch (error) {
    return error;
  }
});

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

// export const { filterFood } = orderSlice.actions;
export default orderSlice.reducer;
