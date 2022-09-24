import { configureStore } from '@reduxjs/toolkit';
import dishesSlice from 'redux/slice/dishes/dishes.slice';
import categorSlice from 'redux/slice/categor/categor.slice';
export const store = configureStore({
  reducer: {
    dishes: dishesSlice,
    categors: categorSlice,
  },
});
