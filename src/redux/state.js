import { configureStore } from '@reduxjs/toolkit';
import dishesSlice from 'redux/slice/dishes/dishes.slice';
import categorSlice from 'redux/slice/categor/categor.slice';
import orderSlice from 'redux/slice/order/order.slice';
import userSlice from './slice/user/user.slice';
export const store = configureStore({
  reducer: {
    dishes: dishesSlice,
    categors: categorSlice,
    order: orderSlice,
    user: userSlice,
  },
});
