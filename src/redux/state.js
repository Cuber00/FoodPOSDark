import { configureStore } from '@reduxjs/toolkit';
import dishesSl from './slice/dishesSl';
import categorSl from './slice/categorSl';
import orderSl from './slice/orderSl';
import userSlice from './slice/userSl';
export const store = configureStore({
  reducer: { dishesSl, categorSl, orderSl, userSl: userSlice },
});
