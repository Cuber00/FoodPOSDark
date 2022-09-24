import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DISHES, TYPE_ORDER } from 'redux/CONSTANTS';

export const fetchDishes = createAsyncThunk(
  'dishesSlice/fetchDishes',
  async (params, { rejectWithValue }) => {
    const PARAMS =
      '?' +
      Object.entries(params)
        .map((i) => i.join('='))
        .join('&');
    console.log(PARAMS);
    try {
      return await axios
        .get(DISHES + PARAMS)
        .then((res) => res.data)
        .catch((err) => {
          throw new Error(err);
        });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const fetchTypeOrder = createAsyncThunk(
  'dishesSlice/fetchTypeOrder',
  async (_, { rejectWithValue }) => {
    try {
      return await axios
        .get(TYPE_ORDER)
        .then((res) => res.data)
        .catch((err) => {
          throw new Error(err);
        });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
