import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000';

export const endpoints = {
  food: '/food',
  brands: '/brands',
};

const initialState = {
  food: [],
  filteredFood: [],
};

export const getFood = createAsyncThunk('food/getFood', async (endpoint) => {
  try {
    const response = await axios.get(URL + endpoint);

    return response.data;
  } catch (error) {
    return error;
  }
});

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    
    filterFood: (state, action) => {
      const filteredFood = state.food.filter((item) => item.brand === action.payload);
      state.filteredFood = filteredFood;
      localStorage.setItem('food', JSON.stringify([...state.filteredFood]));
    },

    getFilteredFood: (state)=>{
      const result = JSON.parse(localStorage.getItem('food'));
      state.filteredFood = [...result];
      
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getFood.fulfilled, (state, action) => {
      state.food = action.payload;
    });
  },
});

export const { filterFood, getFilteredFood } = foodSlice.actions;
export default foodSlice.reducer;
