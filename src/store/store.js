import { configureStore } from '@reduxjs/toolkit';

import foodSlice from '../features/foodSlice';
import { counterReducer } from '../features/counterSlice';
import cartSlice from '../features/cartSlice';
import orderSlice from '../features/orderSlice';

export const store = configureStore({
  reducer: {
    food: foodSlice,
    counter: counterReducer,
    cart: cartSlice,
    orders: orderSlice,
  },
});
