import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ORDERS } from 'redux/CONSTANTS';

export const fetchIdNewOrder = createAsyncThunk(
  'orderSlice/fetchIdNewOrder',
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get(ORDERS)
        .then((res) => res.data)
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
