import { configureStore } from '@reduxjs/toolkit';
import dishesSl from './slice/dishesSl';
export const store = configureStore({
  reducer: { dishesSl },
});
