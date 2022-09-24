import { createSlice } from '@reduxjs/toolkit';
import { fetchCategor } from './categorAPI';

export const categorSlice = createSlice({
  name: 'categorSlice',
  initialState: {
    categor: null,
    activeCategor: 1,
  },
  reducers: {
    setActiveCategor: (state, action) => {
      state.activeCategor = action.payload;
    },
  },
  extraReducers: {
    [fetchCategor.fulfilled]: (state, action) => {
      state.categor = action.payload;
    },
  },
});

export const allCategor = (state) => state.categors.categor;
export const idActiveCategor = (state) => state.categors.activeCategor;

export const { setActiveCategor } = categorSlice.actions;

export default categorSlice.reducer;
