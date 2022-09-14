import { configureStore } from '@reduxjs/toolkit';
import dishesSl from './slice/dishesSl';
import categorSl from './slice/categorSl';
import orderSl from './slice/orderSl';
export const store = configureStore({
  reducer: { dishesSl, categorSl, orderSl },
});
