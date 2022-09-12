import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import APIService, { SERVER_RESPONSE } from '../../constants/apiServices';

export const fetchDishes = createAsyncThunk(
  'dishes/fetchDishes',
  async (params, { rejectWithValue }) => {
    let strParams = '';
    if (params !== undefined) {
      strParams =
        '?' +
        Object.entries(params)
          .map((i) => i.join('='))
          .join('&');
    }
    try {
      return await axios
        .get(APIService.dishesUrl + strParams)
        .then((res) => res.data)
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
    dishesList: [],
    status: null,
    error: null,
    activeCategory: 1,
    activeDeliveryType: 1,
    searchQuery: null,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActiveDeliveryType: (state, action) => {
      state.activeDeliveryType = action.payload;
    },
    setSearchQuery: (state, action) => {
      console.log(action);
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {
    [fetchDishes.pending]: (state) => {
      state.status = SERVER_RESPONSE.pending;
      state.error = null;
    },
    [fetchDishes.fulfilled]: (state, action) => {
      state.status = SERVER_RESPONSE.fulfilled;
      state.dishesList = action.payload;
    },
    [fetchDishes.rejected]: (state, action) => {
      state.status = SERVER_RESPONSE.rejected;
      state.error = action.payload;
    },
  },
});
export const { setActiveCategory, setActiveDeliveryType, setSearchQuery } = dishesSl.actions;
export default dishesSl.reducer;
