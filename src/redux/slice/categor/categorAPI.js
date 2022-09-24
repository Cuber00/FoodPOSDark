import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CATEGORS } from 'redux/CONSTANTS';

export const fetchCategor = createAsyncThunk(
  'categorSlice/fetchCategor',
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get(CATEGORS)
        .then((res) => res.data)
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
