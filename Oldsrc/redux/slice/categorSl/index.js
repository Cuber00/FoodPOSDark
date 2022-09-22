import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import APIService, { SERVER_RESPONSE } from '../../constants/apiServices';

export const fetchCategor = createAsyncThunk(
  'category/fetchCategor',
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get(APIService.categoriesUrl)
        .then((res) => res.data)
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const categorSl = createSlice({
  name: 'category',
  initialState: {
    list: [],
    lineLeft: -1.5,
    status: null,
    error: null,
  },
  reducers: {
    setLeftLine: (state, action) => {
      state.lineLeft = action.payload;
    },
  },
  extraReducers: {
    [fetchCategor.pending]: (state) => {
      state.status = SERVER_RESPONSE.pending;
      state.error = null;
    },
    [fetchCategor.fulfilled]: (state, action) => {
      state.status = SERVER_RESPONSE.fulfilled;
      state.list = action.payload;
      state.error = null;
    },
    [fetchCategor.rejected]: (state, action) => {
      state.status = SERVER_RESPONSE.rejected;
      state.error = action.payload;
    },
  },
});

export const { setLeftLine } = categorSl.actions;
export default categorSl.reducer;
