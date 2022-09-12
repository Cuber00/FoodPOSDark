import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDishes = createAsyncThunk(
  'dishes/fetchDishes',
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get('http://localhost:3001/dishes')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const dishesSl = createSlice({
  name: 'dishes',
  initialState: {
    list: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchDishes.pending]: (state) => {
      state.status = 'penging';
      state.error = null;
    },
    [fetchDishes.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.list = action.payload;
    },
    [fetchDishes.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default dishesSl.reducer;
