import { configureStore } from '@reduxjs/toolkit';

import foodSlice from '../features/foodSlice';
import { counterReducer } from '../features/counterSlice';
import cartSlice from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    food: foodSlice,
    counter: counterReducer,
    cart: cartSlice,
  },
});
