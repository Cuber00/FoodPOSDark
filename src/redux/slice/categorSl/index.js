import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import APIService, { SERVER_RESPONSE } from '../../constants/apiServices';

export const fetchCategor = createAsyncThunk(
  'category/fetchCategor',
  async (_, { rejectWithValue }) => {
    return await axios.get(APIService.categoriesUrl).then((res) => res.data);
  },
);

export const categorSl = createSlice({
  name: 'category',
  initialState: {
    list: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCategor.pending]: (state) => {
      state.status = SERVER_RESPONSE.pending;
      state.error = null;
    },
    [fetchCategor.fulfilled]: (state, action) => {
      state.status = SERVER_RESPONSE.fulfilled;
      state.list = action.payload;
    },
    [fetchCategor.rejected]: (state) => {
      state.status = SERVER_RESPONSE.rejected;
      state.error = null;
    },
  },
});

export default categorSl.reducer;
