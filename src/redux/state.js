import { configureStore } from '@reduxjs/toolkit';
import dishesSl from './slice/dishesSl';
import categorSl from './slice/categorSl';

export const store = configureStore({
  reducer: { dishesSl, categorSl },
});
